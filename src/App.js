import './App.css';
import { useState ,useEffect } from 'react';
import FrontEnd from './components/frontend/frontend';
import getData from './components/backend';
function App() {

  const [location,setLocation] =useState({})
  const [weather,setWeather]=useState({})
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocation({latitude : position.coords.latitude ,longitude : position.coords.longitude})
    },()=> {setLocation({latitude:'17.45818', longitude : '78.55871'})},{maximumAge:60000, timeout:5000, enableHighAccuracy:true});
  
  }, [])

  useEffect(()=>{
    if(location['latitude']==null)return;
    getData(location).then(data=>{
      setWeather({data})
    })
  },[location])

  return (
    
    <FrontEnd weather={weather}/>
  );



  
}

export default App;
