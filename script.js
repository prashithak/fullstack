console.log('hello');
var a=10;
console.log(a);
{
    var a=90;
    console.log(a);
}
console.log(a);
var a=23;
console.log(a);
let b=24;
console.log(b);
{
    let b=23;
console.log(b);
}
console.log(b);
b=45;
console.log(b);
let firstName='maya';
let FirstName="liya";
console.log(firstName);
console.log(FirstName);
let firstname='my name is pr';
console.log(typeof(firstname));
var t;
console.log(t);
console.log(typeof(t));
let arr1=[1,2,3,4,'prashi']
console.log(arr1[5]);
console.log(arr1[4]);
let person={
   name:'prashi',
   age:30,
   place:'mlm'
}
console.log(person.place)
console.log(person.name)
 
let car=new Object();
car.brand='maruti';
car.model='k10';
car.color='white';
console.log(car);

var arr_obj=[{name:'maya',location:'kochi'},{name:'meera',location:'mlm'}]
console.log(arr_obj[1].location)


let op=8;
console.log(op+=3);

let inc=7;
let inc1=inc++;
console.log(inc1);
console.log(inc);

let incc=11;
let incc1=++incc;
console.log(incc1);
console.log(incc);


if (inc===inc1) {
    console.log("the values are equal");
    
} else {
    console.log("the values are not equal");
}

let x=9;
let y=10;
if (x>y) {
    console.log('x is greater than y');
    
} else if(x<y) {
    console.log('y is greater than x');
}
else {
    console.log('x is equal to y');
}


let q=100;
let c=90;
let d=(q-c)+8**2;
console.log(d);


function addval(ad1,ad2)
{
 var sum=ad1+ad2;
 console.log('the sum is'+sum);
}

function subval(sb1,sb2)
{
 var sub=sb1-sb2;
 console.log('the value is'+sub);
}

function divval(dv1,dv2)
{   if (dv2==0)
     {
    console.log('division is not possible');
        } 
    else 
    {
    var div=dv1/dv2;
    console.log('the divided value is'+div); 
    }
 
}
divval(40,0);
subval(50,20);
addval(10,20);

for (let i= 0; i <10; i++)
 {
    console.log(i+1);
    
}

let arry1=[1,2,3,4,'prashi']

for (let i = 0; i< arry1.length; i++)
 {
    console.log(arry1[i]);
    
}

// another method of for loop
for(x of arry1){
    console.log(x);
}
//for in loop

let person1={name:'ram',age:55,place:'mlm'}
for(y in person1)
{
    console.log(y);
    
}
for(y in person1)
{
    console.log(person1[y]);
    
}
//while loop
//let arry1=[1,2,3,4,'prashi']
let j=0;
while (j<arry1.length) 
{
    console.log(arry1[j]);
    j++;
}

//do while
let k=0;
do {
    console.log(k+1);
    k++;
} while (k<10);
