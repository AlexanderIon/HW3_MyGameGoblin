export default class Goblin {
  constructor(fields) {
    this.fields = fields;
  }

  movingdGoblin() {
    const boxes = this.fields.querySelectorAll('.box');
    const active = this.fields.querySelector('.box_active');

    if (active === null) {
      // console.log('Start');

      boxes[Math.floor(Math.random() * 16)].classList.add('box_active');
    } else {
      const boxId = Number(active.dataset.id);
      let item = Math.floor(Math.random() * 16);

      active.classList.remove('box_active');

      if (boxId === item) {
        // console.log(`ПОвтор ${boxId} ${item}`)
        item = Math.floor(Math.random() * 4);
      }

      boxes[item].classList.add('box_active');
    }
  }
}
