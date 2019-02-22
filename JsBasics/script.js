var a = 40;
console.log(a);
if(a===40)
{
    console.log("There is one number");
}
let b = 20;
let c = 10;
var larger = (a>b)?a:b;
console.log(larger +" is larger");

function add(firstName, lastName)
{
  console.log(''+ firstName+' ' +lastName);
}

add("Suraksha", "Tasgaonkar");

//array operations
var names=["percy's", 'jason', "Leo"]
console.log(names.length);
names.push("frank");
console.log(names);
console.log(names.pop());
names.unshift("Joe");
console.log(names);
console.log(names.lastIndexOf("percy's", 0));

//Challenge 2

var tips=[];
var total1 =[];
function tipls(rest_bill)
{
    if(rest_bill > 50 )
    {
        tip = (25/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }
    

    else if(rest_bill > 50 && rest_bill< 200 )
    {
        tip = (15/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }

    else
    {
        tip = (10/100) * rest_bill;
        tips.push(tip);
        total=tip + rest_bill;
        total1.push(total);
    }
    console.log(tips);
    console.log(total1);

}

tipls(48);
tipls(124);
tipls(268);

//Object oriented programming
var MyDetails = {
 firstNAme:'Suraksha',
 dob: 1998,
 calcAge: function (dob)
 {
     return 2019-dob;
 }
};

var shen = new Object();
shen.firstNAme = "Jason";
console.log(shen);
console.log("Suraksha is " + MyDetails.calcAge(1998) + " years old");