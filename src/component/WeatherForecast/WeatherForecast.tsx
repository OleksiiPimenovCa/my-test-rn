import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './WeatherForecast.styles';
import {ConsolidateWeatherTransformedType} from '../../types/weatherTypes';


type WeatherForecastSectionProps = {
  title: string
  description: string
}
const WeatherForecastSection = ({title, description}: WeatherForecastSectionProps) => (
  <View style={styles.info}>
    <Text>{`${title}: ${description}`}</Text>
  </View>
)


type WeatherForecastProps = {
  weatherForecast?: ConsolidateWeatherTransformedType[]
}

const WeatherForecast = ({
  weatherForecast
}: WeatherForecastProps) => {
  if (!weatherForecast) {
    return null;
  }
  console.log('weatherForecast', weatherForecast)
  return (<View style={styles.container}>
    {
      weatherForecast.map((day) => {
        return <View style={styles.day} key={day.id}>
          <Text>{`Date: ${day.applicable_date}`}</Text>
          <WeatherForecastSection title={'Weather State'} description={`${day.weather_state_name}`}/>
          <WeatherForecastSection title={'Current Temperature'} description={`${day.the_temp} C°`}/>
          <WeatherForecastSection title={'Min/Max Temperature'} description={`${day.min_temp} C°/${day.max_temp} C°`}/>
          <WeatherForecastSection title={'Wind'} description={`${day.wind_speed} m/sec, ${day.wind_direction_compass}`}/>
        </View>
      })
    }
  </View>)
}

export default WeatherForecast
