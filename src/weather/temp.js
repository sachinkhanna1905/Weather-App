// out api link that we created 
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=49ebb814ffed4ec47a589493b39dc032

import React, { useEffect, useState } from 'react'
import Article from './article'
import './style.css'

const Temp = () => {
    // using usestate Hooks 
    const [searchValue,setSearchValue]= useState("pune");
    // passing and empty object.
    const [cityData,setCityData]=React.useState({});
    const getWeatherInfo = async()=>{
        try{
            //    getting url of the API 
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=49ebb814ffed4ec47a589493b39dc032`;
            // fetching the api data 
            const res= await fetch(url);
            // after fetching , converting the api data in readable format 
            const data= await res.json();
            // to check do we getting the city data what client has written 
            console.log(data);
            // weather state
            // temp  ,humidity,pressure
            // const {temp}=data.main , const {humidity}=data.main,  const{pressure}=data.main;
            const{temp,humidity,pressure}=data.main;
            // country , sunset
            // const{country}=data.sys,  const {sunset}=data.sys;
            const{country,sunset}=data.sys;
            // weather state
            // or const{}=data.weather[0].main;
            const {main:weather_mood}=data.weather[0];
            console.log(weather_mood);
            // speed
            const{speed}=data.wind;
            // name
            const{name}=data;
            // // checking 
            // console.log(temp);
            // console.log(humidity);
            // console.log(pressure);
            // console.log(country);
            // console.log(sunset);
            // console.log(speed);
            // console.log(name);
            // after clinet request . We get the data from api and Storing the data of the city in an object 
            // and holding object data in a hooks called useState();
            const api_city_data={
                temp,humidity,pressure,country,sunset,speed,name,weather_mood,
            }
            // holding the data the api_city_data in a usestate hooks  and before that create a hooks cityData.
             setCityData(api_city_data);
             
        }catch(error){
        console.log(error);
        }
    }
    // before seaching . the data of a city called pune is showing. That is done by useEffect();
    useEffect( ()=>{
       getWeatherInfo();
    },[]);
    
  return (
    <React.Fragment>
        <div className='wrap'>
            {/* /* <div className='search'> */}
                {/* what client had written in the search box is get by value and onchange  */}
                {/* and for using value and onchange we need state_variable here it is usestate */}
                {/* <input className='searchTerm' id='seach' type="search" placeholder="Search...." */}
                  {/* // value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} */}
                {/* // ></input> */}
                {/* <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button> */}
            {/* </div>  */}
             {/* search  */}
             <div class="search1">
                 {/* <input className="search-bar" placeholder="Search...."><input/> */}
                 <input className="search-bar" type='search'placeholder="Search...."
                  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
                 ></input>
                 <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        {/* creating out article for weather information */}
         {/* to make our code readable we made new file for article section */}
         {/* passing cityData as a proops */}
         <Article city_data={cityData}/>
    </React.Fragment>
  )
}

export default Temp