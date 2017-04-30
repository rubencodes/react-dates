import { expect } from 'chai';

import toISODateString from '../../src/utils/toISODateString';

describe('toISODateString', () => {
  it('returns null for falsy argument', () => {
    expect(toISODateString()).to.equal(null);
  });

  describe('Catalan locale', () => {
    before(() => {
      //TODO: moment.locale('ca');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Czech locale', () => {
    before(() => {
      //TODO: moment.locale('cs');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Danish locale', () => {
    before(() => {
      //TODO: moment.locale('da');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('German locale', () => {
    before(() => {
      //TODO: moment.locale('de');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Greek locale', () => {
    before(() => {
      //TODO: moment.locale('el');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('British-English locale', () => {
    before(() => {
      //TODO: moment.locale('en-gb');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('American-English locale', () => {
    before(() => {
      //TODO: moment.locale('en');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '07/13/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Spanish locale', () => {
    before(() => {
      //TODO: moment.locale('es');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Finnish locale', () => {
    before(() => {
      //TODO: moment.locale('fi');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('French locale', () => {
    before(() => {
      //TODO: moment.locale('fr');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Hungarian locale', () => {
    before(() => {
      //TODO: moment.locale('hu');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991.07.13.';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Indonesian locale', () => {
    before(() => {
      //TODO: moment.locale('id');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Icelandic locale', () => {
    before(() => {
      //TODO: moment.locale('is');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Italian locale', () => {
    before(() => {
      //TODO: moment.locale('it');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Japanese locale', () => {
    before(() => {
      //TODO: moment.locale('ja');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991/07/13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Korean locale', () => {
    before(() => {
      //TODO: moment.locale('ko');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991.07.13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Malaysian locale', () => {
    before(() => {
      //TODO: moment.locale('ms-my');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Dutch locale', () => {
    before(() => {
      //TODO: moment.locale('nl');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13-07-1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Norwegian locale', () => {
    before(() => {
      //TODO: moment.locale('nb');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Polish locale', () => {
    before(() => {
      //TODO: moment.locale('pl');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Portuguese locale', () => {
    before(() => {
      //TODO: moment.locale('pt');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13/07/1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Russian locale', () => {
    before(() => {
      //TODO: moment.locale('ru');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Swedish locale', () => {
    before(() => {
      //TODO: moment.locale('sv');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Thai locale', () => {
    before(() => {
      //TODO: moment.locale('th');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991/07/13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Turkish locale', () => {
    before(() => {
      //TODO: moment.locale('cs');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '13.07.1991';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Mainland Chinese locale', () => {
    before(() => {
      //TODO: moment.locale('zh-cn');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });

  describe('Taiwanese Chinese locale', () => {
    before(() => {
      //TODO: moment.locale('zh-tw');
    });

    it('converts moment object to localized date string', () => {
      const testDate = new Date('1991-07-13');
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts iso date string to localized date string', () => {
      const testDate = '1991-07-13';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('localized date strings stay the same', () => {
      const testDate = '1991年7月13日';
      const dateString = toISODateString(testDate);
      expect(dateString).to.equal('1991-07-13');
    });

    it('converts custom format date strings with format passed in', () => {
      const testDate = '1991---13/07';
      const dateString = toISODateString(testDate, 'YYYY---DD/MM');
      expect(dateString).to.equal('1991-07-13');
    });
  });
});
