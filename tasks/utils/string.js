// Module variables
var PATTERN_REGEXP = /\{\{([\w\*\.]*?)\}\}/g;
var DOT_REGEXP = /([^\.]+)/g;

/**
 * Compile template
 * @param  {String} template String to precompile
 * @param  {Object} object   Template arguments
 * @return {String}          Precompiled template
 * @api public
 */
export function compile(template, object) {
  var args = arguments.length > 2 ? arguments : object;
  return template.replace(PATTERN_REGEXP, (value, property) => {
    var key;
    var map = args;
    while ((key = DOT_REGEXP.exec(property)) && (key = key[1])) {
      map = map ? (key === '*' ? map : map[key]) : null;
    }
    return map === void 0 ? '' : map;
  });
}
