import isDate from 'date-fns/is_date';
import isAfter from 'date-fns/is_after';

import isSameDay from './isSameDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!isDate(a) || !isDate(b)) return false;
  return isAfter(a, b) || isSameDay(a, b);
}
