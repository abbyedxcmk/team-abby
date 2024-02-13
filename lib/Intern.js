// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

// const intern = new Intern('Donald', 01, 'makeusagr8again@done.com', 'Eton');
// console.log(intern.getName(),intern.getId(),intern.getEmail(), intern.getRole(), intern.getSchool());

module.exports = Intern;