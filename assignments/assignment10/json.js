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

// Question 6: work from home -------------------------------------

for (let k = 0; k < company.employees.length; k++) {
    if (company.employees[k].name === "Anna") {
        company.employees[k].wfh = true
    } else if (company.employees[k].name === "Sam") {
        company.employees[k].wfh = true
    } else {
        company.employees[k].wfh = false
    }
}

console.log(company.employees)