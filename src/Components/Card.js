import React from 'react'
import {useState} from "react";
import dayjs from "dayjs";


const Card = ({result, listResult}) => {

    const time = dayjs(new Date()).format('ddd, DD MMMM, hh:mm')
    const temp = result?.main.temp
    const humidity = result?.main.humidity
    const pressure = result?.main.pressure
    const wind = result?.wind.speed
    const city = result?.name
    const country = result?.sys.country
    const feelsLike = result?.main.feels_like

    const [feelsTemperature, setFeelsTemperature] = useState()

    const [temperature, setTemperature] = useState(temp)

    const getCelsius = () => {
        setTemperature(Math.trunc(temp - 273.1))
        setFeelsTemperature(Math.trunc(feelsLike - 273.1))
    }

    const getFahrenheit = () => {
        setTemperature(Math.trunc((temp - 273.15) * 9 / 5 + 32))
        setFeelsTemperature(Math.trunc((feelsLike - 273.15) * 9 / 5 + 32))

    }


    return (
        <div className="card card1 fon">
            <div className="card-body">
                <p className="card-text">
                    <p className='my-0'><strong>{city}, {country}</strong></p>
                    <p>{time}</p>
                    <div className='container'>
                        <div className='row align-items-end'>
                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <p className='my-0'><strong className='strong1'>{temperature}</strong>
                                        <sup>
                                            <button onClick={getCelsius}>&deg;C</button>
                                            <button onClick={getFahrenheit}>&deg;F</button>
                                        </sup>
                                    </p>
                                    <p className="text-muted p1">feels Like: {feelsTemperature}</p>
                                </div>
                                <div className='col-6'>
                                    <p className='p1 my-0'> Wind:<span className="text-primary"> {wind} m/c</span></p>
                                    <p className='p1 my-0'>Humidity: <span className="text-primary">{humidity}%</span>
                                    </p>
                                    <p className='p1'>Pressure:<span className="text-primary"> {pressure}Pa</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}
export default Card