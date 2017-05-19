Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isInclusivelyAfterDay;

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _is_after = require('date-fns/is_after');

var _is_after2 = _interopRequireDefault(_is_after);

var _isSameDay = require('./isSameDay');

var _isSameDay2 = _interopRequireDefault(_isSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isInclusivelyAfterDay(a, b) {
  if (!(0, _is_date2['default'])(a) || !(0, _is_date2['default'])(b)) return false;
  return (0, _is_after2['default'])(a, b) || (0, _isSameDay2['default'])(a, b);
}