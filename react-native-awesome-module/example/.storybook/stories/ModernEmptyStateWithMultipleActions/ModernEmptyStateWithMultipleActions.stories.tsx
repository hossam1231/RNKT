// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ModernEmptyStateWithMultipleActions } from './ModernEmptyStateWithMultipleActions';
import React from 'react';

const ModernEmptyStateWithMultipleActionsMeta: Meta<
  typeof ModernEmptyStateWithMultipleActions
> = {
  title: 'ModernEmptyStateWithMultipleActions',
  component: ModernEmptyStateWithMultipleActions,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default ModernEmptyStateWithMultipleActionsMeta;

export const Basic: StoryObj<typeof ModernEmptyStateWithMultipleActions> = {};

// export const AnotherExample: StoryObj<typeof ModernEmptyStateWithMultipleActions> = {
//   args: {
//     text: 'Another example',
//   },
// };
