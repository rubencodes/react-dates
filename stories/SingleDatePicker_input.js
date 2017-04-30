import React from 'react';
import addDays from 'date-fns/add_days';
import { storiesOf } from '@kadira/storybook';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

storiesOf('SDP - Input Props', module)
  .addWithInfo('default', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
    />
  ))
  .addWithInfo('with clear dates button', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
    />
  ))
  .addWithInfo('reopens DayPicker on clear dates', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
      reopenPickerOnClearDate
    />
  ))
  .addWithInfo('with custom display format', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      displayFormat="MMM D"
    />
  ))
  .addWithInfo('with screen reader message', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ));
