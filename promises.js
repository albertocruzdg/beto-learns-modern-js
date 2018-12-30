//No need of doing this using promises, but it is a good example.
function divide (dividend, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor != 0) {
      resolve(dividend / divisor);
    } else {
      reject('Division by 0');
    }
  });
}

console.log('4 / 2 :');

//Promises are async. We will not see any result of any of the promises until the main program stops.
divide(4, 2)
 .then(result => {
   console.log('Result: ' + result);
 })
 .catch((error) => { 
   console.log('Error: ' + error);
 });

console.log('4 / 0 :');

divide(4, 0)
 .then(result => {
   console.log('Result: ' + result);
 })
 .catch(error => { 
   console.log('Error: ' + error);
 });