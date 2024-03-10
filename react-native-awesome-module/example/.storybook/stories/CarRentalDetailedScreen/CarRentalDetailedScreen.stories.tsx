// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { CarRentalDetailedScreen } from './CarRentalDetailedScreen';
import React from 'react';

const CarRentalDetailedScreenMeta: Meta<
  typeof CarRentalDetailedScreen
> = {
  title: 'CarRentalDetailedScreen',
  component: CarRentalDetailedScreen,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default CarRentalDetailedScreenMeta;

export const Basic: StoryObj<typeof CarRentalDetailedScreen> = {};

// export const AnotherExample: StoryObj<typeof CarRentalDetailedScreen> = {
//   args: {
//     text: 'Another example',
//   },
// };
