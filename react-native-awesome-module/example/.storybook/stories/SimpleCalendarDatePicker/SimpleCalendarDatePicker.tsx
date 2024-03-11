import React from 'react';
import { SimpleCalendarDatePicker as _SimpleCalendarDatePicker } from 'rnkt';

export type SimpleCalendarDatePickerProps = {
  onPress: () => void;
  text: string;
};

export const SimpleCalendarDatePicker =
  ({}: SimpleCalendarDatePickerProps) => {
    return <_SimpleCalendarDatePicker />;
  };
