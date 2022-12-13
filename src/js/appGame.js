const { FieldGame } = require('./fieldGame/fielGame.js');
const { default: Goblin } = require('./goblin/goblin.js');

document.addEventListener('DOMContentLoaded', () => {
  const fiedls = document.querySelector('.fieldGame');
  const btn = document.querySelector('.activeGoblinBtn');
  let count = document.querySelector('.count')
  let miss = document.querySelector('.miss')
  const gonlin = new Goblin(fiedls);
  const boxes = new FieldGame('.fieldGame')
  let statusGame = false;
  let game = 0
  // btn.style.cursor = " grab"
  // count.textContent = boxes.count
  
  btn.addEventListener('click', () => {
    
    statusGame =! statusGame;
    
    if (statusGame){
      btn.style.backgroundColor = ['red']
      btn.textContent = "STOP"
    }else{
      btn.style.backgroundColor = ['green']
      btn.textContent = "STAR"
    }
    

      const game = setInterval(() => {
        gonlin.movingdGoblin();
        count.textContent = `СЧЕТ : ${boxes.count}`
        miss.textContent = `ПРОМАХ : ${boxes.miss}`

        if (!statusGame || boxes.miss > 4) {
          boxes.count = 0;
          boxes.miss = 0;
          btn.style.backgroundColor = ['green']
          btn.textContent = "START"
          clearInterval(game)
        }
               
      }, 2400);
   });
  //  console.log(boxes.element)


});
