// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ListWithTextRadioButtons } from './ListWithTextRadioButtons';
import React from 'react';

const ListWithTextRadioButtonsMeta: Meta<
  typeof ListWithTextRadioButtons
> = {
  title: 'ListWithTextRadioButtons',
  component: ListWithTextRadioButtons,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default ListWithTextRadioButtonsMeta;

export const Basic: StoryObj<typeof ListWithTextRadioButtons> = {};

// export const AnotherExample: StoryObj<typeof ListWithTextRadioButtons> = {
//   args: {
//     text: 'Another example',
//   },
// };
