// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleFooterWithMultipleActions } from './SimpleFooterWithMultipleActions';
import React from 'react';

const SimpleFooterWithMultipleActionsMeta: Meta<
  typeof SimpleFooterWithMultipleActions
> = {
  title: 'SimpleFooterWithMultipleActions',
  component: SimpleFooterWithMultipleActions,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default SimpleFooterWithMultipleActionsMeta;

export const Basic: StoryObj<typeof SimpleFooterWithMultipleActions> = {};

// export const AnotherExample: StoryObj<typeof SimpleFooterWithMultipleActions> = {
//   args: {
//     text: 'Another example',
//   },
// };
