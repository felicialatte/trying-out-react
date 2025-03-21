import React from "react";
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner';


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`);
    }
    
    const apiKey = `701f06352d61835bc4fc894e7b084629`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
        (<InfinitySpin
            visible={true}
            width="200"
            color="yellow"
            ariaLabel="infinity-spin-loading"
            />)
    );
}