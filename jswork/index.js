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

// console.log("Hello, JS");
// console.dir(document);
let parent = document.getElementsByClassName("parent");
// console.log(parent[0]);
// parent[0].innerHTML = "<h2 style = 'color:red' >Hello, Full Stack</h2>";



// // creating an element ----------------------------------
// const h1=document.createElement("h1");
// h1.innerText="elememnt is created by dom function ";
// parent[0].appendChild(h1);

// // styling an element -----------------------------------
// h1.style.color="blue";
// console.log(h1);

// // adding image
// const img=document.createElement('img');
// img.src='hippo.png';
// console.log(img);
// parent[0].appendChild(img);
// img.setAttribute("height",'200')

// console.log(parent);


// // funtion -------------------

// const button= document.getElementById("btn");
// const display= document.getElementById("disp");
// function getData()
// {
//     console.log("calling get data");
//     display.innerText="welcome to CSE department";

// }
// button.addEventListener("click",getData)   // event listener------------------------


// promises -----------------------------------------

const promise1= new Promise( (resolve,reject)=>{
    let a=Math.random();
    a=parseInt(a*1000);
    if(a>=100 && a<200)
    {
        resolve("vale is accepted "+ a);
    }
    else
    {
        reject("value is rejected " +a);

    }

});

promise1.then((msg)=> {console.log(msg)})
.catch(error=>{console.log(error)})
.finally(msg=>{console.log("All resources have been closed")});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const promise2=new Promise(
    (resolve,reject)=>
    {
        resolve({name:'Asmit',branch:"CSE"});
    }
);
promise2.then((data)=> {console.log(data)})
.catch(error=>{console.log(error)});



let a=[];

// Fetch Api---------------------------------------------------------------------------------

const response=fetch("https://dummyjson.com/products");


response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        for(let i=0; i<res.products.length; i++)
        {
            a.push(res.products[i].title);
        }
    });
})
const disp=document.getElementById("disp");
for(let i=0; i<a.length; i++)
{
    const ele =document.createElement("h1")
    ele.innerText=a[i];
    parent[0].innerHTML+=ele
}



