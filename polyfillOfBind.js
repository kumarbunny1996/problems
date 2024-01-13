const thisObj = {
  firstName: "Sathish",
  lastName: "Kumar",
};

const thisObj2 = {
  firstName: "Ashwin",
  lastName: "Kumar",
};

const thisObj3 = {
  firstName: "Priya",
  lastName: "Verma",
};
// this keyword not working in arrow function
const printName = () => {
  let result = `${this.firstName} ${this.lastName}`;
  console.log(result);
};
// this keyword working in normal function
function printName2(hometown, country) {
  let result = `${this.firstName} ${this.lastName} from ${hometown} in ${country}`;
  console.log(result);
}
// call and apply are same method wihic invokes a func directly and difference in argument pasing=> call- comma seperated values and in apply - arraylist
printName2.call(thisObj2, "Mumbai");
printName2.apply(thisObj, ["dharmapuri"]);
// bind method which returns a copy of the original function which can be invoked later
// const boundFunc = printName2.bind(thisObj3, ["Orissa"]);
// boundFunc();

//polyfill means fallback for bind method if browser does not support

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
const boundFunc = printName2.myBind(thisObj3, ["Orissa"]);
boundFunc("India");
