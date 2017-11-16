import isDate from 'date-fns/is_date';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import { DISPLAY_FORMAT } from '../../constants';

export default function toLocalizedDateString(date, currentFormat) {
  if (!date) return null;

  const dateObj = isDate(date) ? date : parse(date, { format: currentFormat });
  if (!dateObj) return null;

  return format(dateObj, DISPLAY_FORMAT);
}
