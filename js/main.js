//spread operater 7lt mo4klt el shallow copy
//(...to any refrence)


// let allages =[10,20,30,33,44,22];
// let newarray= [...allages];
// newarray.push(90);
// console.log(newarray); //[]+90
// console.log(allages);  //[]only


// let user ={
    // name : 'salma',
    // age : 22,
    // salary :90000,
// }
// let newobj = {...user};
// newobj.name = "ahmed";
// // console.log(newobj);
// console.log(user);

// let obj ={
//     name : 'salma',
//     age : 22,
//     salary :90000,
//     husbund : {
//         name :'ahmed'
//     }
// }
//solution of deep copy
// let newobj = JSON.parse(JSON.stringify(obj));  //nos5a gdeda monfslaa 3n obj
// console.log(newobj);

// function getSum(...array){  //(...)call rest params in func
//     let sum = 0;
//     for (const number of array) {
//         sum += number
//     }
//     console.log(sum);
// }
// getSum(20 , 30 ,50)



//METHODS=>//////////////MAP ///////FILTER //////////REDUCE//////  
//filter
// let ages =[10,30,40,48,50,60];
// // let adults = ages.filter(function(age){return age > 40});

// let adults = ages.filter( age => age > 40 ); //converted to arrow func
// console.log(...adults);

///map  // bt3yer f shaklohm shaph el for loop
// let ages =[10,30,40,48,50,60];

// let adults = ages.map(age => age + 10)
// console.log(adults);

//reduce bt3ml 3mlya hesapya
// let ages =[10,30,40,48,50,60];
// let sums = ages.reduce((age , sum ) => age + sum ) //sum shayel awl qemaa f el array [10]
// console.log(sums);



//SETTTTTTT METHOD  (not repeattttttt)
// let prices = [10,20,30,40,40,20,10];
// let unique = Array.from(new Set(prices));
// console.log(unique);


///MAPPPP
// let person = new Map();
// person.set('name' , 'ahmed');
// person.set('age' , 22)
// person.set('gender' , 'male')
// person.set('salar' , 80000)
// ///loop of map object
// for (const [x ,y] of person) {  //const hyt8er f run time
//     console.log(x);
// }

////how to turn el object to map

// let obj ={
//     name : 'salma',
//     age : 22,
//     salary :90000,
// }
// let person = new Map(Object.entries(obj))
// console.log(person);

//////////////////////////////OOP/////////////////////
// oop => object oreiented programing   //it,s a cocept or technique
// simulate reality
// oop based in 2 types 1- class-based 2- proto-type based 
// JS => is proto-type based
// any obj has a property called prototype


//prototypel inhertance

// let humen ={
//     address : 'cairo',
//     isalive : function(){
//         console.log("breath");
//     }
// }
// let user = {
//     name : 'ahmed',
//     age : 23 ,
// }
// humen.__proto__= user;
//another way 
// Object.setPrototypeOf(humen , user)
// console.log(humen);


// var x = {};
// x.name = "ahmed";
// console.log(x.name);