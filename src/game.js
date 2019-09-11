import * as readline from 'readline';

export default class Game {
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
      prompt: 'Введите число > ',
    });
    rl.prompt();
    rl.on('line', (line) => {
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
