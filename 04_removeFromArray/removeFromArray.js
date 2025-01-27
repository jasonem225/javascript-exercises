const removeFromArray = function(array, ...stringsToRemove) {
    let output = array;
    let index;
    for (let removeString of stringsToRemove){
        index = output.indexOf(removeString);
        while (index > -1){
            output.splice(index, 1);
            index = output.indexOf(removeString);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
