'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

var _electrolyte = require('electrolyte');

var _electrolyte2 = _interopRequireDefault(_electrolyte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_electrolyte2.default.use(_electrolyte2.default.dir('dist/ioc'));

var dependencies = exports.dependencies = {
  scrapper: _electrolyte2.default.create('lib/scrapper')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pb2MvaW5kZXguanMiXSwibmFtZXMiOlsidXNlIiwiZGlyIiwiZGVwZW5kZW5jaWVzIiwic2NyYXBwZXIiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsc0JBQUlBLEdBQUosQ0FBUSxzQkFBSUMsR0FBSixDQUFRLFVBQVIsQ0FBUjs7QUFFTyxJQUFNQyxzQ0FBZTtBQUMxQkMsWUFBVSxzQkFBSUMsTUFBSixDQUFXLGNBQVg7QUFEZ0IsQ0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9DIGZyb20gJ2VsZWN0cm9seXRlJ1xuXG5Jb0MudXNlKElvQy5kaXIoJ2Rpc3QvaW9jJykpXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbmNpZXMgPSB7XG4gIHNjcmFwcGVyOiBJb0MuY3JlYXRlKCdsaWIvc2NyYXBwZXInKVxufVxuIl19