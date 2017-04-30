import addDays from 'date-fns/add_days';
import { expect } from 'chai';

import isSameDay from '../../src/utils/isSameDay';

const today = new Date();
const tomorrow = addDays(today, 1);

describe('isSameDay', () => {
  it('returns true if args are the same day', () => {
    expect(isSameDay(today, today)).to.equal(true);
  });

  it('returns false if args are not the same day', () => {
    expect(isSameDay(today, tomorrow)).to.equal(false);
  });

  it('returns false for same days of week', () => {
    // Flags accidentally use of moment's day() function, which returns index
    // within the week.
    expect(isSameDay(
      new Date('2000-01-01'),
      new Date('2000-01-08'),
    )).to.equal(false);
  });

  describe('non-moment object arguments', () => {
    it('is false if first argument is not a moment object', () => {
      expect(isSameDay(null, today)).to.equal(false);
    });

    it('is false if second argument is not a moment object', () => {
      expect(isSameDay(today, 'foo')).to.equal(false);
    });
  });
});
