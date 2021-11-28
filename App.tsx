import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {
  Input,
  WeatherForecast
} from './src/component'
import {
  useWeather
} from './src/hooks'

const App = () => {
  const [location, setLocation] = useState<string>('')
  const weather = useWeather(location)
  console.log('weather', weather)
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.title}>Weather</Text>
      <Input
          value={location}
          placeholderText={'Enter location...'}
          onChangeText={setLocation}
      />
      <WeatherForecast weatherForecast={weather?.weatherForecast}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'center'
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
});

export default App;
