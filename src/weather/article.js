import React, { useState,useEffect } from 'react'

const Article = ({city_data}) => {
    // de-structuring of objects.
    const{temp,humidity,pressure,country,sunset,speed,name,weather_mood,}=city_data;
    // now we can write city name as {name}, country name as {country}
    // using js to convert in seconds
     // creating a hooks to holds weather state
   const[weatherState,setWeatherState]= useState({});
   // we client request , we want to show city weather state only once so we will use useEffect() hooks
   
    useEffect(()=>{
        // if we get the weather_mood
        if(weather_mood){
            // using switch case instead of using if again and again
            switch(weather_mood){
                case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;  
                case "Haze":
                setWeatherState("wi-fog");
                break;
                
                case"Clear":
                setWeatherState("wi-day-sunny");
                break;

                case"MIST":
                setWeatherState("wi-wi-haze");
                break;

                case"Snow":
                setWeatherState("wi-snow");
                break;

                case"rain":
                setWeatherState("wi-rain");
                break;

                default:
                setWeatherState("wi-wi-sunny");
                break;
            }
        }
   },[weather_mood]);
    let sec=sunset;
    let date = new Date( sec  *1000 );
    let timestr=`${date.getHours()}:${date.getMinutes()}`;

  return (
    <React.Fragment>
         <article className='widget'>
             {/* A1-DIV */}
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                {/* A2- DIv */}
                <div className='weatherInfo'>
                    <div className='temperature'>
                               <span>{temp}&#176;C</span>
                    </div>
                    <div className='description'>
                          <div className='weatherCondition'>
                                     {weather_mood}
                          </div>
                          <div className='place'>
                                      {name},{country}
                          </div>
                    </div>
                </div>
                {/* A3 - Div */}
                <div className='date'>
                       {new Date().toLocaleString()};
                </div>
                {/* A4 - Div  */}
                <div className='extra-temp'>
                    {/* sunset and Humadity contianer */}
                    <div className='temp-info-minmax'>
                        {/* sunset */}
                        <div className='two-sided-section'>
                                    <p><i className={"wi wi-sunset"}></i></p>
                                    <p><i className="extra-info-leftside"> {timestr}<br/>Sunset</i></p>
                        </div>
                        {/* Humadity */}
                        <div className='two-sided-section'>
                                    <p><i className={"wi wi-humidity"}></i></p>
                                    <p><i className="extra-info-leftside"> {humidity}<br/>Humadity</i></p>
                        </div>
                    </div>
                    {/* pressure and speed */}
                    <div className='temp-info-minmax'>
                        {/* pressure */}
                        <div className='two-sided-section'>
                                    <p><i className={"wi wi-rain"}></i></p>
                                    <p><i className="extra-info-leftside">{pressure}<br/>Pressure</i></p>
                        </div>
                        {/*  speed */}
                        <div className='two-sided-section'>
                                    <p><i className={"wi wi-strong-wind"}></i></p>
                                    <p><i className="extra-info-leftside">{speed}<br/>Speed</i></p>
                        </div>
                    </div>
                </div>

        </article>
    </React.Fragment>
  )
}

export default Article