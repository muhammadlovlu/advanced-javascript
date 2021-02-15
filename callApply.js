const person = {                       //an object
    firstName: 'Rick',
    lastName: 'Dan',
    salary: 15000,
    fullName: function () {
        console.log(this.firstName, this.lastName)
    }
}
console.log(person.firstName, person.lastName)  // access object's property
