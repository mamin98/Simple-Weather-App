import React from 'react';
import image from './images/weather2.jpg'

const WeatherForm = (props) => { 
        return (

    <div className="card m-3">
    <div className='row no-gutters'>
    <div className='col'>
    <div className="card-body">
    <h5 className="card-title">Weather App</h5>
    <form onSubmit={props.getweather}>
        <div className='mb-3'>
        <input type="text" name='city' className='form-control m-3 w-50' placeholder='City'></input>
        <input type="text" name='country' className='form-control m-3 w-50' placeholder='Country'></input>
        <button type='submit' className='btn btn-primary m-3'>Get Weather</button>
        </div>
    </form>
    </div>    
    </div>
    <div className='col'>
    <img src={image} className="card-img-top h-100" alt="..."/>
    </div>
    </div>
    </div>

        );
}
 
export default WeatherForm;