Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getCalendarMonthWeeks;

var _start_of_month = require('date-fns/start_of_month');

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _end_of_month = require('date-fns/end_of_month');

var _end_of_month2 = _interopRequireDefault(_end_of_month);

var _set_hours = require('date-fns/set_hours');

var _set_hours2 = _interopRequireDefault(_set_hours);

var _get_day = require('date-fns/get_day');

var _get_day2 = _interopRequireDefault(_get_day);

var _sub_days = require('date-fns/sub_days');

var _sub_days2 = _interopRequireDefault(_sub_days);

var _add_days = require('date-fns/add_days');

var _add_days2 = _interopRequireDefault(_add_days);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCalendarMonthWeeks(month, enableOutsideDays) {
  // set utc offset to get correct dates in future (when timezone changes)
  var baseDate = month;
  var firstOfMonth = (0, _set_hours2['default'])((0, _start_of_month2['default'])(baseDate), 12);
  var lastOfMonth = (0, _set_hours2['default'])((0, _end_of_month2['default'])(baseDate), 12);

  var currentDay = firstOfMonth;
  var currentWeek = [];
  var weeksInMonth = [];

  // days belonging to the previous month
  for (var i = 0; i < (0, _get_day2['default'])(currentDay); i += 1) {
    var prevDay = enableOutsideDays ? (0, _sub_days2['default'])(currentDay, i + 1) : null;
    currentWeek.unshift(prevDay);
  }

  while (currentDay < lastOfMonth) {
    currentWeek.push(currentDay);
    currentDay = (0, _add_days2['default'])(currentDay, 1);

    if ((0, _get_day2['default'])(currentDay) === 0) {
      weeksInMonth.push(currentWeek);
      currentWeek = [];
    }
  }

  // getDay() returns the index of the day of the week according to the locale
  // this means if the week starts on Monday, getDay() will return 0 for a Monday date, not 1
  if ((0, _get_day2['default'])(currentDay) !== 0) {
    // days belonging to the next month
    for (var k = (0, _get_day2['default'])(currentDay), count = 0; k < 7; k += 1, count += 1) {
      var nextDay = enableOutsideDays ? (0, _add_days2['default'])(currentDay, count) : null;
      currentWeek.push(nextDay);
    }

    weeksInMonth.push(currentWeek);
  }

  return weeksInMonth;
}