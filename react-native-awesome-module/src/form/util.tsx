import { View, Text } from 'react-native';
import { styles } from './styles';
import React from 'react';
import type { ValidationProps, ValidationComponentProps } from './interface';

const ValidationChecker = ({
  type,
  inputString,
  validationCallback,
}: ValidationProps) => {
  const validationChecks: { [key: string]: () => string } = {
    minLength: () =>
      inputString.length >= 12
        ? 'Valid: Minimum of 12 characters'
        : 'Invalid: Requires minimum of 12 characters',
    lowerCase: () =>
      inputString.match(/[a-z]/)
        ? 'Valid: Contains lower case (a-z)'
        : 'Invalid: Requires at least 1 lower case (a-z)',
    upperCase: () =>
      inputString.match(/[A-Z]/)
        ? 'Valid: Contains upper case (A-Z)'
        : 'Invalid: Requires at least 1 upper case (A-Z)',
    number: () =>
      inputString.match(/\d/)
        ? 'Valid: Contains a number (0-9)'
        : 'Invalid: Requires at least 1 number (0-9)',
    symbol: () =>
      inputString.match(/[!@#$%^&*(),.?":{}|<>]/)
        ? 'Valid: Contains a symbol (%&,!#)'
        : 'Invalid: Requires at least 1 symbol (%&,!#)',
  };

  const validationMessage = validationChecks[type]
    ? validationChecks[type]()
    : '';

  React.useEffect(() => {
    validationCallback(validationMessage ? true : false);
    return () => {
      // effect;
    };
  }, [validationMessage]);

  return (
    <View
      style={[
        styles.inputValidationRow,
        !validationMessage.startsWith('Valid') &&
          styles.inputValidationRowInvalid,
      ]}
    >
      {/* <FeatherIcon color={validationMessage.startsWith("Valid") ? "#292B32" : "#FF0000"} name="check-circle" size={14} /> */}
      <Text style={styles.inputValidationRowText}>{validationMessage}</Text>
    </View>
  );
};

export function Validation({
  inputString,
  validationType,
  validationCallback,
}: ValidationComponentProps) {
  return (
    <View style={styles.inputValidation}>
      <ValidationChecker
        validationCallback={validationCallback}
        type={validationType}
        inputString={inputString}
      />
    </View>
  );
}
