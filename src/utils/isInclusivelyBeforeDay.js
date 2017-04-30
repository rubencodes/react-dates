import isDate from 'date-fns/is_date';
import isBefore from 'date-fns/is_before';

import isSameDay from './isSameDay';

export default function isInclusivelyBeforeDay(a, b) {
  if (!isDate(a) || !isDate(b)) return false;
  return isBefore(a, b) || isSameDay(a, b);
}
