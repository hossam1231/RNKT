// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleEmptyState } from './SimpleEmptyState';
import React from 'react';

const SimpleEmptyStateMeta: Meta<
  typeof SimpleEmptyState
> = {
  title: 'SimpleEmptyState',
  component: SimpleEmptyState,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default SimpleEmptyStateMeta;

export const Basic: StoryObj<typeof SimpleEmptyState> = {};

// export const AnotherExample: StoryObj<typeof SimpleEmptyState> = {
//   args: {
//     text: 'Another example',
//   },
// };
