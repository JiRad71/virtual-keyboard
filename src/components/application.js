import Control from "../utils/control";
import { btn } from "./keyboard";
import Keyboard from "./keyboard";


class Application extends Control {
    constructor(parentNode){
        super(parentNode, 'div', 'page');
        this.keyboard = new Keyboard(this.node);
        this.languages = ['val', 'ru'];
        this.keyboard.renderButtons(btn, this.languages[0]);
        let downButt = [];
        document.addEventListener("keydown", e=>{
         
            if (e.code == "ShiftLeft"|| e.code == "AltLeft"){
                downButt.push(e.code);
                console.log(downButt);
            }
            if (downButt.includes("ShiftLeft")&& downButt.includes("AltLeft")){
                const lang = this.languages[1]
                this.changLang(lang);
                const a = this.languages.shift();
                this.languages.push(a);
                downButt=[];
            }
        })
    }
    changLang(lang){
        this.keyboard.destroy();
        this.keyboard = new Keyboard(this.node);
        this.keyboard.renderButtons(btn, lang)

    }
}

export default Application