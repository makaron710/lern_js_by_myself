'use strict';

/* 
Типы данных

# Простые
числа - не больше, чем 2**53-1
строки
boolean - true/false
null - нет вообще ничего
undefined - нет значения
Symbol - 
BigInt - может быть больше, чем 2**53-1

# Комплексные (объекты)
## Специальные
массивы
функции
даты
regexp
ошибки
## Обычные
*/

/* 
Числа
*/
{
  let a = 4.4;

  let b = Infinity; // например, при делении на ноль
  console.log('-4 / 0: ', -4 / 0);

  let c = NaN; // например, при участии в выражении чисел и не чисел
  console.log('4 / \'str\': ', 4 / 'str');

  // BigInt
  const min = Number.MIN_SAFE_INTEGER;
  console.log(min); // -9007199254740991
  const max = Number.MAX_SAFE_INTEGER;
  console.log(max); // 9007199254740991 или 2**53–1
  console.log(max + 1); // 9007199254740992
  console.log(max + 2); // 9007199254740992 -- точность это не про js
  // Чтобы сделать BigInt, надо в конце числа поставить n.
  // И при вычислениях нужно в конце каждого числа ставить n.
  console.log(typeof 123n); // bigint
  console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n); 
  // только так ^^^^ если хотим использовать глобальные объекты, не поставишь же n
  // тогда норма, все четко - 9007199254740993n
  console.log(9007199254740997 * 2);
  //         18014398509481990
  // не норм
  console.log(9007199254740997n * 2n);
  //         18014398509481994n -- все ровно

  console.log(42n == 42); // true
  console.log(42n === 42); // false

  console.log(41n + 42); // TypeError
  console.log(41n < 42); // true
}

/* 
Строка, boolean - тут пока все просто
*/

/* 
null
*/
{
  console.log(someVar); // ReferenceError - ошибка ссылочного типа, не можем сослаться на несуществующий объект
  console.log(typeof(null)); // или можно без скобок // object -- это признанная ошибка
}

/* 
undefined
*/
{
  let someVar;
  console.log(someVar); // undefined
}

/* 
Symbol, BigInt - будут разобраны потом
*/

/* 
Объект объект
*/
{
  const OBJ = {
    // объект содержит свойства (элементы) и методы (действия) -- но это потом
    // ключ/свойство: значение
    name: 'имя',
    someNum: 3,
    isExist: true // это все свойства
  };

  // способы доступа к свойствам
  console.log(OBJ.isExist);
  console.log(OBJ['someNum']); // но дучше через точку, хз почему
}

/* 
Объект массив
*/
{
  let arr = ['one', 'two', 'three', 4, 5, {someProp: 1}, [1, 2]]; // так норма
  console.log(arr);
}