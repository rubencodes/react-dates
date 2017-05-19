Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isNextDay;

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _is_tomorrow = require('date-fns/is_tomorrow');

var _is_tomorrow2 = _interopRequireDefault(_is_tomorrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isNextDay(a, b) {
  if (!(0, _is_date2['default'])(a) || !(0, _is_date2['default'])(b)) return false;

  return (0, _is_tomorrow2['default'])(b);
}