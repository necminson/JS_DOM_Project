// is Even function should be called ONLY WHEN USER CLICKS ON Check Number button 
function isEven(){
    /*
    we have some document methods that we must use to get the elements
    For example querySelector , getElementById(id), getElementByClass(class) ;
   document.getElementById("input-box"); -> returns the matching element whose is "input-box" 
    */
    
//const num=10;
const targetElement= document.getElementById('input-box')
console.log(`Target : ${targetElement}`)
const num = document.getElementById('input-box').value;
console.log(`Number : ${num}`)

if(num==''){
    alert(' please enter an integer number to check')
   }
if(num%2===0 &&num!=='' ){
 alert(num +' is even')
}
if(num%2===1){
 alert(num +' is odd')
}
if(num%2!==0 && num%2!==1){
 alert(num +' is not an integer')
}


}