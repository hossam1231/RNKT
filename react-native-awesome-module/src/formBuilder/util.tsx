import { View, Text } from 'react-native';
import { styles } from './styles';
import React from 'react';
import type { ValidationProps, ValidationComponentProps } from './interface';

export function getContentFromData(data: any) {
  return data['content'];
}

export function getFormDataValues(content: any) {
  let contentType;
  let contentKeys;
  if (!content) {
    return { contentType, contentKeys };
  }
  contentType = Object.keys(content)[0];
  // what type of form item will be showed on the page
  contentKeys = content[contentType];
  return { contentType, contentKeys };
}
const ValidationChecker = (props: ValidationProps) => {
  const { value } = props;
  const validationChecks: { [key: string]: () => string } = {
    minLength: () =>
      value.length >= 12
        ? 'Valid: Minimum of 12 characters'
        : 'Invalid: Requires minimum of 12 characters',
    lowerCase: () =>
      value.match(/[a-z]/)
        ? 'Valid: Contains lower case (a-z)'
        : 'Invalid: Requires at least 1 lower case (a-z)',
    upperCase: () =>
      value.match(/[A-Z]/)
        ? 'Valid: Contains upper case (A-Z)'
        : 'Invalid: Requires at least 1 upper case (A-Z)',
    number: () =>
      value.match(/\d/)
        ? 'Valid: Contains a number (0-9)'
        : 'Invalid: Requires at least 1 number (0-9)',
    symbol: () =>
      value.match(/[!@#$%^&*(),.?":{}|<>]/)
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

export function Validation(props: ValidationComponentProps) {
  return (
    <View style={styles.inputValidation}>
      <ValidationChecker {...props} />
    </View>
  );
}
