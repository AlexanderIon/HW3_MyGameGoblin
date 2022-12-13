export class FieldGame {
    constructor(element) {
        if (typeof element === 'string'){
            element = document.querySelector(element)
        }

        this.element = element;
        this.onclickBox = this.onclickBox.bind(this);
        this.element.addEventListener('click', this.onclickBox)
        this.count = 0
        this.miss = 0;
        
    }
    onclickBox(e){
        if(e.target.classList.contains('box_active')) {
            this.count += 1
        }else{
            this.miss +=1;
        }
        console.log('click')
        // this.element.style.cursor = '/molot_down.png'
        setTimeout(()=> {
            // this.element.style.cursor = url('/molot_up.png')
        },300)
        // this.element.style.cursor = 'pointer'
        
    }
    
    




}