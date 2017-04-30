import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import setHours from 'date-fns/set_hours';
import getDay from 'date-fns/get_day';
import subDays from 'date-fns/sub_days';
import addDays from 'date-fns/add_days';

export default function getCalendarMonthWeeks(month, enableOutsideDays) {
  // set utc offset to get correct dates in future (when timezone changes)
  const baseDate = month;
  const firstOfMonth = setHours(startOfMonth(baseDate), 12);
  const lastOfMonth = setHours(endOfMonth(baseDate), 12);

  let currentDay = firstOfMonth;
  let currentWeek = [];
  const weeksInMonth = [];

  // days belonging to the previous month
  for (let i = 0; i < getDay(currentDay); i += 1) {
    const prevDay = enableOutsideDays ? subDays(currentDay, i + 1) : null;
    currentWeek.unshift(prevDay);
  }

  while (currentDay < lastOfMonth) {
    currentWeek.push(currentDay);
    currentDay = addDays(currentDay, 1);

    if (getDay(currentDay) === 0) {
      weeksInMonth.push(currentWeek);
      currentWeek = [];
    }
  }

  // getDay() returns the index of the day of the week according to the locale
  // this means if the week starts on Monday, getDay() will return 0 for a Monday date, not 1
  if (getDay(currentDay) !== 0) {
    // days belonging to the next month
    for (let k = getDay(currentDay), count = 0; k < 7; k += 1, count += 1) {
      const nextDay = enableOutsideDays ? addDays(currentDay, count) : null;
      currentWeek.push(nextDay);
    }

    weeksInMonth.push(currentWeek);
  }

  return weeksInMonth;
}
