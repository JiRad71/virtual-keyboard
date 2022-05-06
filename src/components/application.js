import Control from "../utils/control";
import Keyboard from "./keyboard";

class Application extends Control {
    constructor(parentNode){
        super(parentNode, 'div', 'page');
        this.keyboard = new Keyboard(this.node);
    }
}

export default Application