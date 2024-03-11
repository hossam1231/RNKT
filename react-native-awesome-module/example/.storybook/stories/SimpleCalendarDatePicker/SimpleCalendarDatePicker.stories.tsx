// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleCalendarDatePicker } from './SimpleCalendarDatePicker';
import React from 'react';

const SimpleCalendarDatePickerMeta: Meta<
  typeof SimpleCalendarDatePicker
> = {
  title: 'SimpleCalendarDatePicker',
  component: SimpleCalendarDatePicker,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default SimpleCalendarDatePickerMeta;

export const Basic: StoryObj<typeof SimpleCalendarDatePicker> = {};

// export const AnotherExample: StoryObj<typeof SimpleCalendarDatePicker> = {
//   args: {
//     text: 'Another example',
//   },
// };
