Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toLocalizedDateString;

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toLocalizedDateString(date, currentFormat) {
  if (!date) return null;

  var dateObj = (0, _is_date2['default'])(date) ? date : (0, _parse2['default'])(date, { format: currentFormat });
  if (!dateObj) return null;

  return (0, _format2['default'])(dateObj, _constants.DISPLAY_FORMAT);
}