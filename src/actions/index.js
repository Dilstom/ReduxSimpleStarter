import API_K from '../../cred.js';
import axios from 'axios';

const API_KEY = API_K;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // promise

    console.log('Request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}