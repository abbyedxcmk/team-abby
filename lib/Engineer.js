// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

const engineer = new Engineer('Donald', 01, 'makeusagr8again@done.com', 'abbyedxcmk');
console.log(engineer.getName(),engineer.getId(),engineer.getEmail(), engineer.getRole(), engineer.getGithub());

module.exports = Engineer;