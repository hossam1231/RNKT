import React from 'react';
import { CarRentalDetailedScreen as _CarRentalDetailedScreen } from 'rnkt';

export type CarRentalDetailedScreenProps = {
  onPress: () => void;
  text: string;
};

export const CarRentalDetailedScreen =
  ({}: CarRentalDetailedScreenProps) => {
    return <_CarRentalDetailedScreen />;
  };
