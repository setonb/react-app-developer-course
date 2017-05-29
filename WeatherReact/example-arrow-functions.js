// var names = ['Seton', 'Chelsey', 'Mike'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => console.log('forEach', name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Seton'));
//

// var person = {
//   name: 'Seton',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


// Challenge!

function add(a,b) {
  return a + b;
}

var addOne = (a,b) => console.log(a + b);
var addTwo = (a,b) => {
  console.log(a + b);
}

console.log(add(1,3));
console.log(add(9,0));

addOne(5,5);
addTwo(19,2);
