import React,{ useState,useEffect} from 'react'
import './style.css'
import WeatherCard  from './WeatherCard'


const Temp = () => {
    const [SearchValue,SetSearchValue]= useState("Hyderabad");
    const [tempInfo,SetTempInfo]=useState("");
    const getWeatherData= async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=c616d6c058c2aef3c5d0f23e9d54dacc`
          const res= await fetch(url);
          const data=await res.json();
          const {temp,humidity,pressure}=data.main;
          const {main:weathermood}=data.weather[0];
          const {name}=data;
          const {speed}=data.wind;
          const {country,sunset}=data.sys;
          const myWeatherInfo={
            temp,
            humidity,
            pressure,
            weathermood,
            speed,
            name,
            country,
            sunset,


          };

SetTempInfo(myWeatherInfo);
          console.log(temp);

        }
        catch(error){
            console.log(error);
        }

    };
    useEffect(()=>{
        getWeatherData();
    },[])
    return (
        <>
        <div className="wrap" >
                <div className="search">
                    <input type="search" placeholder="Search City name....."
                        autoFocus
                        id="search"
                        className="searchTeam"
                        value={SearchValue}
                        onChange={(e)=>SetSearchValue(e.target.value)}
                        onKeyDown={getWeatherData}
                    />
                    <button className="searchButton" type="button" 
                    onClick={getWeatherData} >
                        Search
                    </button>

                </div>
            </div>
           
<WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default Temp
