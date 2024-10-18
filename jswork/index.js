//Basics of JavaScript

// console.log("Hello");
// const a=12;
// console.log("a = " + a)
// if(a>10){
//     let a=30;
//     console.log("Hi",a);
// }
// console.log("Hello",a);

// let a = '12';
// let b = 12;
// let sim = Symbol('122')
// let today = Date();
// console.log(typeof today);
// console.log(today);

// let a = 12;
// let b = '12'
// if(a==b){
//     console.log("a==b is true");
// }
// else{
//     console.log("a==b is false");
// }

// if(a===b){
//     console.log("a===b is true");
// }
// else{
//     console.log("a===b is false");
// }

// function hi(str = "Hello"){  // function will pass this default parameter if no argument is passed when function is called.
//     console.log("Hi function calling : " + str);
// }
// hi("Full Stack");

// let d = function hi(str = "Hello"){
//     console.log("Hi function calling : " + str);
// }
// d("Full Stack");

// function sum(a,b,c=50){
//     return a+b+c;
// }
// let total = sum(3,4,100);
// console.log("Total = " + total);

// function cCompiler(){
//     return 'C compiler selected';
// }
// function javaCompiler(){
//     return 'Java compiler selected';
// }
// function selectLanguage(clbk){
//     console.log("Hi, " + clbk);
//     // console.log("Hi, " + clbk());
// }
// selectLanguage(javaCompiler());
// selectLanguage(javaCompiler);

// function selectLanguage(lang){
//     let choice;
//     if(lang == 'C'){
//         function cCompiler(){
//             return 'C compiler selected';
//         }
//         choice = cCompiler();
//     }
//     else if(lang == 'Java'){
//         function javaCompiler(){
//             return 'Java compiler selected';
//         }
//         choice = javaCompiler();
//     }
//     return choice;
// }
// console.log(selectLanguage('Java'));

console.log("Hello, JS");
console.dir(document);
let parent = document.getElementsByClassName("parent");
console.dir(parent);
console.log(parent[0]);
parent[0].innerText = "Hello, Full Stack";