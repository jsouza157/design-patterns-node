/**
 * Class to generate employee
 */
class Employee {
    createDeveloper(name) {
        console.log(`Hi, i am a ${name} and i am a Developer`);
    }

    createDesigner(name) {
        console.log(`Hi, i am a ${name} and i am a Designer`);
    }
}

module.exports = Employee;