"use strict";

// // question

// accum('abcd') -> 'A-Bb-Ccc-Dddd'
//
// accum('cwAt') -> "C-Ww-Aaa-Tttt"

function accum(str) {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    const cap = str[i].toUpperCase();
    const repeat = str[i].repeat(i).toLowerCase();
    const letter = cap + repeat;

    newArr.push[letter];

    // newArr.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i))
  }

  return newArr.join("-");
}
console.log(accum("abcd"));

// accum('RqaEzty') -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function accumulation(string) {
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    const capLetter = string[i].toUpperCase();
    const smallLetter = string[i].toLowerCase().repeat(i);
    const result = capLetter + smallLetter;

    arr.push(result);
    // arr.push(string[i].toUpperCase() + string[i].toLowerCase().repeat(i));
  }
  return arr.join("-");
}

console.log(accumulation("RqaEzty"));
