import { weatherObj,conditions } from '../';
import './weatherDisplay.css';

function ConditionsDisplay(el :conditions){
    return (
        <div className="container">
            <div className="leftbox">
            
            </div>
        </div>
    );
}

export function WeatherDisplay(weather: any){
    console.log(weather.list[0]);
    return (
        weather === {} ? <p>Cannot get weather data, sorry!</p> : 
        <div>
            <ConditionsDisplay {...weather.list[0]}/>
        </div>
    );
}
           
