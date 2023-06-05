/*
Desc: Basic JS & Math Operations
Date: 04/28/23
SMJ
*/

//1. Print on Console and Screen
console.log("Yay!!! Short Periods!!!");
document.write("It\'s a great day");

//Store the value of break command in a varaible lineBr
lineBr = document.write("<br/>"); 

document.write("Repl.it is a bad website");
document.write("<br/>");
//2. Create variables and manipulate them
var num1 = 5;
var num2 = 10;
var num3 = 5;
var msg = "Hit the Whoa!!!";
document.write(msg);
document.write("<br/>");

//3. Manipulate vars using Math Basic Operations
document.write("num1 = "+ num1);
document.write("<br/>");
document.write("num2 = "+ num2);
document.write("<br/>");

document.write("Sum of ", num1, " + ", num2, " = ", (num1 + num2));
document.write("<br/>");
document.write("Difference of ", num2, " & ", num1, " = ", num2 - num1);
document.write("<br/>");
document.write("num1 * num2 = " + num1 * num2);
document.write("<br/>");
document.write("num2 / num1 = " + num2 / num1);
document.write("<br/>");
document.write("num1 % num2 = " + num1 % num2);
document.write("<br/>");

//4. Use Logical Operators compare variables to yeild True/False
document.write(num1, " == ", num3, " ", (num1==num3));
document.write("<br/>");
document.write(num1, " == ", num2, " ", (num1==num2));

//4a. 3-basic logical operators are AND, OR, NOT
document.write("<br/>");
document.write(("T && T is always "), (num1==num3) && (num3==num1));

document.write("<br/>");
document.write(("T && F is always "), (num1==num2) && (num3==num2));

document.write("<br/>");
document.write(("T || T is always "), (num1==num3) || (num3==num1));

document.write("<br/>");
document.write(("T || F is always "), (num1==num2) || (num3==num1));

document.write("<br/>");
document.write(("NOT T is always "), !(num1==num3));

document.write("<br/>");
document.write(("!F is always "), !(num1==num2));

var age = 24;
//isTeen holds the value if age is between 13 & 19 
var isTeen = (age >=13 && age <=19) ? " Teen " : "Adult";
document.write("<br/>");
document.write(("Is the person a Teenager "), isTeen);