class Person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}


// first person = create an array with class 
const firstPerson = new Person ("Arselian", "Dav", 10000);
console.log("Object created First", firstPerson);


// second person  = create an array with class
const secondPerson = new Person ("Richard", "Arnold", 15000);
console.log("Object created Second",secondPerson);


//////////////////////////////////////////////////////////////


// Creating neighbour details with class 

class Details {
    constructor (Firstname, Lastname, Wifename,Child,Salary, House,Car, DailyCost,Savings){
        this.firstName = Firstname ;
        this.lastName = Lastname;
        this.wifeName = Wifename ;
        this.children = Child;
        this.salary = Salary ;
        this.house  = House;
        this.car = Car;
        this.dailyExpencess = DailyCost;
        this.savings = Savings;
    }
}

const neighbourOne = new Details ("Nick", "Harrison", "Dalia", 4, 20000, "Yes", 2, 2000, 5000);
console.log("neighbourOne",neighbourOne);

const neighbourTwo = new Details ("Daniel", "Vron", "Samia", 2, 25000, "Yes", 5, 1000,3000);
console.log("NeighbourTwo",neighbourTwo);

const neighbourThree = new Details ("Hammad", "Clark", "Nisa" ,5, 30000, "Yes", 1, 1200, 7000);
console.log("NeighbourThree",neighbourThree)

