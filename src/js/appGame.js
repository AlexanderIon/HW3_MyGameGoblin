const { default: AlertResult } = require('./alertResult/alertResult.js');
const { default: FieldGame } = require('./fieldGame/fielGame.js');
const { default: Goblin } = require('./goblin/goblin.js');

document.addEventListener('DOMContentLoaded', () => {
  const fiedls = document.querySelector('.fieldGame');
  const myGame = document.querySelector('.game');

  const count = document.querySelector('.count');
  const miss = document.querySelector('.miss');
  const gonlin = new Goblin(fiedls);
  const boxes = new FieldGame('.fieldGame');
  const ShowResalt = new AlertResult(myGame);

  let statusGame = true;
  // btn.addEventListener('click', () => {
  //   statusGame = !statusGame;

  //   if (statusGame) {
  //     btn.style.backgroundColor = ['red'];
  //     btn.textContent = 'STOP';
  //   } else {
  //     btn.style.backgroundColor = ['green'];
  //     btn.textContent = 'STAR';
  //   }

  //   const game = setInterval(() => {
  //     gonlin.movingdGoblin();
  //     count.textContent = `СЧЕТ : ${boxes.count}`;
  //     miss.textContent = `ПРОМАХ : ${boxes.miss}`;

  //     if (!statusGame || boxes.miss > 4) {
  //       boxes.count = 0;
  //       boxes.miss = 0;
  //       btn.style.backgroundColor = ['green'];
  //       btn.textContent = 'START';
  //       clearInterval(game);
  //     }
  //   }, 1000);
  // });
  //  console.log(boxes.element)
  document.addEventListener('click', (e) => {
    if (e.target.id === 'rest_game') {
      statusGame = true;
      const game = setInterval(() => {
        gonlin.movingdGoblin();
        count.textContent = `СЧЕТ : ${boxes.count}`;
        miss.textContent = `ПРОМАХ : ${boxes.miss}`;

        if (!statusGame || boxes.miss > 4) {
          boxes.count = 0;
          boxes.miss = 0;
          // btn.style.backgroundColor = ['green'];
          // btn.textContent = 'START';
          ShowResalt.addElement('ТЫ промазал 5 раз');
          clearInterval(game);
        }
      }, 1000);
    }
  });
  const game = setInterval(() => {
    gonlin.movingdGoblin();
    count.textContent = `СЧЕТ : ${boxes.count}`;
    miss.textContent = `ПРОМАХ : ${boxes.miss}`;

    if (!statusGame || boxes.miss > 4) {
      boxes.count = 0;
      boxes.miss = 0;
      // btn.style.backgroundColor = ['green'];
      // btn.textContent = 'START';
      ShowResalt.addElement('ТЫ промазал 5 раз');
      clearInterval(game);
    }
  }, 1000);
});
