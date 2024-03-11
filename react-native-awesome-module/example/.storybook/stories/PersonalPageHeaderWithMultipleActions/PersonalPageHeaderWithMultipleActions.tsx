import React from 'react';
import { PersonalPageHeaderWithMultipleActions as _PersonalPageHeaderWithMultipleActions } from 'rnkt';

export type PersonalPageHeaderWithMultipleActionsProps = {
  onPress: () => void;
  text: string;
};

export const PersonalPageHeaderWithMultipleActions =
  ({}: PersonalPageHeaderWithMultipleActionsProps) => {
    return <_PersonalPageHeaderWithMultipleActions />;
  };
