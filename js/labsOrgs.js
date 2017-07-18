//function Employer(name, department, phone, salary) {
//  this.name = name;
//  this.department = department;
//  this.phone = phone;
//  this.salary = salary;
//  this.getInfo = function() {
//    return this.name + '--' + this.department + '--' +
//      this.phone + '--' + this.salary +'.';
//  }
//}

//let employer1 = new Employer('alex', 'programming', '+375(44)5369091', 300);
//console.log(employer1.getInfo());

console.log('Объект-коллекция\n');
let employer = new Object();
employer.name = 'alex';
employer.department = 'programming';
employer.phone = '+375(44)5369091';
employer.salary = 300;
function getInfo(empl) {
  let str = '';
  for (let key in empl) {
    str +=  key + ' : ' + empl[key] + '\n';
  }
  return str;
}

console.log(getInfo(employer));


function MenuItem(title, url) {
  this.title = title;
  this.url = url;
  this.show = function() {
    return this.title + ' : ' + this.url;
  }
}

//function addMenuItem(number) {
//  let title = prompt('Title _' + count + ':', '');
//  let url = prompt('URL_'  + count + ':', '');
//  return new MenuItem(title, url);
//}

function addMenuItems() {
  let menuItems = [];
  let count = prompt('Количество пунктов меню:', '');
  for (let i = 0; i < count; i++) {
    //let newMenuItem = addMenuItem(i + 1);
    function addMenuItem() {
      let title = prompt('Title _' + (i+1) + ':', '');
      let url = prompt('URL_'  + (i+1) + ':', '');
      return new MenuItem(title, url);
    }
    let newMenuItem = addMenuItem();
    menuItems.push(newMenuItem);
  }
  return menuItems;
}

function getMenuItems(arrMenuItem) {
  let div = document.getElementById('divId');
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 0; i < arrMenuItem.length; i++) {
    let li = document.createElement('li');
    let info = document.createTextNode(arrMenuItem[i].show());
    li.appendChild(info);
    ul.appendChild(li);
  }
}

getMenuItems(addMenuItems());

function fibonachi(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  arr.splice(0, 1);
  return arr;
}

console.log(fibonachi(5));
//for (option in navigator){
//	document.write(option + ' : ' + navigator[option]+ ' <br />');
//}
