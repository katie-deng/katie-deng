// Question 1: employee details -------------------------------------
var resources = {
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raise" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raise" : false,
        }
    ]
}

console.log (resources.employees)

// Question 2: company details -------------------------------------
var company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raise" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raise" : false,
        },
    ]
}

console.log(company)

// Question 3: new employee -------------------------------------

let newEmployee = 
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raise" : false,
    }

company["employees"].push(newEmployee)

console.log(company.employees.length)
console.log(company.employees)
console.log(company.employees[3])

// Question 4: total salary -------------------------------------

let total = 0
for (let i = 0; i < company.employees.length; i++) {
    total += company.employees[i].salary
}
console.log(total)

// Question 5: raises -------------------------------------

for (let j = 0; j < company.employees.length; j++) {
    if (company.employees[j].raise === true) {
        let increaseSalary = company.employees[j].salary * 1.1
        company.employees[j].salary = increaseSalary
        company.employees[j].raise = false
    }  
}

console.log(company.employees)

// Question 6: work from home

// var OutofOffice = {
//     "working from home": ["Anna", "Sam"]
// }

company["employees"].push(OutofOffice)

console.log(company.employees)

let officestatus = {"working from home" : true}
let officestatus2 = {"working from home" : false}

for (let k=0; k < company.employees.length; k++) {
    if (company.employees[k].name === "Anna") {
        const wfh = company.employees[k]
        wfh.push(officestatus)
    }else if (company.employees[k].name === "Sam") {
        let wfhtwo = company.employees[k]
        wfhtwo.push(officestatus)
    } else {
        let wfhthree = company.employees[k]
        wfhthree.push(officestatus2)
    }
}

// console.log(company.employees)

// company["employees"].forEach(officestatus)
// let home = {"working from home" : true}
// let office = {"working from home" : false}
// let index = 0

// function officestatus (x){
//     if (company.employees.name === "Anna") {
//         const employ = company.employees[3]
//         employ.push(home)
//     } else if (company.employees.name === "Sam") {
//         const employ2 = company.employees[0]
//         employ2.push(home)
//     } else {
//         const employ3 = company.employees[0]
//     }
// }

