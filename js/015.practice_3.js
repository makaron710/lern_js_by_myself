/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == null || numberOfFilms.length == 0 || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  }
};

start();

const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
};

function rememberMyFilms() {
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
};

rememberMyFilms();

function detectPersonalLevel() {
  switch(true) {
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
};

detectPersonalLevel();

/* =============== 2 =============== */
function showMyDB() { // а еще лучше прнимать аргумент, впрочем, как и в других функциях...
  return !personalMoveDB.privet ? console.log(personalMoveDB) : false;
};

showMyDB();
/* =============== /2 =============== */

/* =============== 3 =============== */
function writeYourGenres() {
  let genre;

  for(let i = 1; i < 4; i++) {
    while(genre == null || genre.length == 0) {
      genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      personalMoveDB.genres.push(genre);
    }
    genre = '';
  }
};

writeYourGenres(personalMoveDB);

console.log();
/* =============== /3 =============== */