import moment from 'moment';

import isSameDay from './isSameDay';
import isBeforeDay from './isBeforeDay';

export default function isInclusivelyBeforeDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return isBeforeDay(a, b) || isSameDay(a, b);
}
