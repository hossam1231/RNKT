// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButtonGroupWithTextAndIconTabs
 } from './ToggleButtonGroupWithTextAndIconTabs';
import React from 'react';

const ToggleButtonGroupWithTextAndIconTabsMeta: Meta<
  typeof ToggleButtonGroupWithTextAndIconTabs

> = {
  title: 'ToggleButtonGroupWithTextAndIconTabs',
  component: ToggleButtonGroupWithTextAndIconTabs
,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default ToggleButtonGroupWithTextAndIconTabsMeta;

export const Basic: StoryObj<typeof ToggleButtonGroupWithTextAndIconTabs> = {};

// export const AnotherExample: StoryObj<typeof ToggleButtonGroupWithTextAndIconTabs
// > = {
//   args: {
//     text: 'Another example',
//   },
// };
