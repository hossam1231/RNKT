import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Validation } from './util';
import { styles } from './styles';
import type { InputProps } from './interface';

export function InputGovernor(props: any) {
  const { form, setForm, contentKey } = props;

  // Log key information
  console.log(
    `ln 12 $: InputGovernor -> contentKey `,
    `@jsonWatchdog`,
    JSON.stringify(props)
  );

  return (
    <Input
      {...props}
      onChangeText={(text) =>
        setForm({
          ...form,
          contentKey: { ...contentKey, value: text },
        })
      }
      style={styles.inputControl}
    />
  );
}

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
