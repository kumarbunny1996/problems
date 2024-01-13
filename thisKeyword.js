"use strict";
// this keyword in global space
console.log(this); // this keyword gives the global object which varies based on Javascript runtime environment for eg: in browser this gives window object and node js it is global object

// this keyword in functional scope
function c() {
  // the value depends upon strict / non-strict mode
  // in strict mode this keyword will undefined
  // in non-strict mode this keyword will global object
  console.log(this);
}
// this keyword in non-strict mode (this subsitituation)
// if  value of this keyword is undefined or null it will replaced with global object
//only in non-strict mode

// value of this keyword is depends upon how the function is called(runtime binding)

c(); // undefined
window.c(); // window

// this keyword inside the object's methods

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // returns ths obj which is binding in that obj
