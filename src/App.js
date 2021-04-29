import './App.css'
import React, {useState,useEffect} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Hotel from './components/Hotel/Hotel.jsx'

const App = () => {

  const [data, setData] =useState([])
  const [loading, setLoading] =useState(false)

useEffect(() => {

  
setLoading(true)
setData([])

fetch(`api/hotels`)

    .then( (response)=>(response.json()))
    .then( (resdata)=>(setData(resdata)))
    .catch( (error) => {
                        console.log('error', error);
                        setData(null);
                      } )
    .finally(() => {
                  console.log('fetch end');
                  setLoading(false);
                })


  return () => {
   // cleanup
  }
}, [])
console.log('data=', data);

  return (
    <div className="App">
    <h1>Hotel</h1>
    {
      loading && <Loading/>}
     { data === null
                    ? <p>Something went wrong</p>
                    : data.map((hotel,i) =>(<Hotel hotel={hotel} key = {i.toString + '-hotel'}/>))

    }
    </div>
  )
}

export default App
