import React from 'react';

const Weather = (props) => {
        return (
            <div className='container'>
                {
                    props.tempreature && <p className='key'>Tempreature: {props.tempreature} </p>
                }
                {
                    props.city && <p className='key'>City: {props.city} </p>
                }
                {
                    props.country && <p className='key'>Country: {props.country} </p>
                }
                {
                    props.humidity && <p className='key'>Humidity: {props.humidity} </p>
                }
                {
                    props.description && <p className='key'>Description: {props.description} </p>
                }
                {
                    props.error && <p>Error: {props.error} </p>
                }                
            </div>
        );
}
 
export default Weather;