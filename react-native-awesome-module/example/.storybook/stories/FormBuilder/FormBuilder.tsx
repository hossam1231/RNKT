import React from 'react';
import { FormBuilder as _FormBuilder } from 'rnkt';

export type FormBuilderProps = {
  onPress: () => void;
  text: string;
};

export const FormBuilder =
  ({}: FormBuilderProps) => {
    return <_FormBuilder />;
  };
