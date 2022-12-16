import React from 'react'
import "./style.css"
import Card from './card';
const FrontEnd = (props) => {
    console.log(props)
    return <div className='container'>

        {props['weather']['data'] && <h1>{props['weather']['data']['city']['name']+"," +props['weather']['data']['city']['country']} </h1>}
        <div className='row'>
        {props['weather']['data'] && props['weather']['data']['list']&&
        
            props['weather']['data']['list'].map(

                (day,index)=>{

                        return <Card key={index} icon={"http://openweathermap.org/img/wn/"+day.weather[0].icon+"@2x.png"} temp={day.main.temp} 
                        description={day['weather'][0]['description']} date={day['dt_txt']}/>


                }
            )
        }
        </div>

    </div>;
}
 
export default FrontEnd;