// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleFooterWithSingleAction } from './SimpleFooterWithSingleAction';
import React from 'react';

const SimpleFooterWithSingleActionMeta: Meta<
  typeof SimpleFooterWithSingleAction
> = {
  title: 'SimpleFooterWithSingleAction',
  component: SimpleFooterWithSingleAction,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default SimpleFooterWithSingleActionMeta;

export const Basic: StoryObj<typeof SimpleFooterWithSingleAction> = {};

// export const AnotherExample: StoryObj<typeof SimpleFooterWithSingleAction> = {
//   args: {
//     text: 'Another example',
//   },
// };
