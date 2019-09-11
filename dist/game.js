"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var readline = _interopRequireWildcard(require("readline"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Game {
  constructor(randomFn) {
    this.randomFn = randomFn;
    this.randomNum = randomFn();
  }

  compareNum(inputNum) {
    if (inputNum.length < 4 || inputNum.length > 4) return 'В числе должно быть 4 знака';
    let result = '';

    for (let i = 0; i < inputNum.length; i += 1) {
      if (inputNum[i] === this.randomNum[i]) {
        result = `B${result}`;
      } else if (this.randomNum.includes(inputNum[i])) {
        result = `${result}K`;
      }
    }

    return result;
  }

  start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Введите число > '
    });
    rl.prompt();
    rl.on('line', line => {
      const str = this.compareNum(line.trim());

      switch (str) {
        case 'BBBB':
          console.log(`| ${str} | ПОЗДРАВЛЯЕМ! Угаданно верно!`);
          this.randomNum = this.randomFn();
          console.log('\nНовая игра! Для выхода из игры нажмите Ctrl + C');
          break;

        default:
          console.log(`| ${str} | Попробуй еще раз.`);
          break;
      }

      rl.prompt();
    }).on('close', () => {
      console.log('\n\n  === Спасибо за игру! === \n');
      process.exit(0);
    });
  }

}

exports.default = Game;