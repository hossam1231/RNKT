// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalItemListWithActionsAndDescriptions } from './VerticalItemListWithActionsAndDescriptions';
import React from 'react';

const VerticalItemListWithActionsAndDescriptionsMeta: Meta<
  typeof VerticalItemListWithActionsAndDescriptions
> = {
  title: 'VerticalItemListWithActionsAndDescriptions',
  component: VerticalItemListWithActionsAndDescriptions,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default VerticalItemListWithActionsAndDescriptionsMeta;

export const Basic: StoryObj<typeof VerticalItemListWithActionsAndDescriptions> = {};

// export const AnotherExample: StoryObj<typeof VerticalItemListWithActionsAndDescriptions> = {
//   args: {
//     text: 'Another example',
//   },
// };
