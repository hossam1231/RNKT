// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { FormBuilder } from './FormBuilder';
import React from 'react';

const FormBuilderMeta: Meta<
  typeof FormBuilder
> = {
  title: 'FormBuilder',
  component: FormBuilder,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default FormBuilderMeta;

export const Basic: StoryObj<typeof FormBuilder> = {};

// export const AnotherExample: StoryObj<typeof FormBuilder> = {
//   args: {
//     text: 'Another example',
//   },
// };
