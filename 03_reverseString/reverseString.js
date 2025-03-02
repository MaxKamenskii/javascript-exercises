const reverseString = function(str) {
    let splitString = str.split("");
    const reversedArray = [];
    for(let i = splitString.length - 1; i >= 0; i--) {
        reversedArray.push(splitString[i]);
    };
        const revString = reversedArray.join('');
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
