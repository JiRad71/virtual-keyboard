import Control from "../utils/control";
import Button from "./button";

class Row extends Control {
    constructor(parentNode, data){
        super (parentNode, 'div', 'keyboard-row');
        data.forEach((button) => {
            const btn = new Button (this.node, button.classname, button.val);
            btn.node.onclick = () => {
                console.log(btn.node.textContent)
            }
        });
    }
}

export default Row;