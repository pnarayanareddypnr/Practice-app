// var name1=" Narayana ";
// var name2 = 'paramesh';
// var name3 = 'viswa';

// var age1 = 25;
// var age2 = 16;
// var age3 = 18;

var student1 = {
    name: " Narayana ",
    age: 25,
    address: 'bilkalaakskdas'
}
var student2 = {
    name: " Parmesh ",
    age: 16,
    address: 'vizg'
}
var student3 = {
    name: " viswa ",
    age: 18,
    address: 'Ndl'
}

var students = [student1, student2, student3];
// var studnets = [0,1,2]

// students[0].age
// var voters = 0;
// if(students[0].age >= 18){
//     voters = voters + 1
// }
// if(students[1].age >= 18){
//     voters = voters + 1
// }
// if(students[2].age >= 18){
//     voters = voters + 1
// }
//console.log(students.length);

var voters = 0;
for (var i = 0; i < students.length; i++) {

    if (students[i].age >= 18) {
        voters = voters + 1;
    }
}





console.log(voters);


// console.log(a);
// console.log(a);
// console.log(b);
// console.log(a);

var pensions = 0;
var  middeage = 0;
var adults = 0;
var child  = 0;

if(age > 60) {

    //////
}else if(age > 40 && age < 60) {

    /////

}else if(age > 18 && age <= 40) {
    //////  

}else {

}

for(var i=0;i<buses.length;i++){
   
}


var marks = [96,50,86,15,34,7,35,25,100];

var d90 = 0;
var f70 = 0;
var s50 = 0;
var t35 = 0;
var fail = 0;

for (var i = 0; i < digits.length; i++) {
    if(d>90){

    }else if(d<90){
    
}
console.log("THis count of d90 is", g10);
console.log("THis count of f70 is ",les10);







var marks = [96, 50, 86, 15, 34, 7, 35, 25, 100];

var d90 = 0;
var f70 = 0;
var s50 = 0;
var t30 = 0;
var fail = 0;

for (var i = 0; i < marks.length; i++) {
    console.log(marks)
    if (marks[i] > 90) {
        d90 = d90 + 1
    } else if (marks[i] > 90 && marks[i] < 70) {

    } else if (marks[i] > 70 && marks[i] < 50) {

    } else if (marks[i] > 50 && marks[i] < 35) {

    } else if (marks[i] < 35) {

    }




}



// function example() {
  
//   if (true) {
//       let x =10;
//           console.log(x); // 10
//      x = 'viswa';
//     console.log(x); // 10
//   }
// //   console.log(x); // 10
// }

// example()

// var person = {
//     name:'viswa',
//     age:30,
//     address : 'testad sadsadsandsadsabdsiadsa dsahd'
// }
// var person2 = {
//     name:'viswa',
//     age:30,
//     address : 'testad sadsadsandsadsabdsiadsa dsahd'
// }
// var person3 = {
//     name:'viswa',
//     age:30,
//     address : 'testad sadsadsandsadsabdsiadsa dsahd'
// }
// console.log([person,person2,person3]);


// var sum = 2-2;

// console.log(2 == 2);
// console.log(2 == '2');
// console.log(2 === '2');


// let day = new Date().getyear();
// console.log(day)
// let dayName;

// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(`Today is ${dayName}`);




var name  ='banana'
var name2 ='apple'
var name3 = 'sapota'
var fruits = [name,name3];

if(fruits[i] == 'banana' || fruits[i]=='apple')
{
    // 
}else {
    
}











// var fruites = ['Banana','Apple','sapota'];

// // console.log(fruites);

// fruites.push('Dragon');

// // console.log(fruites);

// fruites.push('WaterMelon');

//  console.log(fruites);

// var viswafruites = fruites.slice(2,4);

// fruites.pop();

// var viswafruites = fruites.splice(1,2,'oranges','');
//  console.log(viswafruites);
//   console.log(fruites);


// fruites.unshift('Lemon');

// console.log(fruites);

// fruites.shift();

// console.log(fruites);

//push //pop //unshift //shift

// const originalArray = [1, 2, 3, 4, 5];
// const deletedElements = originalArray.splice(1, 3);

// console.log(deletedElements); 
// console.log(originalArray); 


var firstName = 'narayana'
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cityville",
    zipCode: "12345"
  },
  fullName: function() {
    return this.firstName;
  }
};

console.log(person.fullName())

