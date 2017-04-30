import React from 'react';
import ReactDOM from 'react-dom';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import addWeeks from 'date-fns/add_weeks';
import subWeeks from 'date-fns/sub_weeks';
import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import endOfWeek from 'date-fns/end_of_week';
import isSameDay from 'date-fns/is_same_day';
import { expect } from 'chai';
import sinon from 'sinon-sandbox';
import { mount, shallow } from 'enzyme';
import wrap from 'mocha-wrap';

import DayPicker, { calculateDimension } from '../../src/components/DayPicker';
import CalendarMonthGrid from '../../src/components/CalendarMonthGrid';
import DayPickerNavigation from '../../src/components/DayPickerNavigation';
import DayPickerKeyboardShortcuts from '../../src/components/DayPickerKeyboardShortcuts';
import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
} from '../../constants';

const today = new Date();
const event = { preventDefault() {}, stopPropagation() {} };

describe('DayPicker', () => {
  beforeEach(() => {
    sinon.stub(DayPicker.prototype, 'adjustDayPickerHeight');
    sinon.stub(DayPicker.prototype, 'updateStateAfterMonthTransition');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#render', () => {
    describe('renderWeekHeader', () => {
      it('there are 7 elements on each .DayPicker__week-header class', () => {
        const wrapper = shallow(<DayPicker />);
        const weekHeaders = wrapper.find('.DayPicker__week-header');
        weekHeaders.forEach((weekHeader) => {
          expect(weekHeader.find('li')).to.have.lengthOf(7);
        });
      });

      describe('props.orientation === HORIZONTAL_ORIENTATION', () => {
        it('props.numberOfMonths .DayPicker__week-header elements exists', () => {
          const NUM_OF_MONTHS = 3;
          const wrapper = shallow(
            <DayPicker orientation={HORIZONTAL_ORIENTATION} numberOfMonths={NUM_OF_MONTHS} />,
          );
          expect(wrapper.find('.DayPicker__week-header')).to.have.lengthOf(NUM_OF_MONTHS);
        });
      });

      describe('props.orientation === VERTICAL_ORIENTATION', () => {
        it('1 .DayPicker__week-header element exists', () => {
          const wrapper = shallow(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          expect(wrapper.find('.DayPicker__week-header')).to.have.lengthOf(1);
        });
      });
    });

    describe('transitionContainer', () => {
      it('.transition-container class exists', () => {
        const wrapper = shallow(<DayPicker />);
        expect(wrapper.find('.transition-container')).to.have.lengthOf(1);
      });

      describe('props.orientation === HORIZONTAL_ORIENTATION', () => {
        it('.transition-container--horizontal class exists', () => {
          const wrapper = shallow(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          expect(wrapper.find('.transition-container--horizontal')).to.have.lengthOf(1);
        });
      });

      describe('props.orientation === VERTICAL_ORIENTATION', () => {
        it('.transition-container--vertical class exists', () => {
          const wrapper = shallow(
            <DayPicker orientation={VERTICAL_ORIENTATION} />,
            { lifecycleExperimental: true },
          );
          expect(wrapper.find('.transition-container--vertical')).to.have.lengthOf(1);
        });
      });
    });

    describe('renderCalendarInfo', () => {
      it('info exists', () => {
        const testInfoClass = 'test-info-container';
        const infoElement = <div className={testInfoClass} />;
        const wrapper = shallow(<DayPicker renderCalendarInfo={() => infoElement} />);
        expect(wrapper.find(`.${testInfoClass}`)).to.have.lengthOf(1);
      });
    });

    describe('CalendarMonthGrid', () => {
      it('component exists', () => {
        const wrapper = shallow(<DayPicker />);
        expect(wrapper.find(CalendarMonthGrid)).to.have.lengthOf(1);
      });

      describe('prop.isAnimating', () => {
        it('is true if state.monthTransition is truthy', () => {
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({ monthTransition: 'foo' });
          const CalendarMonthGridComponent = wrapper.find(CalendarMonthGrid);
          expect(CalendarMonthGridComponent.prop('isAnimating')).to.equal(true);
        });

        it('is false if state.monthTransition is falsey', () => {
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({ monthTransition: null });
          const CalendarMonthGridComponent = wrapper.find(CalendarMonthGrid);
          expect(CalendarMonthGridComponent.prop('isAnimating')).to.equal(false);
        });
      });
    });

    describe('DayPickerKeyboardShortcuts', () => {
      it('component exists if state.isTouchDevice is false and hideKeyboardShortcutsPanel is false', () => {
        const wrapper = shallow(<DayPicker hideKeyboardShortcutsPanel={false} />);
        wrapper.setState({ isTouchDevice: false });
        expect(wrapper.find(DayPickerKeyboardShortcuts)).to.have.lengthOf(1);
      });

      it('component does not exist if isTouchDevice() is true', () => {
        const wrapper = shallow(<DayPicker />);
        wrapper.setState({ isTouchDevice: true });
        expect(wrapper.find(DayPickerKeyboardShortcuts)).to.have.lengthOf(0);
      });

      it('component does not exist if hideKeyboardShortcutsPanel is true', () => {
        const wrapper = shallow(<DayPicker hideKeyboardShortcutsPanel />);
        expect(wrapper.find(DayPickerKeyboardShortcuts)).to.have.lengthOf(0);
      });
    });
  });

  describe('#isHorizontal', () => {
    it('returns true if props.orientation === HORIZONTAL_ORIENTATION', () => {
      const wrapper = shallow(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
      expect(wrapper.instance().isHorizontal()).to.equal(true);
    });

    it('returns false if props.orientation === VERTICAL_ORIENTATION', () => {
      const wrapper = shallow(
        <DayPicker orientation={VERTICAL_ORIENTATION} />,
        { lifecycleExperimental: true },
      );
      expect(wrapper.instance().isHorizontal()).to.equal(false);
    });
  });

  describe('#isVertical', () => {
    it('returns true if props.orientation === VERTICAL_ORIENTATION', () => {
      const wrapper = shallow(
        <DayPicker orientation={VERTICAL_ORIENTATION} />,
        { lifecycleExperimental: true },
      );
      expect(wrapper.instance().isVertical()).to.equal(true);
    });

    it('returns false if props.orientation === HORIZONTAL_ORIENTATION', () => {
      const wrapper = shallow(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
      expect(wrapper.instance().isVertical()).to.equal(false);
    });
  });

  describe('props.orientation === VERTICAL_SCROLLABLE', () => {
    it('uses multiplyScrollableMonths instead of onNextMonthClick', () => {
      const wrapper = shallow(
        <DayPicker orientation={VERTICAL_SCROLLABLE} />,
        { lifecycleExperimental: true },
      );
      const nav = wrapper.find(DayPickerNavigation);
      expect(nav.prop('onNextMonthClick')).to.equal(wrapper.instance().multiplyScrollableMonths);
    });
  });

  describe('#onKeyDown', () => {
    describe('focusedDate is truthy', () => {
      beforeEach(() => {
        sinon.stub(DayPicker.prototype, 'translateFirstDayPickerForAnimation');
      });

      it('sets state.withMouseInteractions to false', () => {
        const wrapper = shallow(<DayPicker />);
        wrapper.setState({
          withMouseInteractions: true,
        });
        wrapper.instance().onKeyDown({ ...event });
        expect(wrapper.state().withMouseInteractions).to.equal(false);
      });

      describe('ArrowUp', () => {
        it('calls maybeTransitionPrevMonth', () => {
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowUp' });
          expect(maybeTransitionPrevMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 week before focusedDate', () => {
          const oneWeekBefore = subWeeks(today, 1);
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowUp' });
          const arg = maybeTransitionPrevMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneWeekBefore)).to.equal(true);
        });
      });

      describe('ArrowLeft', () => {
        it('calls maybeTransitionPrevMonth', () => {
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowLeft' });
          expect(maybeTransitionPrevMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 day before focusedDate', () => {
          const oneDayBefore = subDays(today, 1);
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowLeft' });
          const arg = maybeTransitionPrevMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneDayBefore)).to.equal(true);
        });
      });

      describe('Home', () => {
        it('calls maybeTransitionPrevMonth', () => {
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'Home' });
          expect(maybeTransitionPrevMonthSpy.callCount).to.equal(1);
        });

        it('arg is beginning of focusedDate week', () => {
          const weekStart = startOfWeek(today);
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'Home' });
          const arg = maybeTransitionPrevMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, weekStart)).to.equal(true);
        });
      });

      describe('PageUp', () => {
        it('calls maybeTransitionPrevMonth', () => {
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'PageUp' });
          expect(maybeTransitionPrevMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 month before focusedDate', () => {
          const oneMonthBefore = subMonths(today, 1);
          const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'PageUp' });
          const arg = maybeTransitionPrevMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneMonthBefore)).to.equal(true);
        });
      });

      describe('ArrowDown', () => {
        it('calls maybeTransitionNextMonth', () => {
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowDown' });
          expect(maybeTransitionNextMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 week after focusedDate', () => {
          const oneWeekAfter = addWeeks(today, 1);
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowDown' });
          const arg = maybeTransitionNextMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneWeekAfter)).to.equal(true);
        });
      });

      describe('ArrowRight', () => {
        it('calls maybeTransitionNextMonth', () => {
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowRight' });
          expect(maybeTransitionNextMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 day after focusedDate', () => {
          const oneDayAfter = addDays(today, 1);
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'ArrowRight' });
          const arg = maybeTransitionNextMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneDayAfter)).to.equal(true);
        });
      });

      describe('End', () => {
        it('calls maybeTransitionNextMonth', () => {
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'End' });
          expect(maybeTransitionNextMonthSpy.callCount).to.equal(1);
        });

        it('arg is end of focusedDate week', () => {
          const weekEnd = endOfWeek(today);
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'End' });
          const arg = maybeTransitionNextMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, weekEnd)).to.equal(true);
        });
      });

      describe('PageDown', () => {
        it('calls maybeTransitionNextMonth', () => {
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'PageDown' });
          expect(maybeTransitionNextMonthSpy.callCount).to.equal(1);
        });

        it('arg is 1 month after focusedDate', () => {
          const oneMonthAfter = addMonths(today, 1);
          const maybeTransitionNextMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionNextMonth');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'PageDown' });
          const arg = maybeTransitionNextMonthSpy.getCall(0).args[0];
          expect(isSameDay(arg, oneMonthAfter)).to.equal(true);
        });
      });

      describe('?', () => {
        it('calls openKeyboardShortcutsPanel', () => {
          const openKeyboardShortcutsPanelSpy = sinon.spy(DayPicker.prototype, 'openKeyboardShortcutsPanel');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
          });
          wrapper.instance().onKeyDown({ ...event, key: '?' });
          expect(openKeyboardShortcutsPanelSpy.callCount).to.equal(1);
        });
      });

      describe('Escape', () => {
        it('sets state.showKeyboardShortcuts to false', () => {
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
            showKeyboardShortcuts: true,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'Escape' });
          expect(wrapper.state().showKeyboardShortcuts).to.equal(false);
        });

        it('calls closeKeyboardShortcutsPanel if state.showKeyboardShortcuts === true', () => {
          const closeKeyboardShortcutsPanelSpy = sinon.stub(DayPicker.prototype, 'closeKeyboardShortcutsPanel');
          const wrapper = shallow(<DayPicker />);
          wrapper.setState({
            focusedDate: today,
            showKeyboardShortcuts: true,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'Escape' });
          expect(closeKeyboardShortcutsPanelSpy.callCount).to.equal(1);
        });

        it('calls props.onBlur if state.showKeyboardShortcuts === false', () => {
          const onBlurStub = sinon.stub();
          const wrapper = shallow(<DayPicker onBlur={onBlurStub} />);
          wrapper.setState({
            focusedDate: today,
            showKeyboardShortcuts: false,
          });
          wrapper.instance().onKeyDown({ ...event, key: 'Escape' });
          expect(onBlurStub.callCount).to.equal(1);
        });
      });
    });

    describe('focusedDate is falsey', () => {
      it('does not call maybeTransitionPrevMonth', () => {
        const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
        const wrapper = shallow(<DayPicker />);
        wrapper.setState({
          focusedDate: null,
        });
        wrapper.instance().onKeyDown({ ...event, key: 'ArrowLeft' });
        expect(maybeTransitionPrevMonthSpy.callCount).to.equal(0);
      });

      it('does not call maybeTransitionNextMonth', () => {
        const maybeTransitionPrevMonthSpy = sinon.spy(DayPicker.prototype, 'maybeTransitionPrevMonth');
        const wrapper = shallow(<DayPicker />);
        wrapper.setState({
          focusedDate: null,
        });
        wrapper.instance().onKeyDown({ ...event, key: 'ArrowRight' });
        expect(maybeTransitionPrevMonthSpy.callCount).to.equal(0);
      });
    });
  });

  describe('#onPrevMonthClick', () => {
    let translateFirstDayPickerForAnimationSpy;
    beforeEach(() => {
      translateFirstDayPickerForAnimationSpy = sinon.stub(DayPicker.prototype, 'translateFirstDayPickerForAnimation');
    });

    it('calls props.onPrevMonthClick', () => {
      const onPrevMonthClickSpy = sinon.stub();
      const wrapper = shallow(<DayPicker onPrevMonthClick={onPrevMonthClickSpy} />);
      wrapper.instance().onPrevMonthClick(event);
      expect(onPrevMonthClickSpy).to.have.property('callCount', 1);
    });

    it('calls translateFirstDayPickerForAnimation', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().onPrevMonthClick(event);
      expect(translateFirstDayPickerForAnimationSpy).to.have.property('callCount', 1);
    });

    it('sets state.monthTransition to "prev"', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().onPrevMonthClick();
      expect(wrapper.state().monthTransition).to.equal('prev');
    });

    it('sets state.nextFocusedDate to first arg', () => {
      const test = 'FOOBARBAZ';
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().onPrevMonthClick(test);
      expect(wrapper.state().nextFocusedDate).to.equal(test);
    });
  });

  describe('#onNextMonthClick', () => {
    it('calls props.onNextMonthClick', () => {
      const onNextMonthClickSpy = sinon.stub();
      const wrapper = shallow(<DayPicker onNextMonthClick={onNextMonthClickSpy} />);
      wrapper.instance().onNextMonthClick(event);
      expect(onNextMonthClickSpy).to.have.property('callCount', 1);
    });

    it('sets state.monthTransition to "next"', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().onNextMonthClick();
      expect(wrapper.state().monthTransition).to.equal('next');
    });

    it('sets state.nextFocusedDate to first arg', () => {
      const test = 'FOOBARBAZ';
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().onNextMonthClick(test);
      expect(wrapper.state().nextFocusedDate).to.equal(test);
    });
  });

  describe('#getFocusedDay', () => {
    describe('props.getFirstFocusableDay is truthy', () => {
      it('calls getFirstFocusableDay with arg if exists', () => {
        const getFirstFocusableDayStub = sinon.stub();
        const wrapper = shallow(<DayPicker getFirstFocusableDay={getFirstFocusableDayStub} />);
        getFirstFocusableDayStub.reset(); // getFirstFocusableDay gets called in the constructor

        wrapper.instance().getFocusedDay();
        expect(getFirstFocusableDayStub.callCount).to.equal(1);
      });

      it('calls getFirstFocusableDay with arg if exists', () => {
        const getFirstFocusableDayStub = sinon.stub();
        const wrapper = shallow(<DayPicker getFirstFocusableDay={getFirstFocusableDayStub} />);
        getFirstFocusableDayStub.reset(); // getFirstFocusableDay gets called in the constructor

        wrapper.instance().getFocusedDay(today);
        expect(isSameDay(getFirstFocusableDayStub.getCall(0).args[0], today)).to.equal(true);
      });

      it('returns getFirstFocusableDay() value', () => {
        const getFirstFocusableDayStub = sinon.stub().returns(today);
        const wrapper = shallow(<DayPicker getFirstFocusableDay={getFirstFocusableDayStub} />);
        expect(isSameDay(wrapper.instance().getFocusedDay(), today)).to.equal(true);
      });

      it('returns first day of arg if getFirstFocusableDay returns invisible day', () => {
        const test = addMonths(new Date(), 3);
        const getFirstFocusableDayStub = sinon.stub().returns(today);
        sinon.stub(DayPicker.prototype, 'isDayVisible').returns(false);
        const wrapper = shallow(<DayPicker getFirstFocusableDay={getFirstFocusableDayStub} />);
        const focusedDay = wrapper.instance().getFocusedDay(test);
        expect(isSameDay(focusedDay, startOfMonth(test))).to.equal(true);
      });
    });

    describe('props.getFirstFocusableDay is falsey', () => {
      it('returns undefined if no arg', () => {
        const wrapper = shallow(<DayPicker />);
        expect(wrapper.instance().getFocusedDay()).to.equal(undefined);
      });

      it('returns first day of arg month if exists', () => {
        const test = addMonths(new Date(), 3);
        const wrapper = shallow(<DayPicker />);
        const focusedDay = wrapper.instance().getFocusedDay(test);
        expect(isSameDay(focusedDay, startOfMonth(test))).to.equal(true);
      });
    });
  });

  describe('#maybeTransitionNextMonth', () => {
    describe('arg has same month as state.focusedDate', () => {
      it('does not call `onNextMonthClick`', () => {
        const onNextMonthClickSpy = sinon.spy(DayPicker.prototype, 'onNextMonthClick');
        const firstOfTodaysMonth = startOfMonth(new Date());
        const wrapper = shallow(<DayPicker />);
        wrapper.state().focusedDate = firstOfTodaysMonth;
        wrapper.instance().maybeTransitionNextMonth(today);
        expect(onNextMonthClickSpy.callCount).to.equal(0);
      });

      it('returns false', () => {
        const firstOfTodaysMonth = startOfMonth(today);
        const wrapper = shallow(<DayPicker />);
        wrapper.state().focusedDate = firstOfTodaysMonth;
        expect(wrapper.instance().maybeTransitionNextMonth(today)).to.equal(false);
      });
    });

    describe('arg has different month as state.focusedDate', () => {
      describe('arg is visible', () => {
        it('does not call `onNextMonthClick`', () => {
          const onNextMonthClickSpy = sinon.spy(DayPicker.prototype, 'onNextMonthClick');
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(true);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          wrapper.instance().maybeTransitionNextMonth(today);
          expect(onNextMonthClickSpy.callCount).to.equal(0);
        });

        it('returns false', () => {
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(true);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          expect(wrapper.instance().maybeTransitionNextMonth(today)).to.equal(false);
        });
      });

      describe('arg is not visible', () => {
        it('calls `onNextMonthClick`', () => {
          const onNextMonthClickSpy = sinon.spy(DayPicker.prototype, 'onNextMonthClick');
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(false);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          wrapper.instance().maybeTransitionNextMonth(today);
          expect(onNextMonthClickSpy.callCount).to.equal(1);
        });

        it('returns true', () => {
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(false);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          expect(wrapper.instance().maybeTransitionNextMonth(today)).to.equal(true);
        });
      });
    });
  });

  describe('#maybeTransitionPrevMonth', () => {
    describe('arg has same month as state.focusedDate', () => {
      it('does not call `onPrevMonthClick`', () => {
        const onPrevMonthClickSpy = sinon.spy(DayPicker.prototype, 'onPrevMonthClick');
        const firstOfTodaysMonth = startOfMonth(new Date());
        const wrapper = shallow(<DayPicker />);
        wrapper.state().focusedDate = firstOfTodaysMonth;
        wrapper.instance().maybeTransitionPrevMonth(today);
        expect(onPrevMonthClickSpy.callCount).to.equal(0);
      });

      it('returns false', () => {
        const firstOfTodaysMonth = startOfMonth(today);
        const wrapper = shallow(<DayPicker />);
        wrapper.state().focusedDate = firstOfTodaysMonth;
        expect(wrapper.instance().maybeTransitionPrevMonth(today)).to.equal(false);
      });
    });

    describe('arg has different month as state.focusedDate', () => {
      describe('arg is visible', () => {
        it('does not call `onPrevMonthClick`', () => {
          const onPrevMonthClickSpy = sinon.spy(DayPicker.prototype, 'onPrevMonthClick');
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(true);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          wrapper.instance().maybeTransitionPrevMonth(today);
          expect(onPrevMonthClickSpy.callCount).to.equal(0);
        });

        it('returns false', () => {
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(true);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          expect(wrapper.instance().maybeTransitionPrevMonth(today)).to.equal(false);
        });
      });

      describe('arg is not visible', () => {
        beforeEach(() => {
          sinon.stub(DayPicker.prototype, 'translateFirstDayPickerForAnimation');
        });

        it('calls `onPrevMonthClick`', () => {
          const onPrevMonthClickSpy = sinon.spy(DayPicker.prototype, 'onPrevMonthClick');
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(false);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          wrapper.instance().maybeTransitionPrevMonth(today);
          expect(onPrevMonthClickSpy.callCount).to.equal(1);
        });

        it('returns true', () => {
          sinon.stub(DayPicker.prototype, 'isDayVisible').returns(false);
          const nextMonth = addMonths(new Date(), 1);
          const wrapper = shallow(<DayPicker />);
          wrapper.state().focusedDate = nextMonth;
          expect(wrapper.instance().maybeTransitionPrevMonth(today)).to.equal(true);
        });
      });
    });
  });

  describe('#multiplyScrollableMonths', () => {
    it('increments scrollableMonthMultiple', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().multiplyScrollableMonths(event);
      expect(wrapper.state().scrollableMonthMultiple).to.equal(2);
    });

    it('increments scrollableMonthMultiple without an event', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().multiplyScrollableMonths();
      expect(wrapper.state().scrollableMonthMultiple).to.equal(2);
    });
  });

  describe('#isDayVisible', () => {
    it('returns true if arg is in visible months', () => {
      const test = addMonths(new Date(), 3);
      const wrapper = shallow(<DayPicker numberOfMonths={1} />);
      wrapper.setState({
        currentMonth: addMonths(new Date(), 3),
      });

      expect(wrapper.instance().isDayVisible(test)).to.equal(true);
    });

    it('returns false if arg is before first month', () => {
      const wrapper = shallow(<DayPicker numberOfMonths={1} />);
      wrapper.setState({
        currentMonth: addMonths(new Date(), 3),
      });

      expect(wrapper.instance().isDayVisible(today)).to.equal(false);
    });

    it('returns false if arg is after last month', () => {
      const test = addMonths(new Date(), 4);
      const wrapper = shallow(<DayPicker numberOfMonths={1} />);
      wrapper.setState({
        currentMonth: addMonths(new Date(), 3),
      });

      expect(wrapper.instance().isDayVisible(test)).to.equal(false);
    });
  });

  describe('#openKeyboardShortcutsPanel', () => {
    it('sets state.showKeyboardShortcuts to true', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.setState({
        showKeyboardShortcuts: false,
      });
      wrapper.instance().openKeyboardShortcutsPanel();
      expect(wrapper.state().showKeyboardShortcuts).to.equal(true);
    });

    it('sets state.onKeyboardShortcutsPanelClose to arg', () => {
      const test = 'FOOBARBAZ';
      const wrapper = shallow(<DayPicker />);
      wrapper.setState({
        onKeyboardShortcutsPanelClose: null,
      });
      wrapper.instance().openKeyboardShortcutsPanel(test);
      expect(wrapper.state().onKeyboardShortcutsPanelClose).to.equal(test);
    });
  });

  describe('#closeKeyboardShortcutsPanel', () => {
    it('sets state.showKeyboardShortcuts to false', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.setState({
        showKeyboardShortcuts: true,
      });
      wrapper.instance().closeKeyboardShortcutsPanel();
      expect(wrapper.state().showKeyboardShortcuts).to.equal(false);
    });

    it('sets state.onKeyboardShortcutsPanelClose to null', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.setState({
        showKeyboardShortcuts: true,
        onKeyboardShortcutsPanelClose: sinon.stub(),
      });
      wrapper.instance().closeKeyboardShortcutsPanel();
      expect(wrapper.state().onKeyboardShortcutsPanelClose).to.equal(null);
    });

    it('calls state.onKeyboardShortcutsPanelClose if exists', () => {
      const onKeyboardShortcutsPanelCloseStub = sinon.stub();
      const wrapper = shallow(<DayPicker />);
      wrapper.setState({
        showKeyboardShortcuts: true,
        onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelCloseStub,
      });
      wrapper.instance().closeKeyboardShortcutsPanel();
      expect(onKeyboardShortcutsPanelCloseStub.callCount).to.equal(1);
    });
  });

  const windowWrap = wrap().withGlobal('window', () => ({ getComputedStyle() { return {}; } }));
  const maybeWindowWrap = typeof window === 'undefined' ? windowWrap : global;
  maybeWindowWrap.describe('#initializeDayPickerWidth()', () => {
    beforeEach(() => {
      sinon.stub(ReactDOM, 'findDOMNode').returns({ querySelector() {} });
    });

    it('executes', () => {
      const wrapper = shallow(<DayPicker />);
      wrapper.instance().initializeDayPickerWidth();
    });
  });

  describe.skip('life cycle methods', () => {
    let adjustDayPickerHeightSpy;
    let initializeDayPickerWidthSpy;
    beforeEach(() => {
      adjustDayPickerHeightSpy = sinon.stub(DayPicker.prototype, 'adjustDayPickerHeight');
      initializeDayPickerWidthSpy = sinon.stub(DayPicker.prototype, 'initializeDayPickerWidth');
    });

    describe('#componentDidMount', () => {
      describe('props.orientation === HORIZONTAL_ORIENTATION', () => {
        it('calls adjustDayPickerHeight', () => {
          mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          expect(adjustDayPickerHeightSpy).to.have.property('callCount', 1);
        });

        it('calls initializeDayPickerWidth', () => {
          mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          expect(initializeDayPickerWidthSpy).to.have.property('callCount', 1);
        });
      });

      describe('props.orientation === VERTICAL_ORIENTATION', () => {
        it('does not call adjustDayPickerHeight', () => {
          mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          expect(adjustDayPickerHeightSpy.called).to.equal(false);
        });

        it('does not call initializeDayPickerWidth', () => {
          mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          expect(initializeDayPickerWidthSpy.called).to.equal(false);
        });
      });
    });

    describe('#componentDidUpdate', () => {
      let updateStateAfterMonthTransitionSpy;
      beforeEach(() => {
        updateStateAfterMonthTransitionSpy = sinon.stub(
          DayPicker.prototype,
          'updateStateAfterMonthTransition',
        );
      });

      describe('props.orientation === HORIZONTAL_ORIENTATION', () => {
        it('calls adjustDayPickerHeight if state.monthTransition is truthy', () => {
          const wrapper = mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: 'foo',
          });
          expect(adjustDayPickerHeightSpy).to.have.property('callCount', 2);
        });

        it('does not call adjustDayPickerHeight if state.monthTransition is falsey', () => {
          const wrapper = mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: null,
          });
          expect(adjustDayPickerHeightSpy.calledTwice).to.equal(false);
        });

        it('calls updateStateAfterMonthTransition if state.monthTransition is truthy', () => {
          const wrapper = mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: 'foo',
          });
          expect(updateStateAfterMonthTransitionSpy).to.have.property('callCount', 1);
        });

        it('does not call updateStateAfterMonthTransition if state.monthTransition is falsey', () => {
          const wrapper = mount(<DayPicker orientation={HORIZONTAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: null,
          });
          expect(updateStateAfterMonthTransitionSpy.calledOnce).to.equal(false);
        });
      });

      describe('props.orientation === VERTICAL_ORIENTATION', () => {
        it('does not call adjustDayPickerHeight if state.monthTransition is truthy', () => {
          const wrapper = mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: 'foo',
          });
          expect(adjustDayPickerHeightSpy.called).to.equal(false);
        });

        it('does not call adjustDayPickerHeight if state.monthTransition is falsey', () => {
          const wrapper = mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: null,
          });
          expect(adjustDayPickerHeightSpy.called).to.equal(false);
        });

        it('calls updateStateAfterMonthTransition if state.monthTransition is truthy', () => {
          const wrapper = mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: 'foo',
          });
          expect(updateStateAfterMonthTransitionSpy).to.have.property('callCount', 1);
        });

        it('does not call updateStateAfterMonthTransition if state.monthTransition is falsey', () => {
          const wrapper = mount(<DayPicker orientation={VERTICAL_ORIENTATION} />);
          wrapper.setState({
            monthTransition: null,
          });
          expect(updateStateAfterMonthTransitionSpy.calledOnce).to.equal(false);
        });
      });
    });
  });

  describe('calculateDimension()', () => {
    it('returns 0 for an empty element', () => {
      expect(calculateDimension(null, 'width')).to.equal(0);
      expect(calculateDimension(null, 'width', false)).to.equal(0);
      expect(calculateDimension(null, 'width', true)).to.equal(0);
    });

    describe('borderBox true', () => {
      const el = {
        offsetWidth: 17,
        offsetHeight: 42,
      };

      it('returns el.offsetWidth for "width"', () => {
        expect(calculateDimension(el, 'width', true)).to.equal(el.offsetWidth);
      });

      it('returns el.offsetHeight for "height"', () => {
        expect(calculateDimension(el, 'height', true)).to.equal(el.offsetHeight);
      });
    });

    /* Requires a DOM */
    describe.skip('withMargin false and borderBox true', () => {
      let testElement = null;

      beforeEach(() => {
        testElement = document.createElement('div');

        testElement.style.width = '100px';
        testElement.style.height = '250px';
        testElement.style.padding = '15px 10px';
        testElement.style.border = '1px solid red';
        testElement.style.margin = '3px 6px 5px 2px';
        testElement.boxSizing = 'border-box';
      });

      it('calculates border-box height', () => {
        expect(calculateDimension(testElement, 'height', true)).to.equal(282);
      });

      it('calculates border-box height with margin', () => {
        expect(calculateDimension(testElement, 'height', true, true)).to.equal(290);
      });

      it('calculates border-box width', () => {
        expect(calculateDimension(testElement, 'width', true)).to.equal(122);
      });

      it('calculates border-box width with margin', () => {
        expect(calculateDimension(testElement, 'width', true, true)).to.equal(130);
      });

      it('calculates content-box height', () => {
        expect(calculateDimension(testElement, 'height')).to.equal(250);
      });

      it('calculates content-box height with margin', () => {
        expect(calculateDimension(testElement, 'height', false, true)).to.equal(258);
      });

      it('calculates content-box width', () => {
        expect(calculateDimension(testElement, 'width')).to.equal(100);
      });

      it('calculates content-box width with margin', () => {
        expect(calculateDimension(testElement, 'width', false, true)).to.equal(108);
      });
    });
  });
});
