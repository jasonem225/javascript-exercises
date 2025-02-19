const getTheTitles = function(books) {
    let arr = [];
    books.map((book) => arr.push(book.title));
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
