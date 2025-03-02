const sumAll = function() {
    if(arguments[0] < 0 || arguments [1] < 0) {
        return ('ERROR')
    } else if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
        return ('ERROR')
    } else if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[0])) {
        return ('ERROR')
    }

    
    if(arguments[0] < arguments[1]){
        let sum = arguments[0];
        let add = arguments[0];
        for(let i = arguments[0]; i < arguments[1]; i++) {
            if(add < arguments[1]-1) {
                add+= 1;
                sum+= add;
            }
        }
        sum+= arguments[1];
        return sum;
    } else {
        let sum = arguments[0];
        let add = arguments[0];
        for(let l = add; l > arguments[1]; l--) {
                add-= 1;
                sum+= add;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
