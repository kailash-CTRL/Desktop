let person={
    name:'person',
    age:30
};


function greet(name){

    console.log('hello'+name);
    }
greet('john');

function multiply(number)
{
    return  number*number;
}
//let  variable=multiply(2);
console.log(multiply(2));

let customer=120;
if(customer>100)
{
    console.log('gold');
}else
{
    console.log('silver');
}
let type=customer>100?'gold':'silver';
console.log(type);

let a=false;
let b=false;
type=a||b;
console.log(type);

let r=!type;
console.log(r);

let g=false|| 1 || 2|| 'mosh'
console.log(g);

let useroColor=undefined;
let defaultColor='blue';
console.log(useroColor||defaultColor);

console.log(1|8);


const read=6;
const write=9;
const execute=10;

let result=0;
result=read|write|result;

let final=result & write? 'yes':'no';
console.log(final);

 a='red';
 b='blue';
 let swap=a;
 a=b;
 b=swap;
 console.log(a +' '+ b);


 let time=16;
 if(time>=6 && time<12)
 {
    console.log('Good morning');
 }
 else if(time>=12 && time<=18)
 {
    console.log('Good evening');
 }
 else{
    console.log('Good night');
 }

 for(let key in person)
 {
    console.log(key,person[key]);
 }
  person=['kailash','prasanna'];
console.log(person);
for(let index in person)
{
    console.log(index,person[index]);
}
for(let p of person)
{
    console.log(p);
}
let number1=10;
let number2=25;
function max_of_two(number1,number2)
{
    if(number1>number2)
    {
        return number1;
    }
    else{
       return  number2;
    }
}
console.log(max_of_two(number1,number2));

let height=25;
let width=10;
console.log(islandscape(width,height));
function islandscape(width,height)
{
   return(width>height);
}


let output=fizz(7);
console.log(output);
function fizz(input)
{
    if(typeof input !=='number')
    {
        return 'not a  number';
    }
    if ((input %3 ==0)  && (input %5 ==0))
    {
        return 'fizzbuzz';
    }
   
    if(input%3==0)
    {
        return 'fizz';
    }
    if(input %5 ==0)
    {
        return 'buzz';
    }
    if((input %3 !=0 )|| (input  %5 !=0))
    {
        return input;
    }
}
output=speed(72)

console.log(output);
function speed(input)
{
    if(input<=70+5)
    {
       return 'OK';
    }
    else 
    {
        let temp=Math.floor((input-70)/5);
        
        if(temp>=12)
        {
           return 'license suspended';
        }
        else
        {
            return temp;
        }
        
    }
}
showcase(10);


function showcase(limit)
{
   for(let i=0;i<10;i++)
   {
       if(i%2==0)
       {
        console.log(i, 'even');
       }
       else{
        console.log(i, 'odd');
       }
    
   }
}
let array=[1,6,7,'',0,null];
console.log(countTruthy(array));
function countTruthy(array)
{
   let count=0;
   for(let value in array)
   {
       if(array[value])
          count++;
   }
   return count;
}
let object={
    name:'a',
    year:2019,
    author:'poi'
};
showprop(object);
function showprop(object)
{
    for(let key in object)
    {
        if(typeof object[key]==='string')
        {
            console.log(key,object[key]);
        }
    }
   
}
res=sum(10);
console.log(res);
function sum(limit)
{
    let sum=0;
    for(let i=1;i<=limit;i++)
    {
        if(i%3==0 || i%5==0)
        {
           sum=sum+i;
        }
    }
    return sum;
}
const marks=[80,80,50];
console.log(grade(marks));

 
function grade(marks)
{
    let avg=0,tot=0;
    for(let i=0;i<marks.length;i++)
    {
         tot=tot+marks[i];
    }

   avg=tot/marks.length;
   console.log(avg);
   if(avg>=1&&avg<=59)
   {
    return 'f';
   }
   else if(avg>=60&&avg<=69)
   {
    return 'd';
   }
   else if(avg>=70&&avg<=79)
   {
    return 'c';
   }
   else if(avg>=80&&avg<=89)
   {
    return 'b';
   }
   else if(avg>=90&&avg<=100)
   {
    return 'a';
   }
}
let emp=5;
star(emp);
function star(emp)
{
    for(let i=1;i<=emp;i++)
    {
        let pat='';
        for(let j=0;j<i;j++)
        {
            pat+='*';
        }
        console.log(pat);
    }
}
const car={
    radius:1,
    variable:{
     x:1,
     y:1
     },
     IsVisible: true,
      fun:function()
      {
       console.log('draw');//method
      }
   
    }
 //factory function
function CreateCar()
{
   return{
    radius:1,
    variable:{
     x:1,
     y:1
     },
     IsVisible: true,
      fun:function()
      {
       console.log('draw');//method
      }
    }
}
eg:

function CreateCar(radius)
{
   return{
     radius,
      fun()
      {
       console.log('draw');//method
      }
    }
}
// let gh=CreateCar(5).fun();
// console.log(gh);
//constructer function
//camelNotation:oneTwoThree
//pascalnotation:OneTwoThree
//constructor we have to pascal notation

function Circle(radius)
{
  this.radius=radius;
  this.draw=function()
{
console.log('draw');
}
}

const tem= new Circle(1);
Circle.color='yellow';
Circle.drwa=function(){};
console.log(Circle);

delete Circle.color;
delete Circle.drwa;

//PRIMITIVES

x=10;
y=x;
x=20;
//changes will affect
//it will not store 
//it will store somewere else in memory
//it will store addres

//REFERENCE TYPES
x={value:10}
y=x;
x.value=20;
console.log(x);

//primitives are copied by value
//objects are copied by reference

//primitives eg
number=10;
function increase(number)
{
    number++;
}
increase(number);
console.log(number);

//reference 

 obj={value:10};
function increase(obj)
{
    obj.value++;
}
increase(obj);
console.log(obj);

//objects are not iterable
obj={value:2,
    name:'kailash',
    age:20};
for(let key in obj)
{
    console.log(obj[key]);
}
for(let value of Object.values(obj))
{
    console.log(value);
}

//entries
for(let entry of Object.entries(obj))
{
    console.log(entry);

}
//----------------------------------------------------------//
if('value' in obj)
  console.log(true);

  const another=Object.assign({prop:17},obj);
  console.log(another);
        //OR
  const l={};
  for(let key in obj)
  {
    l[key]=obj[key];
  }
  console.log(l);
  //OR
  console.log(temp={...obj});


function showaddress()
{
 return{
    street:'neru',
    city:'dinsigul',
    zipcode:624601,
    
 }
}
 console.log(showaddress());

 let address={
    street:'neru',
    city:'dinsigul',
    zipcode:624601,
 }
 show(address);
 function show(address)
 {
    for(let key in address)
    {
        console.log(key,address[key]);
   }
 }
 //intialise
 
function showaddress(street,city,zipcode)
{
 return{
    street:'neru',
    city:'dinsigul',
    zipcode:624601,
    
 };
}
 m=showaddress('car','madurai',22222);
console.log(m);

const ter=new waddress('car','madurai',22222)
function waddress(street,city,zipcode)
{

   this.street='steet';
   this.city='djfkdf';
   this.zipcode=23232;
    
 }
 console.log(ter);

//string primitive
 mes='hi';
console.log(typeof(mes));
//string object
const message=new String('hi');
console.log(typeof(message));

//escape notation-->\'
let user='john';
const tech='this is my\n'+
'\'first\' message';
console.log(tech);

const techi=`this is my'first'message from ${user}`;

console.log(techi);

let ad1=new ad('a','b',123);
let ad2=new ad('a','b',123);
let ad3=ad1;

function ad(street,city,zipcode)
{
    
   this.street='steet';
   this.city='djfkdf';
   this.zipcode=23232;
}
console.log(ad.call({},));
function isequal(ad1,ad2)
{
    return ((ad1.street===ad2.street)&&(ad1.city===ad2.city)&&(ad1.zipcode===ad2.zipcode));
}
function aresame(ad1,ad2)
{
    return ad1===ad2;
}
console.log(aresame(ad1,ad3));


let blogpost=new Createblog('kailash','main','ram','12','fff', '45',true);
function Createblog(title,body,author,views,comment,view,islive)
{
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=views;
    this.comments={
        author:comment,
        body:view

    };
    this.live=islive;
}



 console.log(blogpost);

let post={
    title:'jdfjhbd',
    body:'dhfkds',
    author:'sdhj',
    views:74567,
    comment:[
    {author:'sdhj', body:'dhfkds',}],
    live:true
}
console.log(post);
let pricerange=[{label:'1',tooltip:'inexpenxive',minperson:1,maxperson:20},
{label:'1',tooltip:'inexpenxive',minperson:1,maxperson:20},
{label:'1',tooltip:'inexpenxive',minperson:1,maxperson:20}];

let resturatants=[{averageperson:5}];
//arrays are objects
//-----------------------------------------ARRAY
const num=[3,5,7];
//adding elements in  (last)array   
num.push(5,7,8,9);
//first
num.unshift(9,0,8,7);
//middle
num.splice(2,0,'a','b');
console.log(num);

//--------------------------------
//removing an element
//pop-->remove last element
//shift-->frst
//splic(index,how may element want to remove);
//indexof
console.log(num.indexOf('1'));
//lastindexof ---->give last index
let ty=[1,2,3,1,1,5,3];
console.log(num.lastIndexOf(3));
//fing element is present or not
console.log(ty.indexOf(1)!==-1);
//or
console.log(ty.includes(1));

console.log(ty.indexOf(3,4));//the second element rep were we have start the finding form index
 //reference
const courses=[{id:'1',name:'kailash'},
{id:'2',name:'sunder'}];
console.log(courses.includes({id:'1',name:'kailash'}));//thsi returns false because it stores reference

let cr=courses.findIndex(function(course){
      return course.name==='kailash';
});
console.log(cr);
//arrow functions

cr=courses.find(course=>course.name==='kailash');
console.log(cr);
//empty the array
let numbers=[1,2,3,4,5];
let ano=numbers;
numbers=[];
console.log(numbers);
//or
numbers.length=0;
//or
numbers.splice(0,numbers.length);
//or
while(numbers.length>0)
{
    numbers.pop();
}
console.log(ty.concat(numbers));

console.log(ty.slice(2,4));
console.log(ty.slice());
console.log(ty.slice(3));
  r=[{id:1}];
console.log(r[0].id=10);
//spread operator
//let a=[...first,'a','b',...second];
let m=[-1,2,3,4];
for(let key  in m)
{
    console.log(key);
}
//foreach
m.forEach( (index,element) => console.log(index,element));
//join
let bb=m.join(',');
console.log(bb);
const mes='This is my first message';
let u=mes.split(' ');
console.log(u);
console.log(u.join('-'));
m.sort();

console.log(m.reverse());  

const p=[{id:'1',name:'kailash'},{id:2,name:'alex'}];
const srt=p.sort(function(a,b)
{
   let nameA=a.name.toUpperCase();
   let nameB=b.name.toUpperCase();
   if(nameA>nameB) return 1;
   if(nameA<nameB) return-1;
   return 0;
});
console.log(srt);
// every means all elements in array are positive
// every determine the boolean values
// some-->atleast one positive
let vm=m.every(function(value)
{
    return value>=0;
});
//filter should dispaly the only filtered value that is positive
console.log(vm);
let vs=m.filter(function(e){
     if(e>=0)
       return e;
});
console.log(vs);
const empty=m.map(function(value)
{
    const obj=[{id:value}];
    return obj;
})
console.log(empty);
const html=m.map(function(value)
{
    return '<li>'+value+'</li>';
})
console.log(html);
 r=html.join('');
 console.log(r);
 t='ul\n'+html.join('\n')+'\n/ul';
 console.log(t);
 const newword=m.reduce(function(acc,curr){
    return acc+curr;
 },0);//if we not intialize to acc it will assinn array firsst element
 console.log(newword);

 let res=arrayofrange(1,5);
 console.log(res);

 function arrayofrange(min,max)
 {
    let output=[];
    for(let i=min;i<=max;i++)
    {
        output.push(i);
    }
    return output;
 }
 let y=[1,2,3,4,5,6,7,8,9,0,1];
 res=includes(y,-1);
 function includes(array,search)
{
    for(let number of array){
        if(number===search)
        {
            return true;
        }
       return false;
    }
}
console.log(res);


const o=except(y,[1]);
console.log(o);
function except(array,temp)
{
    const out=[];
    for(let i=0;i<array.length;i++)
    {
       if(!temp.includes(array[i]))
       {
        out.push(array[i]);
       }
    }
    return out;
}

//moveindex(m,0,1);
res=moveindex(y,0,1);
 console.log(res);
 function moveindex(array,index,offest)
 {
    if((index+offest)>=array.length)
    {
        return 'invalid offset';
    }
    else{
        const dry=[...array];
        let ele=dry.splice(index,1)[0];
        dry.splice(index+offest,0,ele);
        return dry;
    }
 }
const ur=console.log(countoccur(y,1));
function countoccur(array,element)
{
   return array.reduce(function(acc,cur)
    {
        let o=(cur===element)?1:0;
        return acc+o;

    },0)
}
//finding
const tr=console.log(getmax(y));
function getmax(array)
{
    if(array.length===0) return undefined;
    
    
    return array.reduce(function(a,b)
    {
        return( b>a)?b:a;
    })
}
const movies=[{title:'a',year:2018,rating:4.5},
{title:'a',year:2018,rating:4.5},
{title:'b',year:2018,rating:4.7},
{title:'c',year:2018,rating:3},
{title:'d',year:2017,rating:4.5}];

const titles=movies
     .filter(function(m)
     {
        return (m.year===2018&&m.rating>=4);
    })
     .sort(function(a,b)
     {
        return a.rating-b.rating;
     })
     .reverse()
     .map(function(m)
     {
        return m.title;
     })
console.log(titles)
y=[1,2,3,4,5,6,7,8,9,0,1];

const yu=y.reduce((sorted, el) => {
    let index = 0;
    while(index < sorted.length && el < sorted[index]) 
    {
        index++;
    }
    sorted.splice(index, 0, el);
    return sorted;
  }, []);
console.log(yu);
//anaonymos function
let run=function()
{
    console.log('max');
}
run();
let move=run;
move();
function  sum(a,b)
{
    let total=0;
    for(let value of arguments)
    {
        total+=value;
    }
    return total;
}
 console.log(sum(1,2,2,3,4,5));

function sum(...args)
{
   return args.reduce (function(acc,cur)
   {
      acc=acc+cur;
      return acc;  
   },0)
}
//we cannot have parameter after rest
function interes(p,r,yr=5)
{
    r=r||8.5;
    yr=yr||5;
    return p*r/100*yr;
}
console.log(interes(10000));
//getter and setter methods
const obj={
    firstname:'kailash',
    lastname:'A D',
    get fullname()
    {
        return (obj.firstname+' '+obj.lastname);//this also can ve used
    },
    set fullname(value){
   
       if(typeof(value)!=='string') 
           throw new Error('value is not string');
       const parts=value.split(' ');
       if(parts.length!==2)
       throw new Error('enter both first name and last name');
       this.firstname=parts[0];
       this.lastname=parts[1];

    }
};
try{
obj.fullname='';
}
catch(e){
    console.log(e)
}
console.log(obj);
//var -->function-scoped
//es6:let,const-->block-scoped

//method-->obj
//function-->global(window)

const video={
    title:'a',
    tags:['a','b','c'],
    showtags(){
        this.tags.forEach(function(tag){//call back function is a regular function so this refers to the window
            console.log(this,tag);
        },{FIRSTNAME:'kailash'});
    }
};
video.stop=function()
{
    console.log(this);
}
video.stop();
video.showtags();
//this will represent global 
//new craete {}
//function{}-->this will represent window objext
const namestr={
    title:'a',
    tags:['a','b','c'],
    showtags(){
        this.tags.forEach(function(tag){//call back function is a regular function so this refers to the window
            console.log(this.title,tag);
        },this);
    }
};
namestr.showtags();
//chaging this keyword
console.log('----------------------------');
const namestb={
    title:'a',
    tags:['a','b','c'],
    showtags(){
        const self=this
        this.tags.forEach(function(tag){//call back function is a regular function so this refers to the window
            console.log(self.title,tag);
        });
    }
};
namestb.showtags();
console.log('----------------------------');
function play(a,b){
    console.log(this);
}
play.call({name:'kailash'});
play.apply({name:'kailash'},[1,2,3]);
const fn=play.bind({name:'kailash'});
fn();
console.log('----------------------------');
const namesty={
    title:'a',
    tags:['a','b','c'],
    showtags(){
       
        this.tags.forEach(function(tag){//call back function is a regular function so this refers to the window
            console.log(this.title,tag);
        }.bind(this));
    }
};
namesty.showtags();
console.log(sum([1,2,2,3,4,5]));

function sum(...args)
{
   if(args.length===1&&Array.isArray(args[0])) 
   {
    args=[...args[0]];
    return args.reduce (function(acc,cur)
   {
      acc=acc+cur;
      return acc;
   },0)
   }
   else{
      return ;
   }
}
const beer={
    radius:2,
    get area(){
        return Math.PI*this.radius*this.radius;
    }
   

}
console.log(beer.area);
function circle(number)
{
   
    return  (Math.PI*number*number);
}

console.log(circle(5));
