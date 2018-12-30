function divide (dividend, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor != 0) {
      resolve(`${dividend} / ${divisor} = ${dividend / divisor}`);
    } else {
      reject(`${dividend} / ${divisor} = Division by 0`);
    }
  });
}

var divisionParameters = [{
    dividend: 4,
    divisor: 2,
  },{
    dividend: 4,
    divisor: 1
  }
];

var promises = divisionParameters.map(x => divide(x.dividend, x.divisor));

Promise
  .all(promises)
  .then(results => console.log(results))
  .catch(error => console.log(error));