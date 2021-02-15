const person = {                       //an object
    firstName: 'Rick',
    lastName: 'Dan',
    salary: 15000,
    fullName: function () {
        console.log(this.firstName, this.lastName)
    },
    chargeBill : function (amount){
        this.salary = this.salary - amount;
        return this.salary;
    },
    addAmount : function (addMoney){
        this.salary = this.salary + addMoney;
        return this.salary;
    },
    
}
////////////////////////////////////////////////////////
person.chargeBill(50);          // withdraw 50 money
person.chargeBill(4950);        // withdraw 4950 money
console.log(person.salary);


///////////////////////////////////////////////////////
person.addAmount(2000);     // deposit 2000 
console.log(person.salary); // current balance
person.addAmount(8000);     // deposit 8000 
console.log(person.salary); // current balance


//////////////////////////////////////////////////////

