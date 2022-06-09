import React from "react";

export function practice () {
// if it is an element in an array you could select the element with its index.  In this case it would be [0]
var data = { foo: 8, bar: 32, baz: 7 }
console.log(data.baz);

data.baz

 var data1 = { 1: 'Joe', 2: 'Bob', 3: 'Jim' }
 for (const [value] of Object.values(data1)) {
   console.log(value);
 }

 var data2 = [89, 5, 3, 54, 23]
 data2.forEach(data2 => console.log(data2));

 var foo = [1, 3, 8]
 var bar = [44, 99]
 const boo = [...foo, ...bar]
  console.log(boo);
  var baz = foo.concat(bar)
  console.log(baz);

  var data3 = [3, 8, 23, 55, 10]
  data3.push(9)
  console.log(data3);
return (
  
  {isLoggedIn() ? (
    <div>
  <strong>This text is Bold</strong>
  </div> ) : null}
}

// {isLoggedIn() ? (     <div>   <strong>This text is Bold</strong>   </div> ) : null}  This doesn't do the exact same thing as what is ask but hides the text on the conditional of is the user logged in and shows the text as bold if the user is logged in.  . 