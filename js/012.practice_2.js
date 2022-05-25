/* 
continuation 009

Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

switch(true) { // вот так вот можно, чтобы не плодить else if и сравнение использовать в switch case
  case(numberOfFilms < 10):
    alert('Этого мало, но...');
    break;
  case(numberOfFilms >= 10 && numberOfFilms <= 30):
    alert('Ну норм.');
    break;
  case(numberOfFilms > 30):
    alert('Киноман');
    break;
  default:
    alert('Вы что-то не так ввели, но пока что это не важно.');
    break;
};

const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
};

let oneOfLastFilm,
    yourRate;

for(let i = 1; i <= 2; i++) {
  while(oneOfLastFilm == null || oneOfLastFilm.length == 0 || oneOfLastFilm.length > 50) {
    oneOfLastFilm = prompt('Один из последних просмотренных фильмов?', '');
  }
  yourRate = prompt('На сколько оцените его?', '');
  
  personalMoveDB.movies[oneOfLastFilm] = yourRate;
  oneOfLastFilm = null;
}

// Пытался сделать без while, но не дошло, как.
/* for(let i = 1; i <= 2; i++) {
  if(oneOfLastFilm == null || oneOfLastFilm.length == 0 || oneOfLastFilm.length > 50) {
    oneOfLastFilm = prompt('Один из последних просмотренных фильмов?', '');
  }
  yourRate = prompt('На сколько оцените его?', '');
  
  personalMoveDB.movies[oneOfLastFilm] = yourRate;
}; */

console.log(personalMoveDB);



/* 
Ответ автора задания.

я был на верном пути, но немного не дожал.
*/

// 'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// // 3-е задание автор сделал с if else if else if else...

// const personalMoveDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privet: false
// };

// let oneOfLastFilm,
//     yourRate;

// // Пытался сделать без while, но не дошло, как.
// for(let i = 1; i <= 2; i++) {
//   oneOfLastFilm = prompt('Один из последних просмотренных фильмов?', '');
//   yourRate = prompt('На сколько оцените его?', '');

//   if(oneOfLastFilm != null && oneOfLastFilm.length != 0 && oneOfLastFilm.length <= 50) {
//     personalMoveDB.movies[oneOfLastFilm] = yourRate;
//   } else {
//     i--;
//   }

  
// };

// console.log(personalMoveDB);