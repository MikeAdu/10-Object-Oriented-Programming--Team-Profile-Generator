const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
    }
    getRole() {
        return "Manager"
    }
    getGitHub() {
        return this.officeNumber
    }
}

module.exports = Manager; 