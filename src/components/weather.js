"use client"
import React, { useEffect, useState } from 'react'

const Weather = ({ city }) => {
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api_key = 'ed96581740c747679bc160104241901';
    const url = 'http://api.weatherapi.com/v1/current.json?key=' + api_key + '&q=' + city
    useEffect(() => {
        if (city == null) {
            setError("City not specified");
            return
        }

        console.log(url)

        // To fetch data from the WeatherAPI
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                let result = await response.json();
                let weather = result.current;
                let location = result.location;

                setWeather(weather);
                setLocation(location);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div
            className="m-2 p-2 bg-indigo-100 rounded-md"
        >
            <p> Feels like: {weather.feelslike_c}℃, actually is {weather.temp_c}℃ </p>
            <p className='font-bold'> {location.name}, {location.country} </p>
        </div>
    )
}

export default Weather