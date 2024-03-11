// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalDoubleCardListWithMultipleMetaText } from './HorizontalDoubleCardListWithMultipleMetaText';
import React from 'react';

const HorizontalDoubleCardListWithMultipleMetaTextMeta: Meta<
  typeof HorizontalDoubleCardListWithMultipleMetaText
> = {
  title: 'HorizontalDoubleCardListWithMultipleMetaText',
  component: HorizontalDoubleCardListWithMultipleMetaText,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default HorizontalDoubleCardListWithMultipleMetaTextMeta;

export const Basic: StoryObj<typeof HorizontalDoubleCardListWithMultipleMetaText> = {};

// export const AnotherExample: StoryObj<typeof HorizontalDoubleCardListWithMultipleMetaText> = {
//   args: {
//     text: 'Another example',
//   },
// };
