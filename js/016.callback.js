/* 
Словами автора. Callback - функция которая начала свое выполнение, только когда завершила выполнение дргуая нужная нам функция.
 */
'use strict';

function firstFunc(arg, callback) {
  console.log(`Это первая функция ${arg}`);
  callback();
};

firstFunc('с коллбеком', function() {
  console.log('А это фторая функция');
});

// При передачи callback функции, ее нужно передавать без вызова, она же вызывается внутрипервой функции.
function firstFunc_(arg, callback) {
  console.log(`Это первая функция ${arg}`);
  callback();
};

function secondFunc_() {
  console.log('А это фторая функция');
};

firstFunc_('с коллбеком', secondFunc_);