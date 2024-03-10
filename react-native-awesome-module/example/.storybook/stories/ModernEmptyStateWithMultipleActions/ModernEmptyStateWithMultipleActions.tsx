import React from 'react';
import { ModernEmptyStateWithMultipleActions as _ModernEmptyStateWithMultipleActions } from 'rnkt';

export type ModernEmptyStateWithMultipleActionsProps = {
  onPress: () => void;
  text: string;
};

export const ModernEmptyStateWithMultipleActions =
  ({}: ModernEmptyStateWithMultipleActionsProps) => {
    return <_ModernEmptyStateWithMultipleActions />;
  };
