import React from 'react';
import { TaskManagementDetailedScreen as _TaskManagementDetailedScreen } from 'rnkt';

export type TaskManagementDetailedScreenProps = {
  onPress: () => void;
  text: string;
};

export const TaskManagementDetailedScreen =
  ({}: TaskManagementDetailedScreenProps) => {
    return <_TaskManagementDetailedScreen />;
  };
