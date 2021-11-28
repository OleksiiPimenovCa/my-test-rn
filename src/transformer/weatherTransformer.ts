import {ConsolidateWeatherType, ConsolidateWeatherTransformedType} from '../types/weatherTypes'

export const weatherTransformer = (weather: ConsolidateWeatherType[]): ConsolidateWeatherTransformedType[] => {
    return weather.map((weatherDay) => ({
        id: weatherDay.id,
        weather_state_name: weatherDay.weather_state_name,
        wind_direction_compass: weatherDay.weather_state_name,
        applicable_date: weatherDay.applicable_date,
        min_temp: weatherDay.min_temp.toFixed(2),
        max_temp: weatherDay.max_temp.toFixed(2),
        the_temp: weatherDay.the_temp.toFixed(2),
        wind_speed: weatherDay.wind_speed.toFixed(2),
    }))
}
