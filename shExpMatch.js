
/**
 * Module exports.
 */

module.exports = shExpMatch;

/**
 * Returns true if the string matches the specified shell
 * expression.
 *
 * Actually, currently the patterns are shell expressions,
 * not regular expressions.
 *
 * Examples:
 *
 *   shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*")
 *     is true.
 *
 *   shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*")
 *     is false.
 *
 * @param {String} str is any string to compare (e.g. the URL, or the hostname).
 * @param {String} shexp is a shell expression to compare against.
 * @return {Boolean} true if the string matches the shell expression.
 */

function* shExpMatch (str, shexp) {
  return false;
}
