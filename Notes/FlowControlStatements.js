/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */

// if(false){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")



/*
if else Statement: used when execution of one Statement Block
                   out of two blocks depend on a 
                   condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */

// var age = parseInt(prompt("Enter the Number : "))
// if(age>=18)
// document.write("Person Can Vote")
// else
// document.write("Person Can't Vote")

/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */

// var a = parseInt(prompt("Enter the First Number : "))
// var b = parseInt(prompt("Enter the Second Number : "))
// var c = parseInt(prompt("Enter the Third Number : "))
// if(a>b){
//     if(a>c)
//     document.write(`${a} is Greatest`)
//     else
//     document.write(`${c} is Greatest`)
// }
// else{
//     if(b>c)
//     document.write(`${b} is Greatest`)
//     else
//     document.write(`${c} is Greatest`)
// }

// var year = parseInt(prompt("Enter the Number : "))
// if(year%100==0){
//     if(year%400==0)
//     document.write(`${year} is a Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }
// else{
//     if(year%4==0)
//     document.write(`${year} is a Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }

// var year = parseInt(prompt("Enter the Number : "))
// if(year%400==0)
// document.write(`${year} is a Leap Year`)
// else if(year%4==0 && year%100!=0)
// document.write(`${year} is a Leap Year`)
// else
// document.write(`${year} is not a Leap Year`)


// var year = parseInt(prompt("Enter the Number : "))
// if(year%400==0 || (year%4==0 && year%100!=0))
// document.write(`${year} is a Leap Year`)
// else
// document.write(`${year} is not a Leap Year`)

// var ch = prompt("Enter the Character :  ")
// if(ch.length==1){
//     if(ch>='a' && ch<='z'){
//         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//         document.write(`'${ch}' is Lower Case Vowel`)
//         else
//         document.write(`'${ch}' is Lower Case Consonant`)
//     }
//     else if(ch>='A' && ch<='Z'){
//         if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
//         document.write(`'${ch}' is Upper Case Vowel`)
//         else
//         document.write(`'${ch}' is Upper Case Consonant`)
//     }
//     else if(ch>='0' && ch<='9')
//     document.write(`'${ch}' is a Digit`)
//     else if(ch==' ')
//     document.write(`Space`)
//     else
//     document.write(`'${ch}' is a Special Character`)
// }
// else
// document.write(`'${ch}' is Invalid`)

/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */

// var day = parseInt(prompt("Enter the Day Number : "))
// if(day==1)
// document.write("Monday")
// else if(day==2)
// document.write("Tuesday")
// else if(day==3)
// document.write("Wednesday")
// else if(day==4)
// document.write("Thursday")
// else if(day==5)
// document.write("Friday")
// else if(day==6)
// document.write("Saturday")
// else if(day==7)
// document.write("Sunday")
// else
// document.write("Invalid Choice")




/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(expression){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */

// var a = Number(prompt("Enter the First Number :  "))
// var b = Number(prompt("Enter the Second Number :  "))
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Mulitplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
// switch (ch) {
//     case '+':
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case '-':
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case '*':
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case '/':
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case '%':
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case '**':
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write(`Invalid Choice`)
// }



/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation)
    {
        -----------
        -----------
        number of statements
        -----------
        -----------
    }

 */

// for(var i=1;i<=10;i++){
//     console.log(`Hello World ${i}`)
// }

// for(var i=10;i>=1;i--){
//     console.log(`Hello World ${i}`)
// }

// for(var i=10;i;i--){
//     console.log(`Hello World ${i}`)
// }

// for(var i=1;i<=10;i++);
// {
//     console.log(`Hello World ${i}`)
// }

// var i=1
// for(;;)         //dummy loop
// {
//     if(i>10)
//     break
//     console.log(`Hello World ${i}`)
//     i++
// }

// var num = parseInt(prompt("Enter the Number : "))
// var sum = 0
// for(let i=1;i<=num/2;i++){
//     if(num%i==0){
//         sum = sum+i
//     }
// }
// if(sum==num)
// document.write(`${num} is Perfect Number`)
// else
// document.write(`${num} is not a Perfect Number`)


/*
num=28
i           =1      2       3   4       5   6   7       8   9   10  11  12  13  14          15(loop end)
num%i==0    =T      T       F   T       F   F   T       F   F   F   F   F   F   T
sum = 0     =0+1=1  1+2=3       3+4=7           7+7=14                          14+14=28
*/




/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */

// var start = parseInt(prompt("Enter the Range Start From : "))
// var end = parseInt(prompt("End : "))
// var even = 0
// var odd = 0
// for(let i=start;i<=end;i++){
//     if(i%2==0)
//     even = even+i
//     else
//     odd=odd+i
// }
// document.write(`sum of Even Number = ${even}`)
// document.write(`<br>sum of Odd Number = ${odd}`)

// var num = parseInt(prompt("Enter the Number : "))
// var sum = 0
// for(let i=1;i<=num/2;i++){
//     if(num%i==0)
//     sum = sum + i
// }
// if(sum==num)
// document.write(`${num} is Perfect Number`)
// else
// document.write(`${num} is not a Perfect Number`)



/*
start   =1
end     =10
i       =1      2       3       4       5       ...
even    =       0+2=2           2+4=6           ...
odd     =0+1=1          1+3=4           4+5=9   ...
 */


// var num = parseInt(prompt("Enter the Number : "))
// var count = 0
// for(let i=2;i<=num**0.5;i++){
//     if(num%i==0){
//         count++
//         break
//     }
// }
// if(count==0 && num>=2)
// document.write(`${num} is Prime`)
// else
// document.write(`${num} is not Prime`)


/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition)
    {
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
*/

// var i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }


// var a = 0
// var b = 1
// var sum = a+b
// var num = parseInt(prompt("Enter the Last Term Range of Febonacci Series: "))
// document.write(`${a} ${b} `)
// while(sum<=num){
//     document.write(`${sum} `)
//     a=b
//     b=sum
//     sum=a+b
// }


/*
num = 100
a       =0  1   1   2   3   5   8   13  21  34  55
b       =1  1   2   3   5   8   13  21  34  55  89
sum     =1  2   3   5   8   13  21  34  55  89  144
op:0 1  1   2   3   5   8   13  21  34  55  89  
*/

// var num = parseInt(prompt("Enter the Number : "))
// var sum = 0
// while(num!=0){      //1572      157     15      1       0
//     var r = num%10  //2         7       5       1
//     sum = sum+r     //0+2=2     2+7=9   9+5=14  14+1=15
//     num = parseInt(num/10)//157 15      1       0
// }
// document.write(`sum of Digits = ${sum}`)


/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
 */

// var num = parseInt(prompt("Enter the Number : "))
// var sum = 0
// var n = num
// while(num!=0){          //407       40           4              0
//     var r = num%10      //7         0            4
//     sum = sum+r**3      //0+343=343 343+0**3=343 343+4**3=407
//     num = parseInt(num/10)  //40      4            0
// }
// if(n==sum)
// document.write(`${n} is Armstrong Number`)
// else
// document.write(`${n} is not an Armstrong Number`)



// var num = parseInt(prompt("Enter the Number : "))
// var rev = 0
// var n = num
// while(num!=0){          //121       12          1           0
//     var r = num%10      //1         2           1
//     rev = rev*10+r      //0*10+1=1  1*10+2=12   12*10+1=121
//     num = parseInt(num/10)//12      1           0
// }
// if(n==rev)
// document.write(`${n} is a Palindrome Number`)
// else
// document.write(`${n} is not a Palindrome Number`)


// var num = parseInt(prompt("Enter the Number : "))
// var sum = 0 
// var rev = 0
// var n = num
// while(num!=0){          //1729  172     17      1       0
//     let r = num%10      //9     2       7       1
//     sum = sum + r       //0+9=9 9+2=11  11+7=18 18+1=19
//     num = parseInt(num/10)//172 17      1       0
// }
// num = sum               //19
// while(num!=0){          //19        1           0
//     let r = num%10      //9         1
//     rev = rev*10+r      //0*10+9=9  9*10+1=91
//     num = parseInt(num/10)//1       0
// }
// if(sum*rev == n)
// document.write(`${n} is a Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)


/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
*/

// var i = 100
// do{
//     console.log(`${i} Hello World`)
//     i++
// }while(i<=10)

// do {
//     var a = parseInt(prompt("Enter the First Number : "))
//     var b = parseInt(prompt("Enter the Second Number : "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multipkication\nPress % for Remainder\nPress / for Division\nPress ** for Power\nEnter Your Choice : ")
//     switch (ch) {
//         case '+':
//             console.log(`${a} + ${b} = ${a + b}`)
//             break
//         case '-':
//             console.log(`${a} - ${b} = ${a - b}`)
//             break
//         case '*':
//             console.log(`${a} * ${b} = ${a * b}`)
//             break
//         case '/':
//             console.log(`${a} / ${b} = ${a / b}`)
//             break
//         case '%':
//             console.log(`${a} % ${b} = ${a % b}`)
//             break
//         case '**':
//             console.log(`${a} ** ${b} = ${a ** b}`)
//             break
//         default:
//             console.log("Invalid Choice")
//     }
//     ch = prompt("Press n to Exit\nPress any Other Key to Continue : ")
// }while(ch!='n')

    

/*
Nested loops:
Loops within Loops:
 */

// for(var num=1;num<=20;num++){
//     document.write(`Table of ${num} is<br>`)
//     for(var i=1;i<=10;i++){
//         document.write(`${num} * ${i} =  ${num*i}<br>`)
//     }
// }


// var start = parseInt(prompt("Enter the Range Start From : "))
// var end = parseInt(prompt("End : "))
// var count = 0
// for(var num=start;num<=end;num++){
//     var flag = false
//     for(var i=2;i<=num**0.5;i++){
//         if(num%i==0){
//             flag = true
//             break
//         }
//     }
//     if(flag==false && num>=2){
//        count++
//        document.write(`${num} `) 
//     }
// }
// document.write(`<br>Total Prime Numbers = ${count}`)


//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)


/*
Pattern
******
******
******
******
******


*
**
***
****
*****
******


 */
for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}

// var x = 1
// for(var i=1;i<=5;i++){
//     for(var j=1;j<=5;j++){
//         document.write(x++)
//     }
//     document.write("<br>")
// }



// for(var i=1;i<=25;i++){
//     if(i%5==0)
//     document.write(`${i}<br>`)
//     else
//     document.write(i)
// }


// for(var i=1;i<=25;i=i+5){
//     for(var j=i;j<=i+4;j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }


// for(var i=1;i<=5;i++){
//     for(var j=1;j<=5;j++){
//         if(j%2==0)
//         document.write("0")
//         else
//         document.write("1")
//     }
//     document.write("<br>")
// }


// for(var i=1;i<=5;i++){
//     for(var j=1;j<=5;j++){
//         document.write(j%2)
//     }
//     document.write("<br>")
// }
