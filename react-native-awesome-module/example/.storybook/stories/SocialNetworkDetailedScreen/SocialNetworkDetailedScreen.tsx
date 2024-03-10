import React from 'react';
import { SocialNetworkDetailedScreen as _SocialNetworkDetailedScreen } from 'rnkt';

export type SocialNetworkDetailedScreenProps = {
  onPress: () => void;
  text: string;
};

export const SocialNetworkDetailedScreen =
  ({}: SocialNetworkDetailedScreenProps) => {
    return <_SocialNetworkDetailedScreen />;
  };
