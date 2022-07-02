var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string');

Array.prototype.concat.call(str, 'string');

Array.prototype.every.call(str, function(ch) { return ch !== ''});

Array.prototype.some.call(str, function(ch) { return ch === ''});

var arr = Array.prototype.map.call(str, function(ch) { return ch + '!';});
console.log(arr);


var newStr = Array.prototype.reduce.apply(str, [
    function(string, ch, i) { return string + ch + i },
    ''
])


console.log(newStr);