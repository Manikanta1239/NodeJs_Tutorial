class Dept{
    constructor(name) {
        this._name = name;
    }
    GetDeptName(){
        console.log(`${this._name} is the Department Name`)
    }
}
// var dt = new Dept('CSE-DS');
// dt.GetDeptName();

class Emp extends Dept{
    constructor(name, firstname, lastname) {
        super(name);
        this.firstname = firstname;
        this.lastname = lastname;
    }
    GetFirstName(){
        console.log(`${this.firstname} is the first name`);
    }
    GetLastName() {
        console.log(`${this.lastname} is the last name`);
    }
}

var emply = new Emp('CSE-DS', 'Singanaboina', 'Manikanta');
emply.GetDeptName();
emply.GetFirstName();
emply.GetLastName();