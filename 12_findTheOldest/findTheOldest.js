const findTheOldest = function(people) {
    let oldest = people[0]
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    people.map((person) => {
        let tempAge = person.yearOfDeath - person.yearOfBirth;
        if (tempAge > oldestAge){
            oldest = person;
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } 
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
