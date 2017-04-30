import React from 'react';
import addDays from 'date-fns/add_days';
import { storiesOf } from '@kadira/storybook';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';

const TestCustomInputIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    C
  </span>
);

const TestCustomArrowIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    {'--->'}
  </span>
);

const TestCustomCloseIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >'X'</span>
);

storiesOf('DRP - Input Props', module)
  .addWithInfo('default', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
    />
  ))
  .addWithInfo('with clear dates button', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
    />
  ))
  .addWithInfo('reopens DayPicker on clear dates', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      reopenPickerOnClearDates
    />
  ))
  .addWithInfo('with custom display format', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      displayFormat="MMM D"
    />
  ))
  .addWithInfo('with show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showDefaultInputIcon
    />
  ))
  .addWithInfo('with custom show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))
  .addWithInfo('with custom arrow icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      customArrowIcon={<TestCustomArrowIcon />}
    />
  ))
  .addWithInfo('with custom close icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      customCloseIcon={<TestCustomCloseIcon />}
    />
  ))
  .addWithInfo('with screen reader message', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ));
