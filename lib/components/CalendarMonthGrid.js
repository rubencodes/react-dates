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

	var _format = __webpack_require__(5);

	var _format2 = _interopRequireDefault(_format);

	var _is_after = __webpack_require__(17);

	var _is_after2 = _interopRequireDefault(_is_after);

	var _add_months = __webpack_require__(18);

	var _add_months2 = _interopRequireDefault(_add_months);

	var _sub_months = __webpack_require__(19);

	var _sub_months2 = _interopRequireDefault(_sub_months);

	var _is_same_month = __webpack_require__(11);

	var _is_same_month2 = _interopRequireDefault(_is_same_month);

	var _reactAddonsShallowCompare = __webpack_require__(3);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _consolidatedEvents = __webpack_require__(20);

	var _defaultPhrases = __webpack_require__(6);

	var _getPhrasePropTypes = __webpack_require__(7);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _CalendarMonth = __webpack_require__(21);

	var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

	var _isTransitionEndSupported = __webpack_require__(22);

	var _isTransitionEndSupported2 = _interopRequireDefault(_isTransitionEndSupported);

	var _getTransformStyles = __webpack_require__(23);

	var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

	var _getCalendarMonthWidth = __webpack_require__(24);

	var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

	var _ScrollableOrientationShape = __webpack_require__(15);

	var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

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

	var propTypes = {
	  enableOutsideDays: _propTypes2['default'].bool,
	  firstVisibleMonthIndex: _propTypes2['default'].number,
	  initialMonth: _propTypes2['default'].object,
	  isAnimating: _propTypes2['default'].bool,
	  numberOfMonths: _propTypes2['default'].number,
	  modifiers: _propTypes2['default'].object,
	  orientation: _ScrollableOrientationShape2['default'],
	  onDayClick: _propTypes2['default'].func,
	  onDayMouseEnter: _propTypes2['default'].func,
	  onDayMouseLeave: _propTypes2['default'].func,
	  onMonthTransitionEnd: _propTypes2['default'].func,
	  renderDay: _propTypes2['default'].func,
	  transformValue: _propTypes2['default'].string,
	  daySize: _propTypes2['default'].number,
	  focusedDate: _propTypes2['default'].object, // indicates focusable day
	  isFocused: _propTypes2['default'].bool, // indicates whether or not to move focus to focusable day

	  // i18n
	  monthFormat: _propTypes2['default'].string,
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
	};

	var defaultProps = {
	  enableOutsideDays: false,
	  firstVisibleMonthIndex: 0,
	  initialMonth: new Date(),
	  isAnimating: false,
	  numberOfMonths: 1,
	  modifiers: {},
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  onDayClick: function () {
	    function onDayClick() {}

	    return onDayClick;
	  }(),
	  onDayMouseEnter: function () {
	    function onDayMouseEnter() {}

	    return onDayMouseEnter;
	  }(),
	  onDayMouseLeave: function () {
	    function onDayMouseLeave() {}

	    return onDayMouseLeave;
	  }(),
	  onMonthTransitionEnd: function () {
	    function onMonthTransitionEnd() {}

	    return onMonthTransitionEnd;
	  }(),

	  renderDay: null,
	  transformValue: 'none',
	  daySize: _constants.DAY_SIZE,
	  focusedDate: null,
	  isFocused: false,

	  // i18n
	  monthFormat: 'MMMM YYYY', // english locale
	  phrases: _defaultPhrases.CalendarDayPhrases
	};

	function getMonths(initialMonth, numberOfMonths) {
	  var month = (0, _sub_months2['default'])(initialMonth, 1);

	  var months = [];
	  for (var i = 0; i < numberOfMonths + 2; i += 1) {
	    months.push(month);
	    month = (0, _add_months2['default'])(month, 1);
	  }

	  return months;
	}

	var CalendarMonthGrid = function (_React$Component) {
	  _inherits(CalendarMonthGrid, _React$Component);

	  function CalendarMonthGrid(props) {
	    _classCallCheck(this, CalendarMonthGrid);

	    var _this = _possibleConstructorReturn(this, (CalendarMonthGrid.__proto__ || Object.getPrototypeOf(CalendarMonthGrid)).call(this, props));

	    _this.state = {
	      months: getMonths(props.initialMonth, props.numberOfMonths)
	    };

	    _this.isTransitionEndSupported = (0, _isTransitionEndSupported2['default'])();
	    _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
	    return _this;
	  }

	  _createClass(CalendarMonthGrid, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.eventHandle = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        var initialMonth = nextProps.initialMonth;
	        var numberOfMonths = nextProps.numberOfMonths;
	        var months = this.state.months;

	        var hasMonthChanged = !(0, _is_same_month2['default'])(this.props.initialMonth, initialMonth);
	        var hasNumberOfMonthsChanged = this.props.numberOfMonths !== numberOfMonths;
	        var newMonths = months;

	        if (hasMonthChanged && !hasNumberOfMonthsChanged) {
	          if ((0, _is_after2['default'])(initialMonth, this.props.initialMonth)) {
	            newMonths = months.slice(1);
	            newMonths.push((0, _add_months2['default'])(months[months.length - 1], 1));
	          } else {
	            newMonths = months.slice(0, months.length - 1);
	            newMonths.unshift((0, _sub_months2['default'])(months[0], 1));
	          }
	        }

	        if (hasNumberOfMonthsChanged) {
	          newMonths = getMonths(initialMonth, numberOfMonths);
	        }

	        this.setState({
	          months: newMonths
	        });
	      }

	      return componentWillReceiveProps;
	    }()
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function () {
	      function shouldComponentUpdate(nextProps, nextState) {
	        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
	      }

	      return shouldComponentUpdate;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate() {
	        var _props = this.props;
	        var isAnimating = _props.isAnimating;
	        var onMonthTransitionEnd = _props.onMonthTransitionEnd;

	        // For IE9, immediately call onMonthTransitionEnd instead of
	        // waiting for the animation to complete

	        if (!this.isTransitionEndSupported && isAnimating) {
	          onMonthTransitionEnd();
	        }
	      }

	      return componentDidUpdate;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        (0, _consolidatedEvents.removeEventListener)(this.eventHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onTransitionEnd',
	    value: function () {
	      function onTransitionEnd() {
	        this.props.onMonthTransitionEnd();
	      }

	      return onTransitionEnd;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this2 = this;

	        var _props2 = this.props;
	        var enableOutsideDays = _props2.enableOutsideDays;
	        var firstVisibleMonthIndex = _props2.firstVisibleMonthIndex;
	        var isAnimating = _props2.isAnimating;
	        var modifiers = _props2.modifiers;
	        var numberOfMonths = _props2.numberOfMonths;
	        var monthFormat = _props2.monthFormat;
	        var orientation = _props2.orientation;
	        var transformValue = _props2.transformValue;
	        var daySize = _props2.daySize;
	        var onDayMouseEnter = _props2.onDayMouseEnter;
	        var onDayMouseLeave = _props2.onDayMouseLeave;
	        var onDayClick = _props2.onDayClick;
	        var renderDay = _props2.renderDay;
	        var onMonthTransitionEnd = _props2.onMonthTransitionEnd;
	        var focusedDate = _props2.focusedDate;
	        var isFocused = _props2.isFocused;
	        var phrases = _props2.phrases;
	        var months = this.state.months;

	        var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
	        var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
	        var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;

	        var className = (0, _classnames2['default'])('CalendarMonthGrid', {
	          'CalendarMonthGrid--horizontal': isHorizontal,
	          'CalendarMonthGrid--vertical': isVertical,
	          'CalendarMonthGrid--vertical-scrollable': isVerticalScrollable,
	          'CalendarMonthGrid--animating': isAnimating
	        });

	        var calendarMonthWidth = (0, _getCalendarMonthWidth2['default'])(daySize);

	        var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;

	        var style = (0, _object2['default'])({}, (0, _getTransformStyles2['default'])(transformValue), {
	          width: width
	        });

	        return _react2['default'].createElement('div', {
	          ref: function () {
	            function ref(_ref) {
	              _this2.container = _ref;
	            }

	            return ref;
	          }(),
	          className: className,
	          style: style,
	          onTransitionEnd: onMonthTransitionEnd
	        }, months.map(function (month, i) {
	          var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
	          return _react2['default'].createElement(_CalendarMonth2['default'], {
	            key: (0, _format2['default'])(month, 'YYYY-MM'),
	            month: month,
	            isVisible: isVisible,
	            enableOutsideDays: enableOutsideDays,
	            modifiers: modifiers,
	            monthFormat: monthFormat,
	            orientation: orientation,
	            onDayMouseEnter: onDayMouseEnter,
	            onDayMouseLeave: onDayMouseLeave,
	            onDayClick: onDayClick,
	            renderDay: renderDay,
	            daySize: daySize,
	            focusedDate: isVisible ? focusedDate : null,
	            isFocused: isFocused,
	            phrases: phrases
	          });
	        }));
	      }

	      return render;
	    }()
	  }]);

	  return CalendarMonthGrid;
	}(_react2['default'].Component);

	exports['default'] = CalendarMonthGrid;

	CalendarMonthGrid.propTypes = propTypes;
	CalendarMonthGrid.defaultProps = defaultProps;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-addons-shallow-compare");

/***/ }),
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
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/is_same_month");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
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
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("date-fns/sub_months");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("consolidated-events");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("./CalendarMonth");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isTransitionEndSupported");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getTransformStyles");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getCalendarMonthWidth");

/***/ })
/******/ ]);