import axios from 'axios';
import {
    WeatherResponseType,
    LocationResponseType
} from '../types/weatherTypes'

const API_URL = 'https://www.metaweather.com/api/'
const axiosInstance = axios.create({ baseURL: API_URL });

const searchLocationByQuery = async (query: string): Promise<LocationResponseType> => {
    const result = await axiosInstance.get(`location/search/?query=${query}`).catch((e) => {
        console.log('Error', e)
    })
    return result?.data?.length ? result.data[0] : [];
};

const searchWeatherForLocation = async (woeid: number): Promise<WeatherResponseType> => {
    const result = await axiosInstance.get(`location/${woeid}/`).catch((e) => {
        console.log('Error', e)
    })
    return result?.data;
};

export { searchWeatherForLocation, searchLocationByQuery }
