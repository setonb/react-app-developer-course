// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// // Promises
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if ( typeof a !== "number" ||  typeof b !== "number" ) {
      reject('Please enter two numbers!')
    } else {
      resolve(a + b);
    }
  });
}

addPromise(423432423,45732849).then(function(result){
  console.log('promise success', result);
}, function(err) {
  console.log('promise error', err);
});
