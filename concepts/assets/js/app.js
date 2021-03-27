Array.prototype.myFunnyFunction = function() {
  return this.join('-');
}

function test(input, multiplier, callback) {
  const result = input * multiplier;
  callback(result);
}

function printer(value) {
  console.log('I received a value of ', value);
}

test(4, 4, printer);
