const removeFromArray = function() {
    let arr = [];
    let value = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(!Array.isArray(arguments[i])) {
            value = arguments[i];
            // console.log(`The value is: ${value}`);
        } else if (Array.isArray(arguments[i])) {
            arr = arguments[i]
        }
        for(let j = arr.length; j >= 0; j--) {
            if(arr[j] === value) {
                arr.splice(arr.indexOf(value), 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
