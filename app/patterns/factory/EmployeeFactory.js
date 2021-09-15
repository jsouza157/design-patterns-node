const Employee = require('./Employee.js');
/**
 * This class encapsule the Employee class
 * Doing an easy maintence without instance the class Emplyee in another class.
 * Protecting against bugs
 * Close Employee class to extenions
 */
class EmployeeFactory {
    constructor() {
        this.employee = new Employee;
    }
    createEmployee(type, name) {
        switch(type)
        {
            case 'developer' :
               this.employee.createDeveloper(name);
               break;
            case 'designer' :
                this.employee.createDesigner(name);
                break;
            default :
                console.log('Type not exists');
        }
    }
}

module.exports = EmployeeFactory;