import { expect } from 'chai';
import setMonth from 'date-fns/set_month';
import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from '../../src/utils/isSameDay';
import getCalendarMonthWeeks from '../../src/utils/getCalendarMonthWeeks';

const today = new Date();
const weeks = getCalendarMonthWeeks(today);
const weeksWithOutsideDays = getCalendarMonthWeeks(today, true);

describe('getCalendarMonthWeeks', () => {
  it('returns an array of arrays', () => {
    expect(weeks).to.be.instanceof(Array);

    weeks.forEach((week) => {
      expect(week).to.be.instanceof(Array);
    });
  });

  it('today is included', () => {
    let isIncluded = false;
    weeks.forEach((week) => {
      week.forEach((day) => {
        if (day && isSameDay(day, today)) isIncluded = true;
      });
    });

    expect(isIncluded).to.equal(true);
  });

  it('all days have a time of 12PM', () => {
    weeks.forEach((week) => {
      week.forEach((day) => {
        if (day) {
          expect(day.hours()).to.equal(12);
        }
      });
    });
  });

  describe('padding when enableOutsideDays is false', () => {
    let weeksWithPadding;

    before(() => {
      // using specific month Feb 2017 to manually compare with calendar
      weeksWithPadding = getCalendarMonthWeeks(new Date('2017-02-01'), false);
    });

    it('null pads leading days', () => {
      const firstWeek = weeksWithPadding[0];
      expect(firstWeek[0]).to.equal(null); // Sun Jan 29
      expect(firstWeek[1]).to.equal(null); // Mon Jan 30
      expect(firstWeek[2]).to.equal(null); // Tue Jan 31
      expect(firstWeek[3]).to.not.equal(null); // Wed Feb 1
    });

    it('null pads trailing days', () => {
      const lastWeek = weeksWithPadding[weeksWithPadding.length - 1];
      expect(lastWeek[2]).to.not.equal(null); // Tue Feb 28
      expect(lastWeek[3]).to.equal(null); // Wed Mar 1
      expect(lastWeek[4]).to.equal(null); // Thu Mar 2
      expect(lastWeek[5]).to.equal(null); // Fri Mar 3
      expect(lastWeek[6]).to.equal(null); // Sat Mar 4
    });
  });

  describe('Daylight Savings Time issues', () => {
    it('last of February does not equal first of March', () => {
      const february = getCalendarMonthWeeks(setMonth(today, 1));
      const lastWeekOfFebruary = february[february.length - 1].filter(Boolean);
      const lastOfFebruary = lastWeekOfFebruary[lastWeekOfFebruary.length - 1];

      const march = getCalendarMonthWeeks(setMonth(today, 2));
      const firstOfMarch = march[0].filter(Boolean)[0];

      expect(isSameDay(lastOfFebruary, firstOfMarch)).to.equal(false);
    });

    it('last of March does not equal first of April', () => {
      const march = getCalendarMonthWeeks(setMonth(today, 2));
      const lastWeekOfMarch = march[march.length - 1].filter(Boolean);
      const lastOfMarch = lastWeekOfMarch[lastWeekOfMarch.length - 1];

      const april = getCalendarMonthWeeks(setMonth(today, 3));
      const firstOfApril = april[0].filter(Boolean)[0];

      expect(isSameDay(lastOfMarch, firstOfApril)).to.equal(false);
    });
  });

  describe('enableOutsideDays arg is false', () => {
    it('first non-null element is first of the month', () => {
      const firstOfMonth = startOfMonth(today);
      const firstNonNullDay = weeks[0].filter(day => day)[0];
      expect(firstOfMonth.isSame(firstNonNullDay, 'day')).to.equal(true);
    });

    it('last non-null element is last of the month', () => {
      const lastOfMonth = endOfMonth(today);
      const lastWeek = weeks[weeks.length - 1].filter(day => day);
      const lastNonNullDay = lastWeek[lastWeek.length - 1];
      expect(lastOfMonth.isSame(lastNonNullDay, 'day')).to.equal(true);
    });

    it('number of non-null elements is equal to number of days in month', () => {
      const daysInCalendarMonthWeeks = weeks.reduce((a, b) => a + b.filter(day => day).length, 0);
      expect(daysInCalendarMonthWeeks).to.equal(today.daysInMonth());
    });
  });

  describe('enableOutsideDays arg is true', () => {
    it('contains first of the month', () => {
      const firstOfMonth = startOfMonth(today);
      const containsFirstOfMonth =
        weeksWithOutsideDays[0].filter(day => firstOfMonth.isSame(day, 'day')).length > 0;
      expect(containsFirstOfMonth).to.equal(true);
    });

    it('last week contains last of the month', () => {
      const lastOfMonth = endOfMonth(today);
      const containsLastOfMonth = weeks[weeksWithOutsideDays.length - 1]
        .filter(day => lastOfMonth.isSame(day, 'day')).length > 0;
      expect(containsLastOfMonth).to.equal(true);
    });

    it('last week contains last of the month if next month begins on Sunday', () => {
      const december2016 = new Date('2016-12-01');
      const lastOfMonth = endOfMonth(december2016);
      const weeksInDecember = getCalendarMonthWeeks(december2016);
      const containsLastOfMonth = weeksInDecember[weeksInDecember.length - 1]
        .filter(day => lastOfMonth.isSame(day, 'day')).length > 0;
      expect(containsLastOfMonth).to.equal(true);
    });

    it('last week contains last of the month if next month begins on Monday', () => {
      //TODO: moment.locale('es');
      const april2017 = new Date('2017-04-01');
      const lastOfMonth = endOfMonth(april2017);
      const weeksInApril = getCalendarMonthWeeks(april2017);
      const containsLastOfMonth = weeksInApril[weeksInApril.length - 1]
        .filter(day => lastOfMonth.isSame(day, 'day')).length > 0;
      expect(containsLastOfMonth).to.equal(true);
    });

    it('last week contains last of the month if next month begins on Saturday', () => {
      const september2016 = new Date('2016-09-01');
      const lastOfMonth = endOfMonth(september2016);
      const weeksInSeptember = getCalendarMonthWeeks(september2016);
      const containsLastOfMonth = weeksInSeptember[weeksInSeptember.length - 1]
        .filter(day => lastOfMonth.isSame(day, 'day')).length > 0;
      expect(containsLastOfMonth).to.equal(true);
    });

    it('each week has 7 non-null elements', () => {
      const hasNoNullElements = weeksWithOutsideDays
        .reduce((w1, w2) => w1 && w2.reduce((d1, d2) => d1 && !!d2, true), true);
      expect(hasNoNullElements).to.equal(true);
    });
  });
});
