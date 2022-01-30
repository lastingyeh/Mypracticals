function isPalindrome(string) {
    string = string.toLowerCase();

    var chars = string.split('');
    var validchars = 'abcdefghijklmnopqrstuvwxyz';

    var newStr = chars.filter(w => validchars.indexOf(w) !== -1);

    return newStr.join('') === newStr.reverse().join('');
}

console.log(isPalindrome("Madam I'm adam"));
