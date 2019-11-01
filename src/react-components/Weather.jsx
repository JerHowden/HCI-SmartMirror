import React, { Component } from 'react';

export default class Weather extends Component {

    constructor(props) {
        super(props)

        this.weatherReport = this.weatherReport.bind(this)

        this.state = {
   /*       location: {
            city: Lubock,
            lat: 33.5779,
            long: -101.8552
        }; */
            tempF: null,
            currentIcon: null,
        }
    }

    componentDidMount() {
        this.weatherReport()
    }

    // Return .json of weather data
    async weatherReport(){

        // Dark Sky API request
        const key = 'https://api.openweathermap.org/data/2.5/weather?lat=33.5&lon=-101.85&appid=324b908d425e85e9124ac7c12b5baff9&units=imperial';
        // Convert to .json
        const response = await fetch(key);
        const weather_data = response.json();

        // Return .json
        console.log(weather_data);
        
        
        this.setState({data: weather_data})
    }
/*
    let options = {
        method: 'GET',
        mode:   'cors'
    }

*/

// Return image icon path
icon(){
        let currentIcon;
        switch(this.state.data.icon){
            case('01d'):
                currentIcon = '../WeatherImages/Sun.svg';
                break;
            case('01n'):
                currentIcon = '/WeaterImages/ClearN.svg';
                break;
            case('10d'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('10n'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('09d'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('09n'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('11d'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('11n'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('13d'):
                currentIcon = '../WeatherImages/Snow.svg';
                break;
            case('13n'):
                currentIcon = '../WeatherImages/Snow.svg';
                break;
            case('50d'):
                currentIcon = '../WeatherImages/Fog.svg';
                break;
            case('50n'):
                currentIcon = '../WeatherImages/Fog.svg';
                break;
            case('03d'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('03n'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('02d'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('02n'):
                currentIcon = '/WeatherImages/CloudN.svg';
                break;
            case('04d'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('04n'):
                currentIcon = '/WeatherImages/CloudN.svg';
                break;
            default: 
                currentIcon = null;
                break;
        }
    }

    tempature(){
        let tempF;
        tempF = this.state.data.temp;
    }

    render() {
    
        return (
            
            <div>
                <img src={this.state.currentIcon} />  
           
                <div path={this.state.tempature}>
                </div> 
                
                
            </div>
            
        )
    
    }

}