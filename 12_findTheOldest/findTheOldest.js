const findTheOldest = function(people) {
    const date = new Date();
    const year = date.getFullYear();
    let oldest = people[0];
    if (!('yearOfDeath' in oldest)){
        oldest.yearOfDeath = year;
    }
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    people.map((person) => {
        if (!('yearOfDeath' in person)){
            person.yearOfDeath = year;
        }
        let tempAge = person.yearOfDeath - person.yearOfBirth;
        console.log(person.name + " " + tempAge);
        if (tempAge > oldestAge){
            console.log("New oldest");
            oldest = person;
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } 
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
