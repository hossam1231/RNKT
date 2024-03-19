import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Validation } from './util';
import { styles } from './styles';
import type { InputProps } from './interface';
import { YStack } from '../components/stack';

export function InputGovernor(props: any) {
  const { form, setForm, contentKey, required, model, validationType } = props;

  let formCopy = { ...form };
  const value = form[contentKey]?.value;

  const hasNoValidationType = !validationType;

  React.useEffect(() => {
    if (required && hasNoValidationType) {
      const isValuePresent = value;
      Object.assign(formCopy[contentKey], {
        required: isValuePresent ? false : true,
      });
      setForm(formCopy);
    }
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      onChangeText={(text) => {
        Object.assign(formCopy[contentKey], { value: text });
        setForm(formCopy);
      }}
      style={styles.inputControl}
    />
  );
}

type InputProps = {
  label: string;
  placeholder: string;
  validationCallback: any;
  password?: boolean;
  required: boolean;
  placeholderTextColor?: string;
  style: any;
  value: any;
  validationType: string | undefined;
};

export const Input = (
  props: // {
  //   label,
  //   placeholder,
  //   validationCallback,
  //   password = false,
  //   required,
  //   placeholderTextColor = '#878E9A',
  //   style,
  //   value,
  //   validationType,
  // }
  // :
  InputProps
) => {
  const {
    label,
    placeholder,
    value,
    validationCallback,
    password = false,
    validationType,
    required,
    placeholderTextColor = '#878E9A',
    style,
  } = props;

  return (
    <>
      <View style={[styles.input, !value && styles.inputInvalid]}>
        <Text style={styles.inputLabel}>{label}</Text>

        <TextInput
          {...props}
          placeholder={password ? '********' : placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={password}
          style={[styles.inputControl, style]}
        />

        {required && (
          <YStack space={1}>
            <Text>Required</Text>
          </YStack>
        )}
      </View>

      {validationType && (
        <Validation
          {...props}
          validationCallback={validationCallback}
          inputString={value}
        />
      )}
    </>
  );
};
