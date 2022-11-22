// Write your solution in this file!

const employee = {};


const updateEmployeeWithKeyAndValue= (employee, key ,value) =>  {
    var object1 = Object.assign ( {}, employee , { [key]: value} );
    return object1;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee [key] = value;
    return employee
}

const deleteFromEmployeeByKey = ( employee, key, value) => {
    const object2 = {...employee}
    delete object2[key];
    return object2
}

const destructivelyDeleteFromEmployeeByKey = (employee, key,) => {

    delete employee[key];
    return employee;

}