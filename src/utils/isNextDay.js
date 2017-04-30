import isDate from 'date-fns/is_date';
import isTomorrow from 'date-fns/is_tomorrow';

export default function isNextDay(a, b) {
  if (!isDate(a) || !isDate(b)) return false;

  return isTomorrow(b);
}
