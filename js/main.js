"use strict"

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
};

class Student extends User {
  constructor(name, course) {
    super(name);
    this.course = course;

  }

  getCourse() {
    return this.course;
  }
};
let people = [];

function addMan(man) {
  people.push(man);
}

function getInfoPeople(people) {
  let info = '';

  for (let man = 0; man < people.length; man++) {
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(man+1 + '.) '));
    let div = document.getElementById('divId');
    div.appendChild(p);
    let p2 = document.createElement('p');
    for (let key in people[man]) {
      p2.style.color = 'red';
      info = key + ' : ' + people[man][key];
      p2.appendChild(document.createTextNode(info));
      div.appendChild(p2);
    }
  }
  return info;
}

let alex = new Student('alex', 5);
let alexfather = new User('serj');
addMan(alex);
addMan(alexfather);

let infoPeople = getInfoPeople(people);
//=======================================================

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'inputId');
input.setAttribute('onkeyup', 'toUpperCaseText(this)');
document.getElementById('divId').appendChild(input);
function toUpperCaseText(el) {
  if(!el || !el.value) return;
    el.value = el.value.toUpperCase();
};
let h3 = document.getElementsByTagName('h3')[0].innerHTML.toUpperCase();

//console.log(infoPeople);

//let p = document.createElement('p');
//p.appendChild(document.createTextNode(infoPeople));
//let div = document.getElementById('divId');
//div.appendChild(p);
