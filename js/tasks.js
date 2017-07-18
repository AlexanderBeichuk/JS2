function Card(option) {
  this.from = option.from;
  this.to = option.to;

  this.show = function() {
    return this.from + ' --> '+ this.to;
  }
}

let cardObj = new Card({from: 'Kobrin', to: 'Minsk'});
console.log(cardObj.show());

class Human {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}

let humans = [];

function getInfoPeople(array) {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += '--> ';
    for (let key in array[i]) {
      str += array[i][key] + ', ';
    }
    str +='\n';
  }
  return str;
}

function addHuman(name, age, height) {
  humans.push(new Human(name, age, height));
}

addHuman('Serjio', 30, 180);
addHuman('Alex', 20, 170);
addHuman('Max', 23, 175);
addHuman('Natali', 26, 160);
addHuman('Vitali', 22, 190);
addHuman('Eugeni', 23, 170);
addHuman('Kristina', 22, 160);
addHuman('Alexander', 21, 167);
addHuman('Kirill', 22, 187);
addHuman('Marina', 29, 160);
console.log(humans);

function SortByParam(humans, par) {
  let _humans = humans;
  let hs = [];
  for (let i = 0; i < _humans.length - 1; i++) {
    for (let j = i + 1; j < _humans.length; j++) {
      let aaa = _humans[i][par];
      let bbb = _humans[j][par];
      if (_humans[j][par] < _humans[i][par]) {
        let temp = _humans[i];
        _humans[i] = _humans[j];
        _humans[j] = temp;
      }
    }
    hs = _humans;
  }
  hs = _humans;
  return _humans;
}

let humansSortByName = SortByParam(humans, 'name');
console.log('Sort by name: \n' + getInfoPeople(humansSortByName));
let humansSortByAge = SortByParam(humans, 'age');
console.log('Sort by age: \n' + getInfoPeople(humansSortByAge));
let humansSortByHeight = SortByParam(humans, 'height');
console.log('Sort by height: \n' + getInfoPeople(humansSortByHeight));

let currentDate = new Date();
console.log(currentDate);

let _date = new Date(1970, 0, 1);
console.log(_date);

let currentDate_date = Math.abs(currentDate.getTime() - _date.getTime());
console.log(Math.ceil(currentDate_date/1000));


function sum(a) {
  let result = a;

  function f(b) {
    result += b;
    return f;
  }

  f.toString  = function() {
    return result;
  }
  return f;
}

console.log(sum(2)(3)(4).toString());

function sum2(arr) {
  let res = 0;
  for (let item in arr) {
    res += arr[item];
  }
  return res;
}

console.log(sum2([2,4,5]));
