const sumAll = function(int1, int2) {
    let output = 0;
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || int1 < 0 || int2 < 0){
        return "ERROR";
    }
    let lower, upper;
    if (int1 < int2){
        lower = int1;
        upper = int2;
    } else {
        lower = int2;
        upper = int1
    }
    for (let i = lower; i <= upper; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
