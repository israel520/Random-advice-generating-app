let numbr=0; // initializing a variable called numbr 
let data;// declaring a var called data for later use to store the obj recieved from a server

let img=document.getElementById('img');// assining a variable for the dice img 
let quote=document.getElementById('quote');// assining a variable to the element where the quote will be displayed

let num=document.getElementById('num');// num is the id of a span element where the number incerement will be displayed

img.addEventListener('click',myFunction);// 
img.addEventListener('click',myFunction2);

function myFunction() {
    num.innerHTML=++numbr;// when clicked the number incremented wil be shown in the num element on out html page
}

function myFunction2(){
    const xttp=new XMLHttpRequest(); // creating the request object to interact with the external api 
    xttp.onload=function(){
        data=this.responseText;// storing the recieved file in string format
       data=JSON.parse(data).slip;// changing the json obj in to js object by using the parse method
        quote.innerHTML=`"${data.advice}"`;// accesing the data and displaying it on out page

    }
    xttp.open('GET','https://api.adviceslip.com/advice',true);// retriving a resource from the specified URL
    xttp.send();
}
