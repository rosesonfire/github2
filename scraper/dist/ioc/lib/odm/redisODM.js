'use strict';

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

var _config = require('../../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (redisWrapper) {
  var redisODMInstance = null;

  try {
    var redis = redisWrapper;
    var host = _config.dbConfig.host,
        port = _config.dbConfig.port;


    redisODMInstance = (0, _redisODM2.default)({ redis: redis })({ host: host, port: port });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return redisODMInstance;
};

exports['@require'] = ['lib/wrappers/redisWrapper'];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL29kbS9yZWRpc09ETS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwicmVkaXNXcmFwcGVyIiwicmVkaXNPRE1JbnN0YW5jZSIsInJlZGlzIiwiaG9zdCIsInBvcnQiLCJlIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixVQUFDRSxZQUFELEVBQWtCO0FBQzNDLE1BQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxNQUFJO0FBQ0YsUUFBTUMsUUFBUUYsWUFBZDtBQURFLFFBRU1HLElBRk4sb0JBRU1BLElBRk47QUFBQSxRQUVZQyxJQUZaLG9CQUVZQSxJQUZaOzs7QUFJRkgsdUJBQW1CLHdCQUFTLEVBQUVDLFlBQUYsRUFBVCxFQUFvQixFQUFFQyxVQUFGLEVBQVFDLFVBQVIsRUFBcEIsQ0FBbkI7QUFDRCxHQUxELENBS0UsT0FBT0MsQ0FBUCxFQUFVO0FBQ1Y7QUFDQUMsWUFBUUMsS0FBUixDQUFjRixDQUFkO0FBQ0Q7O0FBRUQsU0FBT0osZ0JBQVA7QUFDRCxDQWREOztBQWdCQUgsUUFBUSxVQUFSLElBQXNCLENBQUMsMkJBQUQsQ0FBdEI7QUFDQUEsUUFBUSxZQUFSLElBQXdCLElBQXhCIiwiZmlsZSI6InJlZGlzT0RNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuaW1wb3J0IHsgZGJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IChyZWRpc1dyYXBwZXIpID0+IHtcbiAgbGV0IHJlZGlzT0RNSW5zdGFuY2UgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZWRpcyA9IHJlZGlzV3JhcHBlclxuICAgIGNvbnN0IHsgaG9zdCwgcG9ydCB9ID0gZGJDb25maWdcbiAgICBcbiAgICByZWRpc09ETUluc3RhbmNlID0gcmVkaXNPRE0oeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG5cbiAgcmV0dXJuIHJlZGlzT0RNSW5zdGFuY2Vcbn1cblxuZXhwb3J0c1snQHJlcXVpcmUnXSA9IFsnbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlciddXG5leHBvcnRzWydAc2luZ2xldG9uJ10gPSB0cnVlXG4iXX0=