import React, { Component } from 'react';

export default class Weather extends Component {

    constructor(props) {
        super(props)

        this.weatherReport = this.weatherReport.bind(this)

        this.state = {
   /*       location: {
            city: Lubock,
            state: TX,
            lat: 33.5779,
            long: -101.8552
        }; */
            tempature: null,
            currentWeather: null,
            currentIcon: null,
        }
    }

    componentDidMount() {
        this.weatherReport()
    }

    // Return .json of weather data
    async weatherReport(){

        // Dark Sky API request
        const key = 'https://api.darksky.net/forecast/96e680c514f41caa0797d585c8532a56/33.5779,-101.8552';

        // Convert to .json
        const response = await fetch(key);
        const weather_data = response.json();
        console.log(weather_data);
        
        // Return .json
        this.setState({data: weather_data})
    }


// Return image icon path
icon(){
        let currentIcon;
        switch(this.state.data.icon){
            case('clear-day'):
                currentIcon = '../WeatherImages/Sun.svg';
                break;
            case('clear-night'):
                currentIcon = '/WeaterImages/ClearN.svg';
                break;
            case('rain'):
                currentIcon = '../WeatherImages/Rain.svg';
                break;
            case('snow'):
                currentIcon = '../WeatherImages/Snow.svg';
                break;
            case('sleet'):
                currentIcon = '../WeatherImages/Snow.svg';
                break;
            case('wind'):
                currentIcon = '../WeatherI/Wind.svg';
                break;
            case('fog'):
                currentIcon = '../WeatherImages/Fog.svg';
                break;
            case('cloudy'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('partly-cloudy-day'):
                currentIcon = '/WeatherImages/Clouds.svg';
                break;
            case('partly-cloudy-night'):
                currentIcon = '/WeatherImages/CloudN.svg';
                break;
            default: 
                currentIcon = null;
                break;
        }
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