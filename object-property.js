const student = [
    { id: 21, name: 'Marry', city: 'mumbai', country: 'India' },
    { id: 31, name: 'David', city: 'Delhi', country: 'India' },
    { id: 41, name: "Russel", city: 'chittagong', country: 'Bangladesh' },
    { id: 51, name: 'Hammy', city: 'London', country: 'uk' }
];
const allId =[];
const studentNames = [];
const studentsCity =[];
const studentCountry =[];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];

// }


// students Name
const allName = student.map(x => x.name);
studentNames.push(...allName);
console.log(studentNames);


//Students ID
const studentsId = student.map(x =>x.id);
allId.push(...studentsId);
console.log(allId);


// students city name
const city = student.map(x =>x.city);
studentsCity.push(...city);
console.log(studentsCity);


// students country
const country = student.map(x => x.country);
studentCountry.push(...country);
console.log(studentCountry);