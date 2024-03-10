// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ModernAndMinimalisticSettingsPageWithLightActions } from './ModernAndMinimalisticSettingsPageWithLightActions';
import React from 'react';

const ModernAndMinimalisticSettingsPageWithLightActionsMeta: Meta<
  typeof ModernAndMinimalisticSettingsPageWithLightActions
> = {
  title: 'ModernAndMinimalisticSettingsPageWithLightActions',
  component: ModernAndMinimalisticSettingsPageWithLightActions,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default ModernAndMinimalisticSettingsPageWithLightActionsMeta;

export const Basic: StoryObj<typeof ModernAndMinimalisticSettingsPageWithLightActions> = {};

// export const AnotherExample: StoryObj<typeof ModernAndMinimalisticSettingsPageWithLightActions> = {
//   args: {
//     text: 'Another example',
//   },
// };
