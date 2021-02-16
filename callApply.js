const person = {                       //an object
    firstName: 'Rick',
    lastName: 'Dan',
    salary: 15000,
    fullName: function () {
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    },
    addAmount: function (addMoney) {
        this.salary = this.salary + addMoney;
        return this.salary;
    },

}
person.chargeBill(50);          // withdraw 50 money
person.chargeBill(4950);        // withdraw 4950 money
console.log("Person's withdraw amount :",person.salary);

person.addAmount(2000);     // deposit 2000 
console.log("Person's Deposited :",person.salary); // current balance

person.addAmount(8000);     // deposit 8000 
console.log("Person's Deposit :",person.salary); // current balance




// secondPerson example for bind method
const secondPerson = {
    firstName: 'David',
    lastName: 'Chan',
    favFood: 'Rasmalai',
    salary: 25000
}
const secondChargeBill = person.chargeBill.bind(secondPerson);
console.log("Second Person withdraw Amount :", secondChargeBill(1000));  // withdraw amount 1000
const secondAddMoney = person.addAmount.bind(secondPerson);
console.log("Second Person Deposit Amount :", secondAddMoney(6000));   // deposit amount 6000


// thirdPerson example for bind method
const thirdPerson = {
    firstName: 'Navid',
    lastName: 'Russel',
    favFood: 'pizza',
    salary: 40000
}
const thirdChargeBill = person.chargeBill.bind(thirdPerson);
console.log("Third Person withdraw Amount :", thirdChargeBill(20000));  // withdraw amount 20000
const thirdAddMoney = person.addAmount.bind(thirdPerson);
console.log("Third Person deposit Amount :", thirdAddMoney(30000));     //deposit amount 30000


// forthPerson example for bind method
const forthPerson = {
    firstName: 'Kevin',
    lastName: 'Frog',
    favFood: 'burger',
    salary: 70000
}
const forthChargeBill = person.chargeBill.bind(forthPerson);
console.log("Forth Person withdraw Amount :",forthChargeBill(5000));
const forthAddMoney = person.addAmount.bind(forthPerson);               // withdraw amount 5000
console.log("Forth Person deposit Amount :",forthAddMoney(15000));    // deposit amount 15000


// fifthPerson example for call method
const fifthPerson = {
    firstName: 'Sam',
    lastName: 'Daniel',
    favFood: 'pizza',
    salary: 40000
}

person.chargeBill.call(fifthPerson, 2000);
console.log("Fifth Person's charges :",fifthPerson.salary);
person.addAmount.call(fifthPerson,12000);
console.log("Fifth Person's Deposit :",fifthPerson.salary);