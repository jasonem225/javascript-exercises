const palindromes = function (str) {
    const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanString = str
    .toLowerCase()
    .split("")
    .filter((char) => lettersAndNumbers.includes(char))
    .join("");

    const reversedString = cleanString
    .split("")
    .reverse()
    .join("");

    return (cleanString == reversedString)
};

// Do not edit below this line
module.exports = palindromes;
