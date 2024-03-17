import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Validation } from './util';
import { styles } from './styles';
import type { InputProps } from './interface';

export function InputCell(props: any) {
  const { form, setForm, model, contentKey } = props;
  // the previous form value for all the fields to be filled out
  // set form this allows us with spread syntax to set only our specific value and leave the rest untouched
  // form has been drilled into all form components to allow us remotely set the state
  // our content key is the key we will use to get the data for our key ... eg email and its form data such as required, validation ect ect

  const thisFormItem = form[contentKey];
  const thisModelItem = model[contentKey];

  const [requiredState, setRequiredState] = useState(
    thisModelItem.required ? thisModelItem.required : null
  );
  //  this can be something that attaches itself to the state and its presence means it cannot show any proceed dialoge this can be set in the inital useeffect

  React.useEffect(() => {
    if (requiredState) {
      setForm({
        ...form,
        contentKey: { ...contentKey, required: requiredState },
        //  if required is true do not show proceed on other pages
      });
    }

    return () => {
      // effect;
    };
  }, [requiredState]);
  // if the required state changes set this change to the form item

  if (!thisModelItem) return <></>;

  return (
    <Input
      autoCapitalize={thisModelItem.autoCapitalize}
      autoCorrect={thisModelItem.autoCorrect}
      keyboardType={thisModelItem.keyboardType}
      onChangeText={(text) =>
        setForm({
          ...form,
          contentKey: { ...contentKey, value: text },
        })
      }
      // on change we should set the value of this refrence in the form
      style={thisModelItem.styles ?? styles.inputControl}
      value={thisFormItem.value}
      // set the value as the formItem.value found in the form
      placeholder={thisModelItem.placeholder}
      label={thisModelItem.label}
      // validationType="email"
      validationCallback={setRequiredState}
      // {...props}
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
