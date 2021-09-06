/* 
1. show output afer 3.5 seconds
2.take a number using promt. add 200. then alert the result
3.do you want to see the href. if ok.console log href.
4.puepose of  cookies.write 5-7 lines. in english.
5.3 different between local storage vs session storage.

/////////////////////////////////////
Homw work
6.how js run?5-7 lines in english.
7.list of things that are asynchronous in js/browser
8.what is event loop in js as how does it work

optional
9.simple website with two input fields and a button.product name,product r price by clicking on the button product will be added to the local storage.you should be able to add multiple.
10.display products on the website if they exits on the storage display from there.

//must
1.stack overflow, create an account.spend 30 minutes.
*/



//Answer
//1
/* let num = 0;
const numId = setInterval(() =>{
   num++;
//    console.log(num)
},3500
) */

//2
const askName = () =>{
    const name = prompt(200)
    if(name === 200){
     console.log(name)
    }
    else{
        alert(name)
    }
 }

 //3
 const goAnywhere = () =>{
    let location1 =   location.assign(`https://www.messenger.com/t/100003322230951`)
     if(location1 ===  goAnywhere){
         console.log(location1,'Welcome')
     }
 }
