

// 1st task 
let num = prompt( "enter a number")

if(num<50){
    alert(parseInt (num/3))
} 
 else if(num<100) {
    alert( parseInt (num/5))
} 
else {
    alert(parseInt(num/8))
} 




// 2nd task

let number=  parseInt(prompt ("enter the number"))
remainder(number)
function remainder(number) { 
    if(number%7==0){
        alert("number is divisible by")
    } 
    else { 
        let remainder =number%7
        if(remainder>3) {
                    alert(7-remainder+number)
    
        } 
    
        else  {
            alert(number-remainder)
        }
    } 

} 


