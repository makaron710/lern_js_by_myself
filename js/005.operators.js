/* 
Унарный плюс
+'str'
+5
который идет перед чем-то, без пробела
*/

/* 
Инкермент
Декримент
*/

{ // постфиксные
  let inc = 10,
      dec = 10;
  inc++;
  dec--;
  console.log(inc);
  console.log(dec);
}

{ // префиксные
  let inc = 10,
      dec = 10;
  ++inc;
  --dec;
  console.log(inc);
  console.log(dec);
}

// их различие можно увидеть здесь
{
  let inc = 10,
      dec = 10,
      inc2 = 10,
      dec2 = 10;
  console.log(inc++);
  console.log(dec--); // сначала операция, потом инкр/декр
  console.log(++inc2);
  console.log(--dec2); // сначала инкр/декр, потом операция
}

/* 
% - остаток от деления -- понятно
равенства - строго ===, не строгое == -- понятно
&& - и -- понятно
|| - или -- понятно
! - отрицание -- понятно
!=/!== - не равно -- понятно
*/

/* 
Приоритет операторов
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/

/* 
Побитовые операторы
https://learn.javascript.ru/bitwise-operators
*/