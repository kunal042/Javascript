/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Type: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */

console.log(15+6)       //21
console.log(15-6)       //9
console.log(15*6)       //90
console.log(15/6)       //2.5
console.log(15%6)       //3
console.log(15**2)      //225

console.log(10+20)   //20
console.log(10+"20")   // 1020
console.log(10+"Hello World") // 10Hello World


console.log(10-20) // -10
console.log(10-"20")  // -10
console.log("10"-"20") // -10
console.log(10-"Hello World")  //NaN

console.log(10-20)
console.log(10-"20")
console.log("10"-"20")
console.log(10-"Hello World")


console.log(10*20)  //200
console.log(10*"20")   //200
console.log("10"*"20")  //200
console.log(10*"Hello World")   //NaN


console.log(10/20)   //0.5
console.log(10/"20")  //0.5
console.log("10"/"20")   // 0.5
console.log(10/"Hello World")   // Nan

console.log(10%20)  //10
console.log(10%"20")   //10
console.log("10"%"20")  //10
console.log(10%"Hello World")   //NaN


console.log(10**2)   //100
console.log(10**"2")  //100
console.log("10"**"2")  //100
console.log(10**"Hello World")  //NaN

var a = 10*5%30*3/10*7%40*20/10*5-40/2*(3*5**2/15)+6**3
console.log(a)


/*
10*5%30*3/10*7%40*20/10*5-40/2*(3*5**2/15)+6**3
10*5%30*3/10*7%40*20/10*5-40/2*(3*25/15)+6**3
10*5%30*3/10*7%40*20/10*5-40/2*(75/15)+6**3
10*5%30*3/10*7%40*20/10*5-40/2*5+6**3
10*5%30*3/10*7%40*20/10*5-40/2*5+216
50%30*3/10*7%40*20/10*5-40/2*5+216
20*3/10*7%40*20/10*5-40/2*5+216
60/10*7%40*20/10*5-40/2*5+216
6*7%40*20/10*5-40/2*5+216
42%40*20/10*5-40/2*5+216
2*20/10*5-40/2*5+216
40/10*5-40/2*5+216
4*5-40/2*5+216
20-40/2*5+216
20-20*5+216
20-100+216
-80+216
136
 */



/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

type: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check value and data type both)
 */
console.log(10<20)
console.log(10<=20)
console.log(10>20)
console.log(10>=20)

console.log(10!=10) 
console.log(10!="10")
console.log(10!=10.0)
console.log(10!=20)

console.log(10!==10) 
console.log(10!=="10")
console.log(10!==10.0)
console.log(10!==20)

console.log(10==10)
console.log(10=="10")
console.log(10==20)

console.log(10===10)
console.log(10==="10")
console.log(10===20)


/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */
console.log(10 && 20)       //true  i.e 20
console.log(10 && 0)        //false  i.e 0
console.log(0 && 20)        //false  i.e 0
console.log(0 && 0)         //false  i.e 0


console.log(10 || 20)          //true  i.e 10
console.log(10 || 0)           //true  i.e 10
console.log(0 || 20)           //true  i.e 20
console.log(0 || 0)            //false  i.e 0


console.log(!10)                //false
console.log(!0)                 //true


/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */

var a = 85
var b = 67
var c = a&b
var d = a|b
var e = a^b
console.log(c,d,e)

/*
a=37        :   1   0   0   1   0   1
b=47        :   1   0   1   1   1   1
-----------------------------------------
c=a&b       :   1   0   0   1   0   1
                32  16  8   4   2   1
                ---------------------
                32  0   0   4   0   1=>37
-----------------------------------------
d=a|b       :   1   0   1   1   1   1
                32  16  8   4   2   1
                ---------------------
                32  0   8   4   2   1=>47
-----------------------------------------
e=a^b       :   0   0   1   0   1   0
                32  16  8   4   2   1
                ---------------------
                0   0   8   0   2   0=>10
*/  




/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
console.log(25<<5)
console.log(25<<6)
console.log(25<<7)
console.log(25<<10)

console.log(25600>>10)



/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/

/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */
var num = 250
num%2==0?console.log(`${num} is Even`):console.log(`${num} is Odd`)

var num = parseInt(prompt("Enter the Number : "))
num%2==0?
document.write(`${num} is Even`):
document.write(`${num} is Odd`)

var num = parseInt(prompt("Enter the Number : "))
// var n = parseInt(Math.sqrt(num))
var n = parseInt(num**0.5)
n*n==num?
document.write(`${num} is Perfect Square Number`):
document.write(`${num} is not Perfect Square Number`)

var num = parseInt(prompt("Enter the Number : "))
num&1?document.write(`${num} is Odd`):
document.write(`${num} is Even`)

var a = parseInt(prompt("Enter the First Number : "))
var b = parseInt(prompt("Enter the Second Number : "))
a^b?document.write("Both are Different"):
document.write("Both are Same")

/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */

var a = 15
var b = a--     //b=15  a=14
var c = --a     //a=13  c=13
var d = a++     //d=13  a=14
var e = ++a     //a=15  e=15
--a             //a=14
a--             //a=13
console.log(a,b,c,d,e)


var a = 10
var b = --a - a--
console.log(a,b)


var a = 10
var b = a-- - --a
var c = --a - --a + b-- - b--
console.log(a,b,c)


var a = 10
var b = a-- - a--
var c = --a + --a + b-- - --b
var d = a-- - a-- + b-- - b-- + c-- - c--
console.log(a,b,c,d)



