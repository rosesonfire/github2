'use strict';

var _ioc = require('./../ioc');

// Start scrapping
var scrape = async function scrape() {
  var scraper = await _ioc.dependencies.scraper;

  scraper();
};

scrape().catch(function (e) {
  // eslint-disable-next-line no-console
  console.error(e);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbInNjcmFwZSIsInNjcmFwZXIiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7QUFDQSxJQUFNQSxTQUFTLGVBQVRBLE1BQVMsR0FBWTtBQUN6QixNQUFNQyxVQUFVLE1BQU0sa0JBQWFBLE9BQW5DOztBQUVBQTtBQUNELENBSkQ7O0FBTUFELFNBQVNFLEtBQVQsQ0FBZSxhQUFLO0FBQ2xCO0FBQ0FDLFVBQVFDLEtBQVIsQ0FBY0MsQ0FBZDtBQUNELENBSEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLy4uL2lvYydcblxuLy8gU3RhcnQgc2NyYXBwaW5nXG5jb25zdCBzY3JhcGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNjcmFwZXIgPSBhd2FpdCBkZXBlbmRlbmNpZXMuc2NyYXBlclxuXG4gIHNjcmFwZXIoKVxufVxuXG5zY3JhcGUoKS5jYXRjaChlID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5lcnJvcihlKVxufSlcbiJdfQ==