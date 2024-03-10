// import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { StaticWelcomePageWithHeroImage } from './StaticWelcomePageWithHeroImage';
import React from 'react';

const StaticWelcomePageWithHeroImageMeta: Meta<
  typeof StaticWelcomePageWithHeroImage
> = {
  title: 'StaticWelcomePageWithHeroImage',
  component: StaticWelcomePageWithHeroImage,
  // argTypes: {
  //   onPress: { action: 'pressed the button' },
  // },
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [(Story) => <Story />],
};

export default StaticWelcomePageWithHeroImageMeta;

export const Basic: StoryObj<typeof StaticWelcomePageWithHeroImage> = {};

// export const AnotherExample: StoryObj<typeof StaticWelcomePageWithHeroImage> = {
//   args: {
//     text: 'Another example',
//   },
// };
