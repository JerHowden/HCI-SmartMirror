import React, { Component } from 'react';

import { Fade } from '@material-ui/core';

export default class Weather extends Component {

    constructor(props) {
        super(props)

        this.weatherReport = this.weatherReport.bind(this)

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.weatherReport()
    }

    // Return .json of weather data
    async weatherReport(){

        // Dark Sky API request
        const key = 'https://api.openweathermap.org/data/2.5/weather?lat=33.5&lon=-101.85&appid=324b908d425e85e9124ac7c12b5baff9&units=imperial';

        const response = await fetch(key);
        const weather_data = await response.json();

        console.log(weather_data);
        console.log(weather_data.weather[0])

        let currentIcon;
        switch(weather_data.weather[0].icon){
            case('01d'):
                currentIcon = '/WeatherImages/Sun.svg';
                break;
            case('01n'):
                currentIcon = '/WeaterImages/ClearN.svg';
                break;
            case('10d'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('10n'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('09d'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('09n'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('11d'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('11n'):
                currentIcon = '/WeatherImages/Rain.svg';
                break;
            case('13d'):
                currentIcon = '/WeatherImages/Snow.svg';
                break;
            case('13n'):
                currentIcon = '/WeatherImages/Snow.svg';
                break;
            case('50d'):
                currentIcon = '/WeatherImages/Fog.svg';
                break;
            case('50n'):
                currentIcon = '/WeatherImages/Fog.svg';
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
                console.error("No Weather Icon!")
                break;
        }

        this.setState({ data: weather_data, icon: currentIcon }, () => console.log(this.state))
    }

    render() {
    
        return (
            
            <Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
                <div id="WeatherContainer" className="widget" style={this.props.style}>
                    {this.state.icon ? <img src={this.state.icon} width={50} height={50} /> : <div/>}
                    {this.state.data && this.state.data.main ? 
                        <div>
                            {Math.round(this.state.data.main.temp) + " °F"}
                        </div>
                    : <div/>}
                </div>
            </Fade>
            
        )
    
    }

}