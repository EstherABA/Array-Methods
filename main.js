//ex2
//1
const z = [1,2,3,4,5]
const dubble = z.map((num) => `${num} ${num}` );
console.log(dubble);
//2
const ages = [22,34,56,12];
const agesToString = ages.map ((age)=> age.toString());
console.log(agesToString);
//3
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];
    
let employeesName = employees.map((objName) => objName.name)
console.log(employeesName); // ['John', 'Jane', 'Bob']

const toApper = (arrOfString) => {
    let splitStr = arrOfString.map((name)=> name.toUpperCase());
    return splitStr
}

console.log(toApper(employeesName)); //['JOHN', 'JANE', 'BOB']
//4
const arrOfNum = [2,4,6,8]
const arrMultiplyIndex = arrOfNum.map ( (num,index) => num*index );
console.log(arrMultiplyIndex);
///ex3
//1
const arrOfNumber = [11,22,33,44]
let sum = 0
arrOfNumber.forEach(num => {
    sum += num
    return sum
})
console.log(sum);
//2 A
const arrD = [1,2,3]
const doubleValues = ((arrOfNumber) => {
        let newArrD = []
        arrOfNumber.forEach(num=> {
        newArrD.push(num*2)
        })
    return newArrD })
console.log(doubleValues(arrD));
//3 A
const arrOfStr = ['happy', 'new', 'joy']
let a =[]
arrOfStr.forEach (string => {
    console.log(string);
    a.push(string.replace(/[euioa]/g , "X"))
        return a 
    })
console.log(a);

//4 A
const employeesA = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];
 

const checkAge = (() => {
    employeesA.forEach ((employee,index) => {
    if (employee.age < 20 ) {
        console.log("The person at index" +  index + " " + "is too young"); 
    }
})
})
console.log(checkAge(employeesA), "checkAge");
//4 B
const updateEmployees = (() => {
    employeesA.forEach ((employee) => {
    if (employee.age > 25 ) {
        employee["isAdult"] = true;
        }
    })
    return employeesA
})

console.log(updateEmployees());

//ex3
//1
const array1 = [5, 12, 8, 130, 44]
let ab = []
const bigger10 = array1.find(num => num>10)
console.log(bigger10);
//2
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]
//a
const findStudent = students.find(student => student.name=='Alice')
console.log(findStudent); 
//b
const olderThan23 = students.find(student=> student.age>23)
console.log(olderThan23);  

//ex4
const input = [1,-4,12,0,-3,29,-150]
const Positive = input.reduce((accumulator,current) => {
    if (accumulator>0 & current >0 ) {
        console.log(current + accumulator , "current + accumulator ");
        return current + accumulator  
    }
    else if (accumulator<=0){
        return current
    }
    else if (current<=0){
        return accumulator
    }

});
console.log(Positive);
//2
const calcFactorial = (num) => {
    if (num >0){
        let list = []
        for (let i = 1 ; i <= num ; i++) {
            list.push(i);
        }
        
    let factorial = list.reduce((nim1,nim2)=> nim2*nim1)
    return factorial
    }

}

console.log("factorial:", calcFactorial(6));