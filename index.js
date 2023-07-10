const employee = {
    name : "kelvin",
};

function updateEmployeeWithKeyAndValue(obj,key,value){
    return {...employee,
    [key] : value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value);

function deleteFromEmployeeByKey(obj,key){
    const newOne = {...employee};
    delete newOne[key];
    return newOne;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}