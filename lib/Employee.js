// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// const employee = new Employee('Donald', 01, 'makeusagr8again@done.com');
// console.log(employee.getName(),employee.getId(),employee.getEmail(), employee.getRole());

module.exports = Employee;