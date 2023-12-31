class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListener();
    }

    // Attaching Custom Logic For 4 key movement 
    #addKeyboardListener(){
        document.onkeydown = (event)=>{
            switch(event.key){
                case  "ArrowLeft" :
                    this.left = true;
                    break;
                case  "ArrowRight" :
                    this.right = true;
                    break;
                case  "ArrowUp" :
                    this.forward = true;
                    break;

                case  "ArrowDown" :
                    this.forward = true;
                    break;
            }
            console.table(this);
        }


        document.onkeyup = (event)=>{
            switch(event.key){
                case  "ArrowLeft" :
                    this.left = false;
                    break;
                case  "ArrowRight" :
                    this.right = false;
                    break;
                case  "ArrowUp" :
                    this.forward = false;
                    break;

                case  "ArrowDown" :
                    this.forward = false;
                    break;
            }
            console.table(this);
        }
    }
}