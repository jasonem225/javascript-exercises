const fibonacci = function(input){
    if (input == 0){
        return 0;
    }else if (input < 0){
        return "OOPS";
    }
    let arr = [0, 1];
    for (let i = 1; i < input; i++){
        let temp = arr.reduce((sum, currentItem)=> {
            return sum + currentItem;
        }, 0);
        arr.splice(0, 1);
        arr.push(temp);
    }
    return arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
