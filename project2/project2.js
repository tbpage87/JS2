/*Tamla Miller*/
var myName = "Tamla Miller";
var para1 = document.getElementById("p1");

para1.textContent = myName;

var n1 = 23;
var n2 = 3;
var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

var myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

var myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

var ageCompare = 37 > numberMult;
document.getElementById("p6").textContent = ageCompare;
