function divide (dividend, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor != 0) {
      resolve(`${dividend} / ${divisor} = ${dividend / divisor}`);
    } else {
      reject(`${dividend} / ${divisor} = Division by 0`);
    }
  });
}

async function divideSomeNumbers() {
    var divisionParameters = [{
      dividend: 4,
      divisor: 2,
    },{
      dividend: 4,
      divisor: 1
    }
  ];
  
  var promises = divisionParameters.map(x => divide(x.dividend, x.divisor));
  
  try {
    var results = await Promise.all(promises);
    results.forEach(x => console.log(x));

  } catch (error) {
    console.log(error);
  }
}

divideSomeNumbers();