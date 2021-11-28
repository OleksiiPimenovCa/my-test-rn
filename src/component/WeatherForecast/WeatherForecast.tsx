import React from 'react';
import {
  TextInputProps,
  TextInput,
} from 'react-native';
import styles from './Input.styles';

interface WeatherForecastProps extends TextInputProps {
  placeholderText: string;
  value: string;
}

const Input = ({
  placeholderText,
  onChangeText,
  value = '',
}: InputProps) => {
  return (
    <TextInput
      value={value}
      style={styles.input}
      placeholder={placeholderText}
      onChangeText={onChangeText}
      accessibilityLabel={placeholderText}
    />)
}

export default Input
