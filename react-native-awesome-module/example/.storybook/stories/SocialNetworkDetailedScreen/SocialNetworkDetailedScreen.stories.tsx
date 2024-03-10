// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SocialNetworkDetailedScreen } from './SocialNetworkDetailedScreen';
import React from 'react';

const SocialNetworkDetailedScreenMeta: Meta<
  typeof SocialNetworkDetailedScreen
> = {
  title: 'SocialNetworkDetailedScreen',
  component: SocialNetworkDetailedScreen,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default SocialNetworkDetailedScreenMeta;

export const Basic: StoryObj<typeof SocialNetworkDetailedScreen> = {};

// export const AnotherExample: StoryObj<typeof SocialNetworkDetailedScreen> = {
//   args: {
//     text: 'Another example',
//   },
// };
