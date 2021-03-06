// Generated by CoffeeScript 1.6.2
var CoffeeScriptCompiler, coffeescript, normalizeChecker;

coffeescript = require('coffee-script');

normalizeChecker = function(item) {
  switch (toString.call(item)) {
    case '[object RegExp]':
      return function(string) {
        return item.test(string);
      };
    case '[object Function]':
      return item;
    default:
      return function() {
        return false;
      };
  }
};

module.exports = CoffeeScriptCompiler = (function() {
  CoffeeScriptCompiler.prototype.brunchPlugin = true;

  CoffeeScriptCompiler.prototype.type = 'javascript';

  CoffeeScriptCompiler.prototype.extension = 'coffee';

  function CoffeeScriptCompiler(config) {
    this.config = config;
    return;
  }

  CoffeeScriptCompiler.prototype.compile = function(data, path, callback) {
    var bare, err, error, normalizedVendor, result, _ref, _ref1;

    try {
      normalizedVendor = normalizeChecker((_ref = this.config) != null ? (_ref1 = _ref.conventions) != null ? _ref1.vendor : void 0 : void 0);
      bare = !normalizedVendor(path);
      return result = coffeescript.compile(data, {
        bare: bare
      });
    } catch (_error) {
      err = _error;
      return error = err;
    } finally {
      callback(error, result);
    }
  };

  return CoffeeScriptCompiler;

})();
