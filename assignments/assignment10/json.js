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
console.log (resources.employees[2].name)

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

company["employees"].push (newEmployee)

console.log(company.employees.length)
console.log(company.employees[3])

// Question 4: total salary -------------------------------------

let total = 0
for (let i = 0; i < company.employees.length; i++) {
    total += company.employees[i].salary
}
console.log(total)

// Question 5: raises -------------------------------------

function raiseSalary (salary) {
    for (let j = 0; j < resources.employees.length; j++) {
        if (resources.employees[j].raise === true) {
            let increaseSalary = resources.employees[j]['salary'] * 1.1
            resources.employees[j]['salary'] = increaseSalary
            resources.employees[j]['raise'] = false
        }  
    }
}

console.log(company.employees)


// let test1 = resources.employees[0].salary 
// let newsalary = test1 * 1.1
// resources.employees[0].salary = newsalary 
// console.log(resources.employees[0].salary)

// console.log(resources.employees[0].raise)
// resources.employees[0].raise = false
// console.log(resources.employees[0].raise)