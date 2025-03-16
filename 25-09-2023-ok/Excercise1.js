class Department {
    constructor(name){
        this.name = name;
    }
    GetDeptName(){
        console.log(`${this.name} is the Department name`);
    }
}

// var dpt = new Department('CSE-DS');
// dpt.GetDeptName();

class Employee extends Department {
    constructor(name,firstName,lastName){
        super(name);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    GetFirstName() {
        console.log(`Employee's First Name is ${this.firstName}`);
    }
    GetLastName() {
        console.log(`Employee's Last Name is ${this.lastName}`);
    }
}

var emp = new Employee('CSE-DS','Singanaboina','Manikanta');
emp.GetDeptName();
emp.GetFirstName();
emp.GetLastName();