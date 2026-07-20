//  var name = "jack";
//         var age = 23 ;

//         var message = " my name is "+ name +" and i am " + age + "years old";

//         //alert(message)
//         console.log(message);

// var firstname = "jon";
// var lastname = "smith";
// var dateofbirth = "2006"
// var age = 23;
// var profilrimageurl = "coolpicks.com"
// var loginwelcomemessage = "welcome , " + firstname + " happy " + age +"birthday"

// console.log(loginwelcomemessage);

// var sum = 15 + 10;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 9 / 3;
// var mod = 10 % 3;

// var msg = "10/3 = 3 with remainder of  " + mod;

// var result = 10 * ((5 + 3 ) - 4);
// console.log(result);

// var myaccmoney = 300;
// var shoes = 799.23;
// var coupon = 500;


// if (shoes <= myaccmoney){
//     myaccmoney -= shoes;
//     console.log("i got da shoes");
//     console.log("new balance " + myaccmoney);
    
// }else if(shoes - coupon <= myaccmoney) {
//     myaccmoney -= shoes - coupon;
//     console.log("i got da shoes with coupon");
//     console.log("new balance " + myaccmoney);

// }

// else{
//     console.log("you boke get a job");

// }


// var students = ["timmy", "janesha", "arun"];
// var naughtylist = [];

// var naughtylist = [];

// naughtylist.push(students[0]);

// var index = naughtylist.indexOf("timmy");

// // var index2 = students.indexOf("arun");

// console.log(naughtylist)


// if(index > -1 ){
//     naughtylist.splice( index, 1);

// }

// console.log(naughtylist);


// var total = 10


// for ( var x = 0 ; x < total; x++){
//      //interate until told not to
//     console.log(x);
// }

// var students = [ "john", "ram", "jaw", "oaoi","smith"];

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }

//var length1 = 15;
//var width1 =10;
//var area1 = length1 * width1;

//var lenght2 = 12;
//var width2 = 14;
//var area2 = lenght2 * width2;


//console.log(area1);
//console.log(area2);

// function area(length, width) {
// return length * width;

// var area1 = area(10,15);
// console.log(area1);
  
// function area(length, width) {
// return length * width;

// }

// var rectanglesAreas = []
// rectanglesAreas.push(area(10,15));
// rectanglesAreas.push(area(14,2));
// rectanglesAreas.push(area(4,5));

// console. log(rectanglesAreas) ;


// var bankBalance = 500;
// function makeTransaction(priceOfSale) {

//     if( priceOfSale <= bankBalance){
//         bankBalance -= priceOfSale;
//         console.log("purchase successful")
        
//     } else {
//         console.log(" No money")
//     }

// }

// console.log(bankBalance);
// makeTransaction (79.00);

// console.log(bankBalance);
// makeTransaction (2.32);

// console.log(bankBalance);
// makeTransaction (10.45);

// console.log(bankBalance);
// makeTransaction (450.00);

// var transaction = function(priceOfSale){
//     if( priceOfSale <= bankBalance){
//         bankBalance -= priceOfSale;
//         console.log("purchase successful")
        
//     } else {
//         console.log(" No money")
//     }
// }

// transaction(10);

// var student = {
//     firstName: "peter",
//     lastName: "Parker",
//     age: 7
// };

// function student(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age; 
// }



// var student0 = {
//     firstName: "jay",
//     lastName: "jii",
//     age: 6,
//     greeting: function () {
//         return "Hi I am " + this.firstName + " and I am " + this.age + " years old.";
//     }
// };

// console.log(student0.greeting());

// // Creates a new empty object


// var student1 = new Object();
// student1.firstName = "peter";
// student1.lastName = "parker";
// student1.age = 7;

// var student2 = new Object();
// student2.firstName = "zack";
// student2.lastName = "pepe";
// student2.age = 6;

// var students = [];

// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }

// console.log(student.firstName);
// console. log(student. lastName);
// console.log(student["firstName"]);
// console. log(student["LastName"]);




// var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

// for (var index = 0; index < students.length; index++) {
// console.log(students[index]);

// }

// var students = [];

// function student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;

//     this.greeting = function () {
//         return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//     };
// }

// students.push(new student("jenny", "laga", 5));
// students.push(new student("timmy", "turner", 8));
// students.push(new student("carl", "jr", 4));

// var student = students[0];

// for (var key in student) {
//     console.log(student[key]);
// }

// for (var index = 0; index < students.length; index++) {
//     var currentStudent = students[index];
//     console.log(currentStudent.greeting());
// }

// var s1 = new student("jenny", "laga", 5);

// console.log(s1);
// console.log(s1.greeting());


