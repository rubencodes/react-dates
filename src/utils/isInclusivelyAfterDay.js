import moment from 'moment';

import isSameDay from './isSameDay';
import isAfterDay from './isAfterDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return isAfterDay(a, b) || isSameDay(a, b);
}
