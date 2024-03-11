// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { PersonalPageHeaderWithMultipleActions } from './PersonalPageHeaderWithMultipleActions';
import React from 'react';

const PersonalPageHeaderWithMultipleActionsMeta: Meta<
  typeof PersonalPageHeaderWithMultipleActions
> = {
  title: 'PersonalPageHeaderWithMultipleActions',
  component: PersonalPageHeaderWithMultipleActions,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default PersonalPageHeaderWithMultipleActionsMeta;

export const Basic: StoryObj<typeof PersonalPageHeaderWithMultipleActions> = {};

// export const AnotherExample: StoryObj<typeof PersonalPageHeaderWithMultipleActions> = {
//   args: {
//     text: 'Another example',
//   },
// };
