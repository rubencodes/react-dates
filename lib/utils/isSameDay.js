Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = sameDay;

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _is_same_day = require('date-fns/is_same_day');

var _is_same_day2 = _interopRequireDefault(_is_same_day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function sameDay(a, b) {
  if (!(0, _is_date2['default'])(a) || !(0, _is_date2['default'])(b)) return false;
  // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow
  return (0, _is_same_day2['default'])(a, b);
}