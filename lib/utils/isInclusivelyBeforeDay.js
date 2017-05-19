Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isInclusivelyBeforeDay;

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _is_before = require('date-fns/is_before');

var _is_before2 = _interopRequireDefault(_is_before);

var _isSameDay = require('./isSameDay');

var _isSameDay2 = _interopRequireDefault(_isSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isInclusivelyBeforeDay(a, b) {
  if (!(0, _is_date2['default'])(a) || !(0, _is_date2['default'])(b)) return false;
  return (0, _is_before2['default'])(a, b) || (0, _isSameDay2['default'])(a, b);
}