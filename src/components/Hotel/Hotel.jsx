import React,{useState} from 'react'
import Suscribe from '../Suscribe/Suscribe.jsx'

function Hotel({hotel,i}) {

const [showmore, setshowMore] = useState (false)
const [showSuscribe, SetShowSuscribe] = useState (false)

    return (
        <div className="hotels">
            {hotel.name}
          <div><button 
                        onClick={()=>(setshowMore(!showmore))}>
                        {
                            showmore ? 'show less' : 'show more'
                        }
                          </button></div> 
                               {
                                    showmore ? <div>  {hotel.stars} &#9733;  {hotel.city}</div> 
                                    : ''
                               }
                        
                                {
                                    showmore ? <button onClick={()=>(SetShowSuscribe(!showSuscribe))}>Request More Info</button>
                                    : ''
                                }

                                            {
                                                 showSuscribe ? <Suscribe hotel={hotel}  SetShowSuscribe={SetShowSuscribe}/> : ''

                                            }
                       
        </div>
    )
}

export default Hotel
