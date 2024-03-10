import React from 'react';
import { SimpleFooterWithSingleAction as _SimpleFooterWithSingleAction } from 'rnkt';

export type SimpleFooterWithSingleActionProps = {
  onPress: () => void;
  text: string;
};

export const SimpleFooterWithSingleAction =
  ({}: SimpleFooterWithSingleActionProps) => {
    return <_SimpleFooterWithSingleAction />;
  };
