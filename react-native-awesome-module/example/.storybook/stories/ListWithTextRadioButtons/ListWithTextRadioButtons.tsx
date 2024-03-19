import React from 'react';
import { ListWithTextRadioButtons as _ListWithTextRadioButtons } from 'rnkt';

export type ListWithTextRadioButtonsProps = {
  onPress: () => void;
  text: string;
};

export const ListWithTextRadioButtons =
  ({}: ListWithTextRadioButtonsProps) => {
    return <_ListWithTextRadioButtons />;
  };
