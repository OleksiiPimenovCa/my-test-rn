import {View} from "react-native";
import React from "react";

export type LocationResponseType = {
    title: string
    location_type: string
    woeid: number
    latt_long: string
}

export type ConsolidateWeatherType = {
    id: number
    weather_state_name: string
    weather_state_abbr: string
    wind_direction_compass: string
    created: string
    applicable_date: string
    min_temp: number
    max_temp: number
    the_temp: number
    wind_speed: number
    wind_direction: number
    air_pressure: number
    humidity: number
    visibility: number
    predictability: number
}
export type ConsolidateWeatherTransformedType = {
    id: number
    weather_state_name: string
    wind_direction_compass: string
    applicable_date: string
    min_temp: string
    max_temp: string
    the_temp: string
    wind_speed: string
}

export type SourceType = {
    title: string
    slug: string
    url: string
    crawl_rate: number
}

export type WeatherResponseType = {
    consolidated_weather: ConsolidateWeatherType[]
    time: Date
    sun_rise: Date
    sun_set: Date
    timezone_name: string
    parent: LocationResponseType
    sources: SourceType[]
    title: string
    location_type: string
    woeid: number
    latt_long: string
    timezone: string
}
