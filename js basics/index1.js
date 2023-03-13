function createcircle(radius)
{
   return{
   radius:radius,
   location:{
    x:1,
    y:2
   },
   draw:function(){
    console.log('help me');
   },
   area:function()
   {
      return 2*Math.PI*radius;
   }
}
}
circle.vector={y:1};
const propertyname='center-loaction';
circle[propertynmae]={x:1};

console.log(createcircle(3).area());
//thsi is constructor:
function createEmployeeObject(firstName, lastName, gender, designation){
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.designation=designation;
  }
  var employee4=new createEmployeeObject("Alan", "Marks", "F", "Business Analyst");
//below code is factory
  function createEmployeeObject(firstName, lastName, gender, designation){
    var employee={};
    employee.firstName=firstName;
    employee.lastName=lastName;
    employee.gender=gender;
    employee.designation=designation;
    return employee;
  } 
  
  var employee3=createEmployeeObject("Harry", "Dsouza", "M", "Project Manager");
  console.log(employee3);
  //this will automatically rturn
  const sw=new Stopwatch();
  Stopwatch={
    duration:'0',
    reset:function()
    {

    },
    start:function(){

    },
    stop:function(){

    }

  }
  function Yum(radius)
  {
    this.radius=radius;
    let defaultvalue={x:0,y:0};
            this.getdefaultvalue=function(){
    //   return defaultvalue;
    // };
    Object.defineProperty(this,'defaultvalue',
    {get:function()
    {
         return defaultvalue;
    },
    set: function(value)
    {
        if(value.x||value.y)
        {
            throw new Error('Invalid location');
        }
        else{
          return defaultvalue=value;
        }
    }
  });

    this.draw=function(){
      console.log('draw');
    };
  }


  
const yum=new Yum(10);
console.log(yum.defaultvalue);
yum.defaultvalue={x:1,y:1};

let person={name:'kailash'};
Object.defineProperty(person,'name',{
    writable:false,//we cannot write
    enumerable:false,//we cannot see
    configurable:false//we cannot delete
});
delete person.name;
person.name='alex';
console.log(person.name);
console.log(Object.keys(person));
//Object.getPrototypeOf(myobj);

function square(side)
{
  //instance mebers
  this.side=side;
  this.move=function()
  {
    this.draw();
    console.log('what if');
  }

}
//protype members
square.prototype.draw=function()
{
  console.log('hello');
}
square.prototype.toString=function()
{ 
  this.move();
  console.log ('this is my square '+ this.side);
}

const c1=new square(4);
const c2=new square(5);
console.log(c1);
console.log(c1.move());
//object.keys only return sinstance
for(let i in c1)
{
  console.log(i);
}
console.log(c1.hasOwnProperty(toString()));
avoid

Array.prototype.max=function(){
    let max=0;
    for(let i=0;i<array.length;i++)
    {
      if(max<array[i])
      {
        max=array[i];
      }
    }
    return max;
};
const array=[1,2,3,4,5];
console.log(array.max());
function extend(child,parent)
{
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
function shape(color)
{
    this.color=color;
}
shape.prototype.duplicate=function()
{
     console.log('duplicate'); 
}
function rectangle(radius,color){
     
     this.radius=radius;
    
}
extend(rectangle,shape);
rectangle.prototype.duplicate=function()
{
     shape.prototype.duplicate.call(this);
     console.log('this duplicate'); 
}

function pentagon()
{

}


pentagon.prototype.draw=function()
{
  console.log('hi kailash');
}
//rectangle.prototype=Object.create(object.prototype);//before
//rectangle.prototype=Object.create(shape.prototype);
//rectangle.prototype.constructor=rectangle;
const rp=new rectangle(1,'red');
const pp=new shape();


//circle.prototype.constructor(1)\

function mixin(target,...sources)
{
     Object.assign(target,...sources);
}

const caneat={
   eat:function()
   {
     this.hunger--;
     console.log('hungery');
   }
}
const canwalk={
     walk:function(){
          console.log('walk');
     }
}
const canswim={
     swim:function()
     {
          console.log('swim');
     }
}
function person(){

}
mixin(person.prototype,caneat,canwalk);
const p=new person();

console.log(person);


const e=new  HTMLElement();
function HTMLElement()
{
     this.click=function()
     {
          console.log('clicked');
     }
}
HTMLElement.prototype.focus=function(){
     console.log('focued');
}
console.log(e.focus());

function htmlselect(...value)
{     
     this.item=[];
     this.c=[];
     
     this.add=function(value){
          this.item.push(value);
     },
     this.remove=function(value)
     {
          // c=this.item.indexOf(value);
          // this.item.splice(c,1);
         this.c=this.item;
         this.item=[];
         for(let key in this.items)
          {
               if(this.items[key]!=value)
               {
                    this.item[key]=this.c[key];
               }
          }
     }   
     

};
const ans=new htmlselect();

function htmlelement(){
    this.click = () => console.log("Clicked");
}
htmlelement.prototype.focus = function() {console.log("Focused");}

const e = new htmlelement();

let c=0;

function htmlselectelement(...value){
    this.items = [];
    this.addItem = function(value){
        this.items.push(value);

    },
     
     this.removeItem = function(value){
        c = this.items.indexOf(value);
        this.items.splice(c,1);

     };
     
}
// htmlselectelement.prototype =  Object.create(htmlelement.prototype);
// htmlselectelement.prototype.click = function() {
//     htmlelement.prototype.click.call(this);
//   }
// htmlselectelement.prototype = new htmlelement();
// htmlselectelement.prototype.constructor = htmlselectelement;


const s = new htmlselectelement();
console.log(s.addItem(1));
function htmlselect() {
     this.item = [];

     
     this.add = function(value) {
       this.item.push(value);
     };

     this.remove = function(value) {
          let i = 0;
          while (i < this.item.length) {
            if (this.item[i] === value) {
              this.item.splice(i, 1);
            } else {
              i++;
            }
          }
          return this.item;
        };
        
   }

    const ans=new htmlselect();

function selectelement([...array])
{
  this.temp=0;
  this.render=function()
  {

    temp=[...array].map(function(value)
    {
      return ('   <option>'+value+'</option>');
      
    }),
    this.t='<select>\n'+temp.join('\n')+'\n</select>';
    console.log(this.t);
   }
}
function htmlimage(src)
{
//    selectelement.prototype.render.call(this)
   
   this.src=src;
   this.render=function(){
     return `<img src=${this.src} />`;
   }

}

function HTMLElement()
{
     this.click=function()
     {
          console.log('clicked');
     }
}
HTMLElement.prototype.focus=function(){
     console.log('focued');
}
const e=new   HTMLElement();


 selectelement.prototype=Object.create(HTMLElement.prototype);
 selectelement.prototype.constructor=selectelement;

htmlimage.prototype =  Object.create(HTMLElement.prototype);
htmlimage.prototype.constructor=htmlimage;
const  img=new htmlimage();
const a1=new selectelement([1,2,3]);
'use strict';
const _radius=Symbol();
const _draw=Symbol();
class circle{
     constructor(radius)
     {
          // this[_radius]=radius;
          this.typical=function()
          {
               console.log(this);//prototype
          }
     }
          //instansce method
          [_draw]()
          {
               console.log('draw');//instance
          }
          //static method
          // static parse(str)
          // {
          //      const radius=JSON.parse(str).radius;
          //      return new circle(radius);
          // }

     
}
// const r1=circle.parse('{"radius":1}');

const r1=new circle();
console.log(r1.typical());//method call
//console.log(typical());//function call
const key=Object.getOwnPropertySymbols(r1)[0];
console.log(r1[key]);

WEAK MAP
const _sid=new WeakMap();
const _mov=new WeakMap();
//const private=new weakmap();
class square
{
     constructor(side)
     {
          //private.set(this,{
              //  radius:radius,
               // move:()=>{

               // }
         // });
         //private.get(this).radius;
          _sid.set(this,side);
          _mov.set(this,function()
          { 
             console.log('move',this);
          });
     }
      draw()
      {
          _mov.get(this)();
          console.log(_sid.get(this));
      }

}
const p1=new square(1);
const _radii=new WeakMap();
class rec
{
     constructor(radii)
     {
          _radii.set(this,radii);
     }
     get radii(){
          return _radii.get(this);
     }

     set radii(value)
     {
          if(value<=0)
          {
             throw new Error('invalid radius');
          }
          else{
               _radii.set(this,value);
          }
     }
}
const e=new rec(0);
//inheritance
class sh
{
     constructor(color)
     {
          this.color=color;
     }

     move()
     {
          console.log('move');
     }
}
class cir extends sh{
     constructor(color,radius)
     {
          super(color);
          this.radius=radius;
     }

     draw()
     {
          console.log('draw');
     }

}
const c=new cir('red',1);
//method overridding
class sh1
{
    move()
     {
          console.log('move');
     }
}
class cir1 extends sh{
    
  move()
  {
     super.move();
     console.log('move circle');
  }
    

}
const c1=new cir1();
class stack
{
     constructor()
     {
          this.count=0;
          this.empty=[];
     }
     peek()
     {
          if(this.empty.length!=0)
          {
               return(this.empty.slice(-1));
          }
          else
          {
               throw new Error('Stack is already empty');
          }


     }
     pop()
     {
       if(this.empty.length!=0)
       {
          this.empty.pop();
       }
       else
       {
          throw new Error('Stack is already empty');
       }
     }
     push(value)
     {
         this.empty.push(value);
     }
     getcount()
     {
          return(this.empty.length);
     }
}
const s=new stack();
//export
//import { cir1} from './cir.js'








