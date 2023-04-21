export default class AlertResult {
  constructor(parentEl) {
    this.parentEl = parentEl;
    // this.clickRestart = this.clickRestart.bind(this);
  }

  static get getHtml() {
    return `
        
    <div class="alert_result">
        <div class="result_game"></div>
            <button class="btn_restart" id="rest_game">НАЧАТЬ </button>

        </div>

    </div>
        `;
  }

  static get selector() {
    return '.alert_result';
  }

  static get massage() {
    return '.result_game';
  }

  static get btnRest() {
    return '.btn_restart';
  }

  addElement(result) {
    this.parentEl.insertAdjacentHTML('afterbegin', AlertResult.getHtml);
    this.resultGame = this.parentEl.querySelector(AlertResult.massage);
    this.resultGame.textContent = result;
    this.btnRest = this.parentEl.querySelector(AlertResult.btnRest);
    this.btnRest.addEventListener('click', (e) => {
      e.preventDefault();
      const myAlret = document.querySelector(AlertResult.selector);
      myAlret.parentNode.removeChild(myAlret);
    });
  }

  // clickRestart(e) {
  //   e.preventDefault();
  //   const myAlret = document.querySelector(AlertResult.selector);
  //   myAlret.parentNode.removeChild(myAlret);
  // }
}
