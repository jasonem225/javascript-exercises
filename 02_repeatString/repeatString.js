const repeatString = function(stringToRepeat, numberOfRepeat) {
    if (numberOfRepeat < 0){
        return "ERROR";
    }
    let output = "";
    for (let i = 0; i < numberOfRepeat; i++){
        output += stringToRepeat;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
