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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(28);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _consolidatedEvents = __webpack_require__(20);

	var _parse = __webpack_require__(39);

	var _parse2 = _interopRequireDefault(_parse);

	var _format = __webpack_require__(5);

	var _format2 = _interopRequireDefault(_format);

	var _add_days = __webpack_require__(51);

	var _add_days2 = _interopRequireDefault(_add_days);

	var _add_months = __webpack_require__(18);

	var _add_months2 = _interopRequireDefault(_add_months);

	var _is_after = __webpack_require__(17);

	var _is_after2 = _interopRequireDefault(_is_after);

	var _end_of_month = __webpack_require__(47);

	var _end_of_month2 = _interopRequireDefault(_end_of_month);

	var _start_of_month = __webpack_require__(46);

	var _start_of_month2 = _interopRequireDefault(_start_of_month);

	var _SingleDatePickerShape = __webpack_require__(68);

	var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

	var _defaultPhrases = __webpack_require__(6);

	var _OutsideClickHandler = __webpack_require__(29);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _toLocalizedDateString = __webpack_require__(41);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _toISODateString = __webpack_require__(42);

	var _toISODateString2 = _interopRequireDefault(_toISODateString);

	var _getResponsiveContainerStyles = __webpack_require__(30);

	var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _SingleDatePickerInput = __webpack_require__(69);

	var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

	var _DayPicker = __webpack_require__(67);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	var _close = __webpack_require__(34);

	var _close2 = _interopRequireDefault(_close);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isSameDay = __webpack_require__(14);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _constants = __webpack_require__(9);

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

	var propTypes = _SingleDatePickerShape2['default'];

	var defaultProps = {
	  // required props for a functional interactive SingleDatePicker
	  date: null,
	  focused: false,

	  // input related props
	  id: 'date',
	  placeholder: 'Date',
	  disabled: false,
	  required: false,
	  screenReaderInputMessage: '',
	  showClearDate: false,
	  customCloseIcon: null,

	  // calendar presentation and interaction related props
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  anchorDirection: _constants.ANCHOR_LEFT,
	  horizontalMargin: 0,
	  withPortal: false,
	  withFullScreenPortal: false,
	  initialVisibleMonth: null,
	  numberOfMonths: 2,
	  keepOpenOnDateSelect: false,
	  reopenPickerOnClearDate: false,
	  renderCalendarInfo: null,
	  hideKeyboardShortcutsPanel: false,
	  daySize: _constants.DAY_SIZE,

	  // navigation related props
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
	  onClose: function () {
	    function onClose() {}

	    return onClose;
	  }(),

	  // day presentation and interaction related props
	  renderDay: null,
	  enableOutsideDays: false,
	  isDayBlocked: function () {
	    function isDayBlocked() {
	      return false;
	    }

	    return isDayBlocked;
	  }(),
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, new Date());
	    }

	    return isOutsideRange;
	  }(),
	  isDayHighlighted: function () {
	    function isDayHighlighted() {}

	    return isDayHighlighted;
	  }(),

	  // internationalization props
	  displayFormat: function () {
	    function displayFormat() {
	      return 'MM/DD/YYYY';
	    }

	    return displayFormat;
	  }(), //TODO: fix this: moment.localeData().longDateFormat('L')
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.SingleDatePickerPhrases
	};

	var SingleDatePicker = function (_React$Component) {
	  _inherits(SingleDatePicker, _React$Component);

	  function SingleDatePicker(props) {
	    _classCallCheck(this, SingleDatePicker);

	    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

	    _this.state = {
	      dayPickerContainerStyles: {},
	      hoverDate: null,
	      isDayPickerFocused: false,
	      isInputFocused: false
	    };

	    _this.today = new Date();
	    _this.isTouchDevice = false;

	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onDayClick = _this.onDayClick.bind(_this);

	    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
	    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    _this.clearDate = _this.clearDate.bind(_this);

	    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_this);

	    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
	    return _this;
	  }

	  /* istanbul ignore next */

	  _createClass(SingleDatePicker, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
	        this.responsivizePickerPosition();

	        if (this.props.focused) {
	          this.setState({
	            isInputFocused: true
	          });
	        }

	        this.isTouchDevice = (0, _isTouchDevice2['default'])();
	      }

	      return componentDidMount;
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
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate(prevProps) {
	        if (!prevProps.focused && this.props.focused) {
	          this.responsivizePickerPosition();
	        }
	      }

	      return componentDidUpdate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onChange',
	    value: function () {
	      function onChange(dateString) {
	        var _props = this.props;
	        var startDate = _props.startDate;
	        var isOutsideRange = _props.isOutsideRange;
	        var keepOpenOnDateSelect = _props.keepOpenOnDateSelect;
	        var onDateChange = _props.onDateChange;
	        var onFocusChange = _props.onFocusChange;
	        var onClose = _props.onClose;

	        var endDate = (0, _parse2['default'])(dateString, { format: this.getDisplayFormat() });

	        var isValid = endDate && !isOutsideRange(endDate);
	        if (isValid) {
	          onDateChange(endDate);
	          if (!keepOpenOnDateSelect) {
	            onFocusChange({ focused: false });
	            onClose({ startDate: startDate, endDate: endDate });
	          }
	        } else {
	          onDateChange(null);
	        }
	      }

	      return onChange;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, e) {
	        if (e) e.preventDefault();
	        if (this.isBlocked(day)) return;
	        var _props2 = this.props;
	        var onDateChange = _props2.onDateChange;
	        var keepOpenOnDateSelect = _props2.keepOpenOnDateSelect;
	        var onFocusChange = _props2.onFocusChange;
	        var onClose = _props2.onClose;
	        var startDate = _props2.startDate;
	        var endDate = _props2.endDate;

	        onDateChange(day);
	        if (!keepOpenOnDateSelect) {
	          onFocusChange({ focused: null });
	          onClose({ startDate: startDate, endDate: endDate });
	        }
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
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
	        this.setState({
	          hoverDate: null
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onFocus',
	    value: function () {
	      function onFocus() {
	        var _props3 = this.props;
	        var disabled = _props3.disabled;
	        var onFocusChange = _props3.onFocusChange;
	        var withPortal = _props3.withPortal;
	        var withFullScreenPortal = _props3.withFullScreenPortal;

	        var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
	        if (moveFocusToDayPicker) {
	          this.onDayPickerFocus();
	        } else {
	          this.onDayPickerBlur();
	        }

	        if (!disabled) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return onFocus;
	    }()
	  }, {
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        var _props4 = this.props;
	        var startDate = _props4.startDate;
	        var endDate = _props4.endDate;
	        var focused = _props4.focused;
	        var onFocusChange = _props4.onFocusChange;
	        var onClose = _props4.onClose;

	        if (!focused) return;

	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: false
	        });

	        onFocusChange({ focused: false });
	        onClose({ startDate: startDate, endDate: endDate });
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'onDayPickerFocus',
	    value: function () {
	      function onDayPickerFocus() {
	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: true
	        });
	      }

	      return onDayPickerFocus;
	    }()
	  }, {
	    key: 'onDayPickerBlur',
	    value: function () {
	      function onDayPickerBlur() {
	        this.setState({
	          isInputFocused: true,
	          isDayPickerFocused: false
	        });
	      }

	      return onDayPickerBlur;
	    }()
	  }, {
	    key: 'getDateString',
	    value: function () {
	      function getDateString(date) {
	        var displayFormat = this.getDisplayFormat();
	        if (date && displayFormat) {
	          return date && (0, _format2['default'])(date, displayFormat);
	        }
	        return (0, _toLocalizedDateString2['default'])(date);
	      }

	      return getDateString;
	    }()
	  }, {
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props5 = this.props;
	        var orientation = _props5.orientation;
	        var withPortal = _props5.withPortal;
	        var withFullScreenPortal = _props5.withFullScreenPortal;
	        var anchorDirection = _props5.anchorDirection;
	        var hoverDate = this.state.hoverDate;

	        var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
	          'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
	          'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
	          'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
	          'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
	          'SingleDatePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
	    }()
	  }, {
	    key: 'getDisplayFormat',
	    value: function () {
	      function getDisplayFormat() {
	        var displayFormat = this.props.displayFormat;

	        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
	      }

	      return getDisplayFormat;
	    }()
	  }, {
	    key: 'getFirstFocusableDay',
	    value: function () {
	      function getFirstFocusableDay(newMonth) {
	        var _this2 = this;

	        var _props6 = this.props;
	        var date = _props6.date;
	        var numberOfMonths = _props6.numberOfMonths;

	        var focusedDate = (0, _start_of_month2['default'])(newMonth);
	        if (date) {
	          focusedDate = date;
	        }

	        if (this.isBlocked(focusedDate)) {
	          var days = [];
	          var lastVisibleDay = (0, _end_of_month2['default'])((0, _add_months2['default'])(newMonth, numberOfMonths - 1));
	          var currentDay = focusedDate;
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
	    key: 'clearDate',
	    value: function () {
	      function clearDate() {
	        var _props7 = this.props;
	        var onDateChange = _props7.onDateChange;
	        var reopenPickerOnClearDate = _props7.reopenPickerOnClearDate;
	        var onFocusChange = _props7.onFocusChange;

	        onDateChange(null);
	        if (reopenPickerOnClearDate) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return clearDate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'responsivizePickerPosition',
	    value: function () {
	      function responsivizePickerPosition() {
	        var _props8 = this.props;
	        var anchorDirection = _props8.anchorDirection;
	        var horizontalMargin = _props8.horizontalMargin;
	        var withPortal = _props8.withPortal;
	        var withFullScreenPortal = _props8.withFullScreenPortal;
	        var focused = _props8.focused;
	        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

	        if (!focused) {
	          return;
	        }

	        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

	        if (!withPortal && !withFullScreenPortal) {
	          var containerRect = this.dayPickerContainer.getBoundingClientRect();
	          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
	          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

	          this.setState({
	            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
	          });
	        }
	      }

	      return responsivizePickerPosition;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props9 = this.props;
	        var isDayBlocked = _props9.isDayBlocked;
	        var isOutsideRange = _props9.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day);
	      }

	      return isBlocked;
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
	    key: 'isSelected',
	    value: function () {
	      function isSelected(day) {
	        return (0, _isSameDay2['default'])(day, this.props.date);
	      }

	      return isSelected;
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
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props10 = this.props;
	        var focused = _props10.focused;
	        var withPortal = _props10.withPortal;
	        var withFullScreenPortal = _props10.withFullScreenPortal;

	        if (!focused) {
	          return null;
	        }

	        if (withPortal || withFullScreenPortal) {
	          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
	        }

	        return this.renderDayPicker();
	      }

	      return maybeRenderDayPickerWithPortal;
	    }()
	  }, {
	    key: 'renderDayPicker',
	    value: function () {
	      function renderDayPicker() {
	        var _this3 = this;

	        var _props11 = this.props;
	        var isDayBlocked = _props11.isDayBlocked;
	        var isDayHighlighted = _props11.isDayHighlighted;
	        var isOutsideRange = _props11.isOutsideRange;
	        var enableOutsideDays = _props11.enableOutsideDays;
	        var numberOfMonths = _props11.numberOfMonths;
	        var orientation = _props11.orientation;
	        var monthFormat = _props11.monthFormat;
	        var navPrev = _props11.navPrev;
	        var navNext = _props11.navNext;
	        var onPrevMonthClick = _props11.onPrevMonthClick;
	        var onNextMonthClick = _props11.onNextMonthClick;
	        var withPortal = _props11.withPortal;
	        var withFullScreenPortal = _props11.withFullScreenPortal;
	        var focused = _props11.focused;
	        var renderDay = _props11.renderDay;
	        var renderCalendarInfo = _props11.renderCalendarInfo;
	        var date = _props11.date;
	        var initialVisibleMonth = _props11.initialVisibleMonth;
	        var hideKeyboardShortcutsPanel = _props11.hideKeyboardShortcutsPanel;
	        var customCloseIcon = _props11.customCloseIcon;
	        var phrases = _props11.phrases;
	        var daySize = _props11.daySize;
	        var _state = this.state;
	        var dayPickerContainerStyles = _state.dayPickerContainerStyles;
	        var isDayPickerFocused = _state.isDayPickerFocused;

	        var modifiers = {
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
	          }(),
	          hovered: function () {
	            function hovered(day) {
	              return _this3.isHovered(day);
	            }

	            return hovered;
	          }(),
	          selected: function () {
	            function selected(day) {
	              return _this3.isSelected(day);
	            }

	            return selected;
	          }()
	        };

	        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onClearFocus : undefined;
	        var initialVisibleMonthThunk = initialVisibleMonth || function () {
	          return date || new Date();
	        };
	        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

	        return _react2['default'].createElement('div', { // eslint-disable-line jsx-a11y/no-static-element-interactions
	          ref: function () {
	            function ref(_ref) {
	              _this3.dayPickerContainer = _ref;
	            }

	            return ref;
	          }(),
	          className: this.getDayPickerContainerClasses(),
	          style: dayPickerContainerStyles,
	          onClick: onOutsideClick
	        }, _react2['default'].createElement(_DayPicker2['default'], {
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
	          withPortal: withPortal || withFullScreenPortal,
	          hidden: !focused,
	          initialVisibleMonth: initialVisibleMonthThunk,
	          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
	          navPrev: navPrev,
	          navNext: navNext,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          isFocused: isDayPickerFocused,
	          getFirstFocusableDay: this.getFirstFocusableDay,
	          onBlur: this.onDayPickerBlur,
	          phrases: phrases,
	          daySize: daySize
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          'aria-label': phrases.closeDatePicker,
	          className: 'SingleDatePicker__close',
	          type: 'button',
	          onClick: this.onClearFocus
	        }, _react2['default'].createElement('div', { className: 'SingleDatePicker__close-icon' }, closeIcon)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props12 = this.props;
	        var id = _props12.id;
	        var placeholder = _props12.placeholder;
	        var disabled = _props12.disabled;
	        var focused = _props12.focused;
	        var required = _props12.required;
	        var showClearDate = _props12.showClearDate;
	        var date = _props12.date;
	        var phrases = _props12.phrases;
	        var withPortal = _props12.withPortal;
	        var withFullScreenPortal = _props12.withFullScreenPortal;
	        var screenReaderInputMessage = _props12.screenReaderInputMessage;
	        var isInputFocused = this.state.isInputFocused;

	        var displayValue = this.getDateString(date);
	        var inputValue = (0, _toISODateString2['default'])(date);

	        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onClearFocus : undefined;

	        return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
	          id: id,
	          placeholder: placeholder,
	          focused: focused,
	          isFocused: isInputFocused,
	          disabled: disabled,
	          required: required,
	          showCaret: !withPortal && !withFullScreenPortal,
	          onClearDate: this.clearDate,
	          showClearDate: showClearDate,
	          displayValue: displayValue,
	          inputValue: inputValue,
	          onChange: this.onChange,
	          onFocus: this.onFocus,
	          onKeyDownShiftTab: this.onClearFocus,
	          onKeyDownTab: this.onClearFocus,
	          onKeyDownArrowDown: this.onDayPickerFocus,
	          screenReaderMessage: screenReaderInputMessage,
	          phrases: phrases
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return SingleDatePicker;
	}(_react2['default'].Component);

	exports['default'] = SingleDatePicker;

	SingleDatePicker.propTypes = propTypes;
	SingleDatePicker.defaultProps = defaultProps;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/format");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ }),
/* 7 */,
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
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/is_after");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/add_months");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("consolidated-events");

/***/ }),
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
/* 28 */
/***/ (function(module, exports) {

	module.exports = require("react-portal");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getResponsiveContainerStyles");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 12 12" }, this.props),
	          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/parse");

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = require("../utils/toISODateString");

/***/ }),
/* 43 */,
/* 44 */,
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
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

	module.exports = require("./DayPicker");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = require("../shapes/SingleDatePickerShape");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = require("./SingleDatePickerInput");

/***/ })
/******/ ]);