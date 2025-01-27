const reverseString = function(stringToReverse) {
    let output = "";
    const array = stringToReverse.split("");
    for (let char of array){
        output = char + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
