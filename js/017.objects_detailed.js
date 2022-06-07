/* 

*/
'use strict';

// Старинный способ
const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    backgroud: 'red'
  }
};

console.log(options.name);

// Скажем нам нужно удалить свойство объекта
delete options.name;

console.log(options);

// Для перебора объекта (объекта - объекта) можно использовать for in
for(let key in options) {
  //console.log(key);
  options[key] = 'bag'; // В такой конструкции обратиться к свойству можно только через кв скобки
};

console.log(options);

// for of для массивов

// Методы объектов
const options_2 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    backgroud: 'red'
  }
};

console.log(Object.keys(options_2));
console.log(Object.keys(options_2).length);

// Пользовательские методы
const options_3 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    backgroud: 'red'
  },
  introduce: function() {
    console.log(this.name);
  }
};

options_3.introduce();

// Деструктуризация
const options_4 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    backgroud: 'red'
  }
};

// Чтоы, например, не заниматься такой фигней
options_4['colors']['border'];

// Можно сделать деструктуризацию объекта, т.е. разделить его на части, удобные для использования
const { border, backgroud } = options_4.colors;

console.log(border);