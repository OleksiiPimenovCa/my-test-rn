import { useEffect, useState } from 'react';
import { searchLocationByQuery, searchWeatherForLocation } from '../services/WeatherService';
import { ConsolidateWeatherTransformedType } from '../types/weatherTypes';
import {
    weatherTransformer
} from '../transformer/weatherTransformer'

type UseWeatherType = {
    weatherForecast: ConsolidateWeatherTransformedType[],
    city: string
}

export default function useWeather(query: string) {
    const [weather, setWeather] = useState<UseWeatherType | null>(null);
    const [result, setResult] = useState<UseWeatherType | null>(null);

    const refreshWeather = async () => {
        const location = await searchLocationByQuery(query)
        if (location) {
            const weather = await searchWeatherForLocation(location.woeid)
            setWeather(weather
                ? {
                    city: location.title,
                    weatherForecast: weatherTransformer(weather.consolidated_weather)
                }
                : null)
        }
    };

    useEffect(() => {
        if (query) {
            refreshWeather();
        } else {
            setWeather(null);
        }
    }, [query]);

    useEffect(() => {
        if (query && weather) {
            setResult(weather)
        } else {
            setResult(null)
        }
    }, [weather])

    return result;
}
