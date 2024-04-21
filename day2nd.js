// Provide an example of array destructuring and object Desturcturing in JavaScript
const arr = [1,'M', "Pranav", 30000.0];
const [sirNo, gender, name, salary] = arr;
console.log(sirNo+ " Name: "+ name + " Salary: "+salary);
//Object Desturcturing.
const emp= {
    empSirNo: 1,
    empName : "Pranav",
    empGender : 'M',
    empSalary : 40000.00,

}
const {empSirNo , empName, empGender, empSalary} = emp;
console.log(empName);

// create a class named Emp with following attribute name, id, Salary and displyInfo method.

class Emp{
    name; 
    id;
    salary;
    constructor(name,id,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        
    }

}
const displayInfo = new Emp("Pranav", 1, 70000.00);
console.log(displayInfo);

// // Create a function that returns a Promise. Chain multiple .then() calls to handle the resolved value and demonstrate how to handle errors using .catch().
function test(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            console.log("Accepted...!");            
        } else {
            console.log("Rejected...!");
        }
    });
    
}
// test(false);
const p = test(true);

p.then((demo)=>{
    console.log(demo + " Done");
}).then((demo)=>{
    console.log(demo + " 2nd Done");
}).catch((err)=>{
    console.log(err+" Error");
});


// Demonstrate Async/await

const aa = test(false);
async function fetchData() {
    const data = await aa;
    if (data) {
        console.log(data);
    } else {
        console.log("error");
    }
    
}
fetchData();

// Show use of try Catch Finally.

try{
    const pi = 3.14;
    pi = 2;

}catch(error){
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Done");
}