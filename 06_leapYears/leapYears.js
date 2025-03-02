const leapYears = function(year) {
    const divisible = function(year, divisor) {
        return year % divisor === 0;
    }

    if(divisible(year, 4)) {
        if(!divisible(year, 100) || (divisible(year, 100) && divisible(year, 400))){
            return true;
        } else if (!divisible(year, 400)){
            return false;
        }
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
