import React,{useState} from 'react'
import Loading from '../Loading/Loading.jsx'

function Suscribe({hotel,SetShowSuscribe}) {

 const [email, setEmail] = useState('')
 const [data, setData] = useState([])
 const [loading, setLoading] =useState(false)
const [message,setMessage] = useState('')

 const startPost = (email, hotel)=>{

 setLoading(true)
 setData([])

console.log('email=', email);
console.log('hotel=',hotel);

 fetch(`/api/hotels/subscribe`,{
    method:"POST",
    headers: {  'Authorization' : 'dsadkfjghdfkhd',
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
            },
    body: JSON.stringify({"email": email,"hotel":hotel.name })
                                }
    )

        .then((resopnse) => (resopnse.json()))
        .then((responseAdat) => {setData(responseAdat); setMessage( responseAdat.success ? 'subscribed':'already subscribed')
    })
        .catch(error=>{
                        console.log('error=',error );
                        setData(null)
                     })
        .finally( () => {
            console.log('fetch end');
            setLoading(false)
           setTimeout( () => {setMessage('');SetShowSuscribe(false)} ,5000)
                         })

 }
 console.log('data=',data);
 if(  message !== '')
     return <h4>{message}</h4>
 else    
     return (
        <div>
           
            <h1>Request more info about!</h1>
            { loading && <Loading/>}
            <input type="email" onChange={(ev)=>(setEmail(ev.target.value))}/>
            <button disabled={ !(email.includes('.') && email.includes('@'))} onClick={()=>(startPost(email,hotel))} >Send</button>
         
        </div>
    )
}

export default Suscribe
