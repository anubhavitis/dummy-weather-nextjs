"use client";

import React, { useState } from 'react';
import Weather from './weather';

const InputBox = () => {
    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const inputHandler = (event) => {
        setInputValue(event.target.value);

    }

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            setWeatherData(inputValue);
        }
    };

    return (
        <div className='flex flex-col justify-around h-1/2'>
            <div className='font-semibold my-3 text-indigo-400 h-1/3'
            >
                (Very) Dummy weather search service
            </div>
            <div className='h-2/3'>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        id="inputBox"
                        value={inputValue}
                        placeholder='e.g. london'
                        className="mx-1 p-1 rounded-md bg-indigo-100 border-solid border-2 border-indigo-200"
                        onChange={inputHandler}
                        onKeyDown={handleSearch}
                    />
                </div>
                <div>
                    {weatherData && <Weather city={weatherData} />}
                </div>
            </div>
        </div>
    );
};

export default InputBox;