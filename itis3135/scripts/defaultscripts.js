const currentdate = new Date(); 
const datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
const currentDay = currentdate.getDay();
var actualday;
switch (currentDay){
    case 0:
        actualday = "Sunday";
        break;
    case 1:
        actualday="Monday";
        break;
    case 2:
        actualday="Tuesday";
        break;
    case 3:
        actualday="Wednesday";
        break;
    case 4:
        actualday ="Thursday";
        break;
    case 5:
        actualday ="Friday";
        break;
    case 6:
        actualday="Saturday";
        break;
}

const companyname ="Jumping Giraffe Pizzeria";
const dateElement = document.getElementById("current-date");
dateElement.innerHTML = `Today is ${actualday} ${datetime}`;

const fname = document.getElementById("feeling-name");
const submitfeeling = document.getElementById("feelingbtn");
submitfeeling.onclick = function feelingmsg(){
    let nameu = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    if(nameu !=="" && feeling!==""){
        fname.innerHTML= `The ${companyname} welcomes you, ${nameu}!
We're glad you are doing ${feeling}!`;
    }
};

const polyout = document.getElementById("polyresult");
const submitNum = document.getElementById("fnumbtn");
const fnum = document.getElementById("fnum");
submitNum.onclick = function fnummsg(){
    let number = Math.abs(Math.round(Number(document.getElementById("fnum").value)));
    if(number === 0){
        polyout.innerHTML ="Not a polygon";
    }
    else if(number === 1){
        polyout.innerHTML ="Monogon";
    }
    else if(number ===2){
        polyout.innerHTML ="bigon";
    }
    else if(number ===3){
        polyout.innerHTML ="triangle";
    }
    else if(number ===4){
        polyout.innerHTML ="quadrilateral";
    }
    else if(number === 5){
        polyout.innerHTML ="pentagon";
    }
    else if(number===6){
        polyout.innerHTML ="hexagon";
    }
    else if(number ===7){
        polyout.innerHTML ="septagon";
    }
    else if(number ===8){
        polyout.innerHTML ="octagon";
    }
    else if(number ===9){
        polyout.innerHTML ="nonagon";
    }
    else if(number ===10){
        polyout.innerHTML ="decagon"
    }
    else{
        polyout.innerHTML ="Out of range";
    }
}

const pizzasize = document.getElementById("pizzasize");
const quantity = document.getElementById("quantity");
const ordertotal = document.getElementById("ordertotal");
const calculatetotalbtn = document.getElementById("calculatetotal");

calculatetotalbtn.onclick = function calctotal(){
    let ordersum = parseInt(pizzasize.value) * parseInt(quantity.value);
    ordertotal.innerHTML = `Your total is $${ordersum}`;
}

const toppingbtn = document.getElementById("toppingbtn");
const toppingrslt = document.getElementById("toppingresult");
toppingbtn.onclick = function randomTopping(){
    const toppings = ["Mushrooms","Sausage","Pepperoni","Peppers","Ham","Pineapple","Giraffe Meat"];
    const randomnum = Math.floor(Math.random()*7);
    toppingrslt.innerHTML= toppings[randomnum];
}

const giraffebtn = document.getElementById("giraffebtn");
const giraffeheight = document.getElementById("giraffeheight")

let heightvalue = 0;
giraffeheight.innerHTML = `Giraffe Height: ${heightvalue}ft`;
giraffebtn.onclick = function increaseHeight(){
    heightvalue+=4;
    giraffeheight.innerHTML = `Giraffe Height: ${heightvalue}ft`;

}