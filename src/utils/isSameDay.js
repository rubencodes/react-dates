import isDate from 'date-fns/is_date';
import isSameDay from 'date-fns/is_same_day';

export default function sameDay(a, b) {
  if (!isDate(a) || !isDate(b)) return false;
  // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow
  return isSameDay(a, b);
}
