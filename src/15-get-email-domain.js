/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  function strSlice(str) {
    var arr = str.split('');
    var index = arr.indexOf('@');
    var strArr = arr.join('')
    var slice = strArr.slice(index + 1);
    return slice;
}
while (email.includes('@')) {
    email = strSlice(email);
}
return email;
}

module.exports = getEmailDomain;
