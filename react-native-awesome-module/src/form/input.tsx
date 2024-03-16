import React from 'react';
import {
  View,
  Text,
  TextInput,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { Validation } from './util';
import { styles } from './styles';

export const Input = ({
  label,
  placeholder,
  validationCallback,
  autoCapitalize,
  autoCorrect,
  password = false,
  keyboardType,
  onChangeText,
  placeholderTextColor = '#878E9A',
  style,
  value,
  validationType,
}: InputProps) => {
  return (
    <>
      <View style={[styles.input, !value && styles.inputInvalid]}>
        <Text style={styles.inputLabel}>{label}</Text>

        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={password ? '********' : placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={password}
          style={[styles.inputControl, style]}
          value={value}
        />
      </View>
      {validationType && (
        <Validation
          validationCallback={validationCallback}
          inputString={value}
          validationType={validationType}
        />
      )}
    </>
  );
};
