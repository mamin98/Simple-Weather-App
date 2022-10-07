import React, { Component } from 'react';
import Weather from './Weather';
import './AppWeather.css'
import WeatherForm from './WeatherForm';

const API_KEY = 'ef7e4ab14cb351dfcafc66b2029e8049';

class AppWeather extends Component {
    state = { 
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: ''
     } 

    getweather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api.json();
        if(city && country) {
          this.setState({
            tempreature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
        })
        } else {
        this.setState({
            tempreature: '',
            city: '',
            country: '',
            humidity: '',
            description: '',
            error: 'Please Enter Data (City & Country)'
          })
        }
    }
    render() { 
        return (
                <div className='wrapper'>
                <div className='container'>
                <WeatherForm getweather={this.getweather} />
                <Weather 
                  tempreature={this.state.tempreature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                 />
            </div>
                </div>

        );
    }
}
 
export default AppWeather;