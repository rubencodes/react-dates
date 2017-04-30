import React from 'react';
import addDays from 'date-fns/add_days';
import addWeeks from 'date-fns/add_weeks';
import format from 'date-fns/format';
import isFriday from 'date-fns/is_friday';
import { storiesOf } from '@kadira/storybook';

import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';
import isSameDay from '../src/utils/isSameDay';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

const datesList = [
  new Date(),
  addDays(new Date(), 1),
  addDays(new Date(), 3),
  addDays(new Date(), 9),
  addDays(new Date(), 10),
  addDays(new Date(), 11),
  addDays(new Date(), 12),
  addDays(new Date(), 13),
];

storiesOf('SDP - Day Props', module)
  .addWithInfo('default', () => (
    <SingleDatePickerWrapper autoFocus />
  ))
  .addWithInfo('allows all days, including past days', () => (
    <SingleDatePickerWrapper
      isOutsideRange={() => false}
      autoFocus
    />
  ))
  .addWithInfo('allows next two weeks only', () => (
    <SingleDatePickerWrapper
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, new Date()) ||
        isInclusivelyAfterDay(day, addWeeks(new Date(), 2))
      }
      autoFocus
    />
  ))
  .addWithInfo('with some blocked dates', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))
  .addWithInfo('with some highlighted dates', () => (
    <SingleDatePickerWrapper
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))
  .addWithInfo('blocks fridays', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day => isFriday(day)}
      autoFocus
    />
  ))
  .addWithInfo('with custom daily details', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      renderDay={day => format(day, 'ddd')}
      autoFocus
    />
  ));
