// loops

function loops() {
  // conventional

for (let i = 0 ; i < 10 ; i++) {
  // console.log(i);
}

// for-in
const test = { a: 1, b: 2, c: 3 }
for (let key in test) {
  console.log(test[key]);
}

console.log("=============");

// for-of
const test2 = { a: 1, b: 2, c: 3 };
for (let key of test2) {
  console.log(key);
}
}

function conditionals() {
  let a = 10;
  if (a < 10) {
    console.log('less');
  } else if (a === 10) {
    console.log('equal');
  } else {
    console.log('more');
  }

  const result = a > 10 ? 'more' : 'equalorless';

  const fruits = ['apple', 'kiwi', 'banana', 'grapes'];
  const result2 = fruits.map((fruit) => {
    switch (fruit) {
      case 'apple': {
        return 'Apple a day keeps doc away';
      }
      case 'banana': {
        return 'rich fibres'
      }
      default: {
        return 'don\'t know this yet'
      }
    }
  });

  console.log(result2)
}

(function () {
  console.log('Hey there!')
})();
