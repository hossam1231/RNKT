import React from 'react';
import { SimpleEmptyState as _SimpleEmptyState } from 'rnkt';

export type SimpleEmptyState = {
  onPress: () => void;
  text: string;
};

export const SimpleEmptyState =
  ({}: SimpleEmptyState) => {
    return <_SimpleEmptyState />;
  };
