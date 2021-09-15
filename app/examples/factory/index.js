const EmployeeFactory = require('../../patterns/factory/EmployeeFactory.js');
const Employee = require('../../patterns/factory/Employee.js');
/**
 * Class that use a factory to create
 */
class FactoryPattern {
    constructor() {
        this.employeeFactory = new EmployeeFactory;
    }

    createEmployee(type, name) {
        this.employeeFactory.createEmployee(type, name);
    }
}
module.exports = FactoryPattern;

const factoryPattern = new FactoryPattern();
factoryPattern.createEmployee('developer', 'Jefferson Souza');


/**
 * Class that not use a factory to create
 * More code, open extension of Employee class, hard maintence.
 */
class WithOutFactoryPattern {
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
module.exports = WithOutFactoryPattern;

const withOutFactoryPattern = new WithOutFactoryPattern;
withOutFactoryPattern.createEmployee('designer', 'Ana Stuckzy');
