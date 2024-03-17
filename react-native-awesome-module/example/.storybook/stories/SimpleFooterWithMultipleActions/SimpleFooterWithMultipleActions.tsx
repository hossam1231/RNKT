import React from 'react';
import { SimpleFooterWithMultipleActions as _SimpleFooterWithMultipleActions } from 'rnkt';

export type SimpleFooterWithMultipleActionsProps = {
  onPress: () => void;
  text: string;
};

export const SimpleFooterWithMultipleActions =
  ({}: SimpleFooterWithMultipleActionsProps) => {
    return <_SimpleFooterWithMultipleActions />;
  };
