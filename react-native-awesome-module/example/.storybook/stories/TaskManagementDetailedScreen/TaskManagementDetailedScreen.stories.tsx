// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskManagementDetailedScreen } from './TaskManagementDetailedScreen';
import React from 'react';

const TaskManagementDetailedScreenMeta: Meta<
  typeof TaskManagementDetailedScreen
> = {
  title: 'TaskManagementDetailedScreen',
  component: TaskManagementDetailedScreen,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default TaskManagementDetailedScreenMeta;

export const Basic: StoryObj<typeof TaskManagementDetailedScreen> = {};

// export const AnotherExample: StoryObj<typeof TaskManagementDetailedScreen> = {
//   args: {
//     text: 'Another example',
//   },
// };
