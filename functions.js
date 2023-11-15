// prog to add a num
function add(a,b,c)
{
    console.log(a+b+c)
}
add(1,2,3);

//prog to check the even number
function checkEven(){
    let n=Number(prompt("enter a number"));
    if(n%2===0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}
checkEven();

//prog to print table
function table(){
    let n = Number(prompt("enter any table"))
    for(let i=1;i<=10;i=i+1){
        let r =n*i
        result=""+n+"*"+i+"="+r
        console.log(result)
        result=""
    }
}
table()

//prog to print even number upto 50
function evennumber(){
    for(i=2;i<50;i=i+2){
        console.log(i)
    }
}
evennumber();

//prog to print reverse numbers
function reverse(){
    for(i=5;i>=1;i=i-1){
        console.log(i)
    }
    }
reverse()

//prog to print palindrome

function ispalindrome(text){
    return text == text.split( '').reverse().join('');
}
console.log(ispalindrome('hello'));
console.log(ispalindrome('wow'));


    

