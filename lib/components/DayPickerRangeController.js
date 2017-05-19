module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _object = __webpack_require__(16);

	var _object2 = _interopRequireDefault(_object);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _is_after = __webpack_require__(17);

	var _is_after2 = _interopRequireDefault(_is_after);

	var _is_before = __webpack_require__(44);

	var _is_before2 = _interopRequireDefault(_is_before);

	var _is_within_range = __webpack_require__(61);

	var _is_within_range2 = _interopRequireDefault(_is_within_range);

	var _difference_in_days = __webpack_require__(62);

	var _difference_in_days2 = _interopRequireDefault(_difference_in_days);

	var _set_hours = __webpack_require__(63);

	var _set_hours2 = _interopRequireDefault(_set_hours);

	var _start_of_month = __webpack_require__(46);

	var _start_of_month2 = _interopRequireDefault(_start_of_month);

	var _end_of_month = __webpack_require__(47);

	var _end_of_month2 = _interopRequireDefault(_end_of_month);

	var _add_months = __webpack_require__(18);

	var _add_months2 = _interopRequireDefault(_add_months);

	var _start_of_day = __webpack_require__(64);

	var _start_of_day2 = _interopRequireDefault(_start_of_day);

	var _add_days = __webpack_require__(51);

	var _add_days2 = _interopRequireDefault(_add_days);

	var _sub_days = __webpack_require__(53);

	var _sub_days2 = _interopRequireDefault(_sub_days);

	var _parse = __webpack_require__(39);

	var _parse2 = _interopRequireDefault(_parse);

	var _defaultPhrases = __webpack_require__(6);

	var _getPhrasePropTypes = __webpack_require__(7);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isNextDay = __webpack_require__(65);

	var _isNextDay2 = _interopRequireDefault(_isNextDay);

	var _isSameDay = __webpack_require__(14);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _FocusedInputShape = __webpack_require__(66);

	var _FocusedInputShape2 = _interopRequireDefault(_FocusedInputShape);

	var _ScrollableOrientationShape = __webpack_require__(15);

	var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

	var _constants = __webpack_require__(9);

	var _DayPicker = __webpack_require__(67);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = {
	  startDate: _propTypes2['default'].object,
	  endDate: _propTypes2['default'].object,
	  onDatesChange: _propTypes2['default'].func,

	  focusedInput: _FocusedInputShape2['default'],
	  onFocusChange: _propTypes2['default'].func,
	  onClose: _propTypes2['default'].func,

	  keepOpenOnDateSelect: _propTypes2['default'].bool,
	  minimumNights: _propTypes2['default'].number,
	  isOutsideRange: _propTypes2['default'].func,
	  isDayBlocked: _propTypes2['default'].func,
	  isDayHighlighted: _propTypes2['default'].func,

	  // DayPicker props
	  enableOutsideDays: _propTypes2['default'].bool,
	  numberOfMonths: _propTypes2['default'].number,
	  orientation: _ScrollableOrientationShape2['default'],
	  withPortal: _propTypes2['default'].bool,
	  initialVisibleMonth: _propTypes2['default'].func,
	  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
	  daySize: _propTypes2['default'].number,

	  navPrev: _propTypes2['default'].node,
	  navNext: _propTypes2['default'].node,

	  onPrevMonthClick: _propTypes2['default'].func,
	  onNextMonthClick: _propTypes2['default'].func,
	  onOutsideClick: _propTypes2['default'].func,
	  renderDay: _propTypes2['default'].func,
	  renderCalendarInfo: _propTypes2['default'].func,

	  // accessibility
	  onBlur: _propTypes2['default'].func,
	  isFocused: _propTypes2['default'].bool,
	  showKeyboardShortcuts: _propTypes2['default'].bool,

	  // i18n
	  monthFormat: _propTypes2['default'].string,
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases))
	};

	var defaultProps = {
	  startDate: undefined, // TODO: use null
	  endDate: undefined, // TODO: use null
	  onDatesChange: function () {
	    function onDatesChange() {}

	    return onDatesChange;
	  }(),

	  focusedInput: null,
	  onFocusChange: function () {
	    function onFocusChange() {}

	    return onFocusChange;
	  }(),
	  onClose: function () {
	    function onClose() {}

	    return onClose;
	  }(),

	  keepOpenOnDateSelect: false,
	  minimumNights: 1,
	  isOutsideRange: function () {
	    function isOutsideRange() {}

	    return isOutsideRange;
	  }(),
	  isDayBlocked: function () {
	    function isDayBlocked() {}

	    return isDayBlocked;
	  }(),
	  isDayHighlighted: function () {
	    function isDayHighlighted() {}

	    return isDayHighlighted;
	  }(),

	  // DayPicker props
	  enableOutsideDays: false,
	  numberOfMonths: 1,
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  withPortal: false,
	  hideKeyboardShortcutsPanel: false,
	  initialVisibleMonth: _DayPicker.defaultProps.initialVisibleMonth,
	  daySize: _constants.DAY_SIZE,

	  navPrev: null,
	  navNext: null,

	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),
	  onOutsideClick: function () {
	    function onOutsideClick() {}

	    return onOutsideClick;
	  }(),

	  renderDay: null,
	  renderCalendarInfo: null,

	  // accessibility
	  onBlur: function () {
	    function onBlur() {}

	    return onBlur;
	  }(),

	  isFocused: false,
	  showKeyboardShortcuts: false,

	  // i18n
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.DayPickerPhrases
	};

	var DayPickerRangeController = function (_React$Component) {
	  _inherits(DayPickerRangeController, _React$Component);

	  function DayPickerRangeController(props) {
	    _classCallCheck(this, DayPickerRangeController);

	    var _this = _possibleConstructorReturn(this, (DayPickerRangeController.__proto__ || Object.getPrototypeOf(DayPickerRangeController)).call(this, props));

	    _this.state = {
	      hoverDate: null,
	      phrases: props.phrases
	    };

	    _this.isTouchDevice = (0, _isTouchDevice2['default'])();
	    _this.today = new Date();

	    _this.onDayClick = _this.onDayClick.bind(_this);
	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_this);
	    return _this;
	  }

	  _createClass(DayPickerRangeController, [{
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        var focusedInput = nextProps.focusedInput;
	        var phrases = nextProps.phrases;

	        if (focusedInput !== this.props.focusedInput || phrases !== this.props.phrases) {
	          // set the appropriate CalendarDay phrase based on focusedInput
	          var chooseAvailableDate = phrases.chooseAvailableDate;
	          if (focusedInput === _constants.START_DATE) {
	            chooseAvailableDate = phrases.chooseAvailableStartDate;
	          } else if (focusedInput === _constants.END_DATE) {
	            chooseAvailableDate = phrases.chooseAvailableEndDate;
	          }

	          this.setState({
	            phrases: (0, _object2['default'])({}, phrases, {
	              chooseAvailableDate: chooseAvailableDate
	            })
	          });
	        }
	      }

	      return componentWillReceiveProps;
	    }()
	  }, {
	    key: 'componentWillUpdate',
	    value: function () {
	      function componentWillUpdate() {
	        this.today = new Date();
	      }

	      return componentWillUpdate;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, e) {
	        var _props = this.props;
	        var keepOpenOnDateSelect = _props.keepOpenOnDateSelect;
	        var minimumNights = _props.minimumNights;
	        var onBlur = _props.onBlur;

	        if (e) e.preventDefault();
	        if (this.isBlocked(day)) return;

	        var _props2 = this.props;
	        var focusedInput = _props2.focusedInput;
	        var onFocusChange = _props2.onFocusChange;
	        var onClose = _props2.onClose;
	        var _props3 = this.props;
	        var startDate = _props3.startDate;
	        var endDate = _props3.endDate;

	        if (focusedInput === _constants.START_DATE) {
	          onFocusChange(_constants.END_DATE);

	          startDate = day;

	          if ((0, _isInclusivelyAfterDay2['default'])(day, endDate)) {
	            endDate = null;
	          }
	        } else if (focusedInput === _constants.END_DATE) {
	          var firstAllowedEndDate = startDate && (0, _add_days2['default'])(startDate, minimumNights);

	          if (!startDate) {
	            endDate = day;
	            onFocusChange(_constants.START_DATE);
	          } else if ((0, _isInclusivelyAfterDay2['default'])(day, firstAllowedEndDate)) {
	            endDate = day;
	            if (!keepOpenOnDateSelect) {
	              onFocusChange(null);
	              onClose({ startDate: startDate, endDate: endDate });
	            }
	          } else {
	            startDate = day;
	            endDate = null;
	          }
	        }

	        this.props.onDatesChange({ startDate: startDate, endDate: endDate });
	        onBlur();
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        if (this.isTouchDevice) return;

	        this.setState({
	          hoverDate: day
	        });
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave() {
	        if (this.isTouchDevice) return;

	        this.setState({
	          hoverDate: null
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'getFirstFocusableDay',
	    value: function () {
	      function getFirstFocusableDay(newMonth) {
	        var _this2 = this;

	        var _props4 = this.props;
	        var startDate = _props4.startDate;
	        var endDate = _props4.endDate;
	        var focusedInput = _props4.focusedInput;
	        var minimumNights = _props4.minimumNights;
	        var numberOfMonths = _props4.numberOfMonths;

	        var focusedDate = (0, _start_of_month2['default'])(newMonth);
	        if (focusedInput === _constants.START_DATE && startDate) {
	          focusedDate = (0, _parse2['default'])(startDate);
	        } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
	          focusedDate = (0, _add_days2['default'])(startDate, minimumNights);
	        } else if (focusedInput === _constants.END_DATE && endDate) {
	          focusedDate = (0, _parse2['default'])(endDate);
	        }

	        if (this.isBlocked(focusedDate)) {
	          var days = [];
	          var lastVisibleDay = (0, _end_of_month2['default'])((0, _add_months2['default'])(newMonth, numberOfMonths - 1));
	          var currentDay = (0, _parse2['default'])(focusedDate);
	          while (!(0, _is_after2['default'])(currentDay, lastVisibleDay)) {
	            currentDay = (0, _add_days2['default'])(currentDay, 1);
	            days.push(currentDay);
	          }

	          var viableDays = days.filter(function (day) {
	            return !_this2.isBlocked(day) && (0, _is_after2['default'])(day, focusedDate);
	          });
	          if (viableDays.length > 0) focusedDate = viableDays[0];
	        }

	        return focusedDate;
	      }

	      return getFirstFocusableDay;
	    }()
	  }, {
	    key: 'doesNotMeetMinimumNights',
	    value: function () {
	      function doesNotMeetMinimumNights(day) {
	        var _props5 = this.props;
	        var startDate = _props5.startDate;
	        var isOutsideRange = _props5.isOutsideRange;
	        var focusedInput = _props5.focusedInput;
	        var minimumNights = _props5.minimumNights;

	        if (focusedInput !== _constants.END_DATE) return false;

	        if (startDate) {
	          var dayDiff = (0, _difference_in_days2['default'])(day, (0, _set_hours2['default'])((0, _start_of_day2['default'])(startDate), 12));
	          return dayDiff < minimumNights && dayDiff >= 0;
	        }
	        return isOutsideRange((0, _sub_days2['default'])(day, minimumNights));
	      }

	      return doesNotMeetMinimumNights;
	    }()
	  }, {
	    key: 'isDayAfterHoveredStartDate',
	    value: function () {
	      function isDayAfterHoveredStartDate(day) {
	        var _props6 = this.props;
	        var startDate = _props6.startDate;
	        var endDate = _props6.endDate;
	        var minimumNights = _props6.minimumNights;
	        var hoverDate = this.state.hoverDate;

	        return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay2['default'])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay2['default'])(hoverDate, startDate);
	      }

	      return isDayAfterHoveredStartDate;
	    }()
	  }, {
	    key: 'isEndDate',
	    value: function () {
	      function isEndDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.endDate);
	      }

	      return isEndDate;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        return (0, _isSameDay2['default'])(day, this.state.hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isInHoveredSpan',
	    value: function () {
	      function isInHoveredSpan(day) {
	        var _props7 = this.props;
	        var startDate = _props7.startDate;
	        var endDate = _props7.endDate;
	        var hoverDate = this.state.hoverDate;

	        var isForwardRange = !!startDate && !endDate && (0, _is_before2['default'])(startDate, hoverDate) && ((0, _is_within_range2['default'])(day, startDate, hoverDate) || (0, _isSameDay2['default'])(hoverDate, day));
	        var isBackwardRange = !!endDate && !startDate && (0, _is_before2['default'])(hoverDate, endDate) && ((0, _is_within_range2['default'])(day, hoverDate, endDate) || (0, _isSameDay2['default'])(hoverDate, day));

	        var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);

	        return (isForwardRange || isBackwardRange) && isValidDayHovered;
	      }

	      return isInHoveredSpan;
	    }()
	  }, {
	    key: 'isInSelectedSpan',
	    value: function () {
	      function isInSelectedSpan(day) {
	        var _props8 = this.props;
	        var startDate = _props8.startDate;
	        var endDate = _props8.endDate;

	        return (0, _is_within_range2['default'])(day, startDate, endDate);
	      }

	      return isInSelectedSpan;
	    }()
	  }, {
	    key: 'isLastInRange',
	    value: function () {
	      function isLastInRange(day) {
	        return this.isInSelectedSpan(day) && (0, _isNextDay2['default'])(day, this.props.endDate);
	      }

	      return isLastInRange;
	    }()
	  }, {
	    key: 'isStartDate',
	    value: function () {
	      function isStartDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.startDate);
	      }

	      return isStartDate;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props9 = this.props;
	        var isDayBlocked = _props9.isDayBlocked;
	        var isOutsideRange = _props9.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'isToday',
	    value: function () {
	      function isToday(day) {
	        return (0, _isSameDay2['default'])(day, this.today);
	      }

	      return isToday;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this3 = this;

	        var _props10 = this.props;
	        var isDayBlocked = _props10.isDayBlocked;
	        var isDayHighlighted = _props10.isDayHighlighted;
	        var isOutsideRange = _props10.isOutsideRange;
	        var numberOfMonths = _props10.numberOfMonths;
	        var orientation = _props10.orientation;
	        var monthFormat = _props10.monthFormat;
	        var navPrev = _props10.navPrev;
	        var navNext = _props10.navNext;
	        var onOutsideClick = _props10.onOutsideClick;
	        var onPrevMonthClick = _props10.onPrevMonthClick;
	        var onNextMonthClick = _props10.onNextMonthClick;
	        var withPortal = _props10.withPortal;
	        var enableOutsideDays = _props10.enableOutsideDays;
	        var initialVisibleMonth = _props10.initialVisibleMonth;
	        var hideKeyboardShortcutsPanel = _props10.hideKeyboardShortcutsPanel;
	        var daySize = _props10.daySize;
	        var focusedInput = _props10.focusedInput;
	        var renderDay = _props10.renderDay;
	        var renderCalendarInfo = _props10.renderCalendarInfo;
	        var startDate = _props10.startDate;
	        var endDate = _props10.endDate;
	        var onBlur = _props10.onBlur;
	        var isFocused = _props10.isFocused;
	        var showKeyboardShortcuts = _props10.showKeyboardShortcuts;
	        var phrases = this.state.phrases;

	        var modifiers = (0, _object2['default'])({
	          today: function () {
	            function today(day) {
	              return _this3.isToday(day);
	            }

	            return today;
	          }(),
	          blocked: function () {
	            function blocked(day) {
	              return _this3.isBlocked(day);
	            }

	            return blocked;
	          }(),
	          'blocked-calendar': function () {
	            function blockedCalendar(day) {
	              return isDayBlocked(day);
	            }

	            return blockedCalendar;
	          }(),
	          'blocked-out-of-range': function () {
	            function blockedOutOfRange(day) {
	              return isOutsideRange(day);
	            }

	            return blockedOutOfRange;
	          }(),
	          'highlighted-calendar': function () {
	            function highlightedCalendar(day) {
	              return isDayHighlighted(day);
	            }

	            return highlightedCalendar;
	          }(),
	          valid: function () {
	            function valid(day) {
	              return !_this3.isBlocked(day);
	            }

	            return valid;
	          }()

	        }, startDate && {
	          'selected-start': function () {
	            function selectedStart(day) {
	              return _this3.isStartDate(day);
	            }

	            return selectedStart;
	          }()
	        }, endDate && {
	          'selected-end': function () {
	            function selectedEnd(day) {
	              return _this3.isEndDate(day);
	            }

	            return selectedEnd;
	          }(),
	          'blocked-minimum-nights': function () {
	            function blockedMinimumNights(day) {
	              return _this3.doesNotMeetMinimumNights(day);
	            }

	            return blockedMinimumNights;
	          }()
	        }, startDate && endDate && {
	          'selected-span': function () {
	            function selectedSpan(day) {
	              return _this3.isInSelectedSpan(day);
	            }

	            return selectedSpan;
	          }(),
	          'last-in-range': function () {
	            function lastInRange(day) {
	              return _this3.isLastInRange(day);
	            }

	            return lastInRange;
	          }()
	        }, !this.isTouchDevice && {
	          // before anything has been set or after both are set
	          hovered: function () {
	            function hovered(day) {
	              return _this3.isHovered(day);
	            }

	            return hovered;
	          }(),

	          // while start date has been set, but end date has not been
	          'hovered-span': function () {
	            function hoveredSpan(day) {
	              return _this3.isInHoveredSpan(day);
	            }

	            return hoveredSpan;
	          }(),
	          'after-hovered-start': function () {
	            function afterHoveredStart(day) {
	              return _this3.isDayAfterHoveredStartDate(day);
	            }

	            return afterHoveredStart;
	          }()
	        });

	        return _react2['default'].createElement(_DayPicker2['default'], {
	          ref: function () {
	            function ref(_ref) {
	              _this3.dayPicker = _ref;
	            }

	            return ref;
	          }(),
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: modifiers,
	          numberOfMonths: numberOfMonths,
	          onDayClick: this.onDayClick,
	          onDayMouseEnter: this.onDayMouseEnter,
	          onDayMouseLeave: this.onDayMouseLeave,
	          onPrevMonthClick: onPrevMonthClick,
	          onNextMonthClick: onNextMonthClick,
	          monthFormat: monthFormat,
	          withPortal: withPortal,
	          hidden: !focusedInput,
	          initialVisibleMonth: initialVisibleMonth,
	          daySize: daySize,
	          onOutsideClick: onOutsideClick,
	          navPrev: navPrev,
	          navNext: navNext,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
	          isFocused: isFocused,
	          getFirstFocusableDay: this.getFirstFocusableDay,
	          onBlur: onBlur,
	          showKeyboardShortcuts: showKeyboardShortcuts,
	          phrases: phrases
	        });
	      }

	      return render;
	    }()
	  }]);

	  return DayPickerRangeController;
	}(_react2['default'].Component);

	exports['default'] = DayPickerRangeController;

	DayPickerRangeController.propTypes = propTypes;
	DayPickerRangeController.defaultProps = defaultProps;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getPhrasePropTypes");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("../../constants");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("object.assign");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/is_after");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/add_months");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/parse");

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/is_before");

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/start_of_month");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/end_of_month");

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/add_days");

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/sub_days");

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/is_within_range");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/difference_in_days");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/set_hours");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/start_of_day");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isNextDay");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = require("../shapes/FocusedInputShape");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = require("./DayPicker");

/***/ })
/******/ ]);