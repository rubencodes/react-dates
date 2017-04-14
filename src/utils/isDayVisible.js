import isBeforeDay from './isBeforeDay';
import isAfterDay from './isAfterDay';

// TODO(maja): get this working for enableOutsideDays
export default function isDayVisible(day, month, numberOfMonths) {
  const firstDayOfFirstMonth = month.clone().startOf('month');
  if (isBeforeDay(day, firstDayOfFirstMonth)) return false;

  const lastDayOfLastMonth = month.clone().add(numberOfMonths - 1, 'months').endOf('month');
  if (isAfterDay(day, lastDayOfLastMonth)) return false;

  return true;
}
