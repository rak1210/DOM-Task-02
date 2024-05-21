var div = document.createElement("div");
div.setAttribute("id","calculator");
var input = document.createElement("input");
input.setAttribute("id","display");



var div1 = document.createElement("div");
div1.setAttribute("id","keys");

var sev = document.createElement("button");
sev.setAttribute("onclick","appendToDisplay('7')");
sev.innerHTML = "7"
var eig = document.createElement("button");
eig.setAttribute("onclick","appendToDisplay('8')");
eig.innerHTML = "8"
var nin = document.createElement("button");
nin.setAttribute("onclick","appendToDisplay('9')");
nin.innerHTML = "9"
var add = document.createElement("button");
add.setAttribute("onclick","appendToDisplay('+')");
add.setAttribute("class","operator-btn")
add.innerHTML = "+"
var fou = document.createElement("button");
fou.setAttribute("onclick","appendToDisplay('4')");
fou.innerHTML = "4"
var fiv = document.createElement("button");
fiv.setAttribute("onclick","appendToDisplay('5')");
fiv.innerHTML = "5"
var six = document.createElement("button");
six.setAttribute("onclick","appendToDisplay('6')");
six.innerHTML = "6"
var sub = document.createElement("button");
sub.setAttribute("onclick","appendToDisplay('-')");
sub.setAttribute("class","operator-btn")
sub.innerHTML = "-"
var one = document.createElement("button");
one.setAttribute("onclick","appendToDisplay('1')");
one.innerHTML = "1"
var two = document.createElement("button");
two.setAttribute("onclick","appendToDisplay('2')");
two.innerHTML = "2"
var thr = document.createElement("button");
thr.setAttribute("onclick","appendToDisplay('3')");
thr.innerHTML = "3"
var mul = document.createElement("button");
mul.setAttribute("onclick","appendToDisplay('*')");
mul.setAttribute("class","operator-btn")
mul.innerHTML = "*"

var cle = document.createElement("button");
cle.setAttribute("onclick","clearDisplay()");
cle.setAttribute("class","operator-btn");
cle.innerHTML = "C"
var zer = document.createElement("button");
zer.setAttribute("onclick","appendToDisplay('0')");
zer.innerHTML = "0"
var equ = document.createElement("button");
equ.setAttribute("onclick","calculate()");
equ.setAttribute("class","operator-btn-que")
equ.innerHTML = "=";
var dot = document.createElement("button");
dot.setAttribute("onclick","appendToDisplay('.')");
dot.innerHTML = ".";
var zeroo = document.createElement("button");
zeroo.setAttribute("onclick","appendToDisplay('00')");
zeroo.innerHTML = "00";
var per = document.createElement("button");
per.setAttribute("onclick","appendToDisplay('%')");
per.setAttribute("class","operator-btn")
per.innerHTML = "%";

var divi = document.createElement("button");
divi.setAttribute("onclick","appendToDisplay('/')");
divi.setAttribute("class","operator-btn")
divi.innerHTML = "/";
var addsub = document.createElement("button");
addsub.setAttribute("onclick","appendToDisplay('+')");
addsub.setAttribute("class","operator-btn")
addsub.innerHTML = "+/-";


div1.append(cle,per,addsub,divi,sev,eig,nin,add,fou,fiv,six,sub,one,two,thr,mul,dot,zer,zeroo,equ);

div.append(input,div1);
document.body.append(div)


var display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    catch{
        display.value = "only number";
    }
   
}