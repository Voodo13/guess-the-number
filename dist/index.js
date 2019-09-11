#!/usr/bin/env node
"use strict";

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const helloMessage = `
  ==== Угадай число ====

Правила игры:

  Компьютер загадывает 4-х значное число, цифры в числе могут повторяться, число
может начинаться с 0 (00, 000, 0000). Задача игрока угадать это число. Если
цифра присутствует в загаданном числе, и она стоит на том месте, то компьютер
обозначает такую цифру буквой "В". Если цифра присутствует, но она стоит не на
том месте, то компьютер обозначает ее буквой "K".
  Нужно угадать загаданное число за наименьшее число ходов.

Выход из игры Ctrl + C
`;
console.log(helloMessage);

const randomFn = () => {
  const getN = max => Math.floor(Math.random() * Math.floor(max));

  return `${getN(9)}${getN(9)}${getN(9)}${getN(9)}`;
}; // Game принимет на вход функцию которая возвращает строку с 4х значным числом,
// вынес её для тестирования и ввода не рандомных значений


const game = new _game.default(randomFn);
game.start();