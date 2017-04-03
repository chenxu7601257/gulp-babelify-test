import testMod from './myModule';
//import {add,subtract} from './math';
//import * as myMath from './math';
import divide,{add,subtract} from './math';

testMod('Neat');
//const total=add(2,5);
//const subTotal=subtract(6,3);
//console.log(total);
//console.log(subTotal);

//const total=myMath.add(2,3);
//const subTotal=myMath.subtract(9,2);

//console.log(total,subTotal);

const divTotal=divide(6,9);
console.log(divTotal);

// function Plane(){
//   this.wings=2;
//   this.speed=100;
//   this.altitude=0;
// }

// Plane.prototype.fly=function(){
//   this.altitude=3000;
// }

// const myPlane=new Plane();
// console.log(myPlane.wings);

// function JetFighter(){
//    this.speed=1000;
// }

// JetFighter.prototype=new Plane();
// const myJetFighter=new JetFighter();
// console.dir(myJetFighter);

//Class
//Inheritance
//super
//Property
 
class Human{
   constructor(height){
      this.height=height;
      this.location={
         x:0,
        y:0
      }
   }
  
   walk(){
     console.log('walking');
   }
  
   static sayHello(){
     console.log('hi, there');
   }
  
   static get sayHelloWorld(){
     console.log('hi, hello world');
   }
}

class Warrior extends Human{
   constructor(height){
     super(height);
     this.strength=10;
   }
  
  walk(){
    console.log('warrior walking');
  }
}

const myWarrior=new Warrior(190);
console.log(Warrior.sayHello());
console.log(Warrior.sayHelloWorld);