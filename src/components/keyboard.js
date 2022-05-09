import Control from "../utils/control";
import Button from "./button";

 export const btn = [
    [
      { classname: "keyboard-button", val: "`", enUp: "~", ru: "ё", ruUp: "Ё", code: "Backquote" },
      { classname: "keyboard-button", val: "1", enUp: "!", ru: "1", ruUp: "!", code: "Digit1" },
      { classname: "keyboard-button", val: "2", enUp: "@", ru: "2", ruUp: "\"", code: "Digit2" },
      { classname: "keyboard-button", val: "3", enUp: "#", ru: "3", ruUp: "№", code: "Digit3" },
      { classname: "keyboard-button", val: "4", enUp: "$", ru: "4", ruUp: ";", code: "Digit4" },
      { classname: "keyboard-button", val: "5", enUp: "%", ru: "5", ruUp: "%", code: "Digit5" },
      { classname: "keyboard-button", val: "6", enUp: "^", ru: "6", ruUp: ":", code: "Digit6" },
      { classname: "keyboard-button", val: "7", enUp: "&", ru: "7", ruUp: "?", code: "Digit7" },
      { classname: "keyboard-button", val: "8", enUp: "*", ru: "8", ruUp: "*", code: "Digit8" },
      { classname: "keyboard-button", val: "9", enUp: "(", ru: "9", ruUp: "(", code: "Digit9" },
      { classname: "keyboard-button", val: "0", enUp: ")", ru: "0", ruUp: ")", code: "Digit0" },
      { classname: "keyboard-button", val: "-", enUp: "_", ru: "-", ruUp: "_", code: "Minus" },
      { classname: "keyboard-button", val: "=", enUp: "+", ru: "=", ruUp: "+", code: "Equal" },
      { classname: "keyboard-button keyboard-long", val: "Backspace", ru: "Backspace", code: "Backspace", type: "functional" }
    ],
    [
      { classname: "keyboard-button keyboard-long", val: "Tab", ru: "Tab", code: "Tab", type: "functional" },
      { classname: "keyboard-button", val: "q", enUp: "Q", ru: "й", ruUp: "Й", code: "KeyQ" },
      { classname: "keyboard-button", val: "w", enUp: "W", ru: "ц", ruUp: "Ц", code: "KeyW" },
      { classname: "keyboard-button", val: "e", enUp: "E", ru: "у", ruUp: "У", code: "KeyE" },
      { classname: "keyboard-button", val: "r", enUp: "R", ru: "к", ruUp: "К", code: "KeyR" },
      { classname: "keyboard-button", val: "t", enUp: "T", ru: "е", ruUp: "Е", code: "KeyT" },
      { classname: "keyboard-button", val: "y", enUp: "Y", ru: "н", ruUp: "Н", code: "KeyY" },
      { classname: "keyboard-button", val: "u", enUp: "U", ru: "г", ruUp: "Г", code: "KeyU" },
      { classname: "keyboard-button", val: "i", enUp: "I", ru: "ш", ruUp: "Ш", code: "KeyI" },
      { classname: "keyboard-button", val: "o", enUp: "O", ru: "щ", ruUp: "Щ", code: "KeyO" },
      { classname: "keyboard-button", val: "p", enUp: "P", ru: "з", ruUp: "З", code: "KeyP" },
      { classname: "keyboard-button", val: "[", enUp: "{", ru: "х", ruUp: "Х", code: "BracketLeft" },
      { classname: "keyboard-button", val: "]", enUp: "}", ru: "ъ", ruUp: "Ъ", code: "BracketRight" },
      { classname: "keyboard-button", val: "\\",enUp: "|", ru: "\\", ruUp: "/", code: "Backslash" },
      { classname: "keyboard-button keyboard-long", val: "Del", ru: "Del", code: "Delete", type: "functional" }
    ],
    [
      { classname: "keyboard-button keyboard-long", val: "CapsLock", ru: "CapsLock", code: "CapsLock", type: "functional" },
      { classname: "keyboard-button", val: "a", enUp: "A", ru: "ф", ruUp: "Ф", code: "KeyA" },
      { classname: "keyboard-button", val: "s", enUp: "S", ru: "ы", ruUp: "Ы", code: "KeyS" },
      { classname: "keyboard-button", val: "d", enUp: "D", ru: "в", ruUp: "В", code: "KeyD" },
      { classname: "keyboard-button", val: "f", enUp: "F", ru: "а", ruUp: "А", code: "KeyF" },
      { classname: "keyboard-button", val: "g", enUp: "G", ru: "п", ruUp: "П", code: "KeyG" },
      { classname: "keyboard-button", val: "h", enUp: "H", ru: "р", ruUp: "Р", code: "KeyH" },
      { classname: "keyboard-button", val: "j", enUp: "J", ru: "о", ruUp: "О", code: "KeyJ" },
      { classname: "keyboard-button", val: "k", enUp: "K", ru: "л", ruUp: "Л", code: "KeyK" },
      { classname: "keyboard-button", val: "l", enUp: "L", ru: "д", ruUp: "Д", code: "KeyL" },
      { classname: "keyboard-button", val: ";", enUp: ":", ru: "ж", ruUp: "Ж", code: "Semicolon" },
      { classname: "keyboard-button", val: "'", enUp: "\"",ru: "э",ruUp: "Э", code: "Quote" },
      { classname: "keyboard-button keyboard-long", val: "Enter", ru: "Enter", code: "Enter" , type: "functional"}
    ],
    [
      { classname: "keyboard-button keyboard-long", val: "Shift", ru:"Shift", code: "ShiftLeft", type: "functional" },
      { classname: "keyboard-button", val: "z", enUp: "Z", ru: "я", ruUp: "Я", code: "KeyZ" },
      { classname: "keyboard-button", val: "x", enUp: "X", ru: "ч", ruUp: "Ч", code: "KeyX" },
      { classname: "keyboard-button", val: "c", enUp: "C", ru: "с", ruUp: "С", code: "KeyC" },
      { classname: "keyboard-button", val: "v", enUp: "V", ru: "м", ruUp: "М", code: "KeyV" },
      { classname: "keyboard-button", val: "b", enUp: "B", ru: "и", ruUp: "И", code: "KeyB" },
      { classname: "keyboard-button", val: "n", enUp: "N", ru: "т", ruUp: "Т", code: "KeyN" },
      { classname: "keyboard-button", val: "m", enUp: "M", ru: "ь", ruUp: "Ь", code: "KeyM" },
      { classname: "keyboard-button", val: ",", enUp: "<", ru: "б", ruUp: "Б", code: "Comma" },
      { classname: "keyboard-button", val: ".", enUp: ">", ru: "ю", ruUp: "Ю", code: "Period" },
      { classname: "keyboard-button", val: "/", enUp: "?", ru: ".", ruUp: ",", code: "Slash" },
      { classname: "keyboard-button", val: "↑", ru: "↑", code: "ArrowUp" },
      { classname: "keyboard-button keyboard-long-fixed", val: "Shift", ru: "Shift", code: "ShiftRight" , type: "functional"}
    ],
    [
      { classname: "keyboard-button", val: "Ctrl", ru: "Ctrl", code: "ControlLeft", type: "functional" },
      { classname: "keyboard-button", val: "Win",ru: "Win", code: "MetaLeft" , type: "functional"},
      { classname: "keyboard-button", val: "Alt",ru: "Alt", code: "AltLeft", type: "functional" },
      { classname: "keyboard-button keyboard-long",   val: " ", enUp: " ", ru: " ", ruUp: " ", code: "Space" },
      { classname: "keyboard-button", val: "Alt", ru: "Alt", code: "AltRight", type: "functional" },
      { classname: "keyboard-button", val: "←",ru: "←", code: "ArrowLeft", type: "functional" },
      { classname: "keyboard-button", val: "↓",ru: "↓", code: "ArrowDown", type: "functional" },
      { classname: "keyboard-button", val: "→",ru: "→", code: "ArrowRight", type: "functional" },
      { classname: "keyboard-button", val: "Ctrl", ru: "Ctrl", code: "ControlRight" , type: "functional"}
    ]
  ]
  
class Keyboard extends Control {
    constructor(parentNode){
        super(parentNode, 'div', 'keyboard-area')
        this.textArea = new Control (this.node, 'textarea', 'textarea');
        }
        setInputTextarea(val){
          this.textArea.node.textContent+=val;
        }
        renderButtons(data, lang){
          console.log(data) 
          data.forEach((_,i)=>{
            const row = new Control (this.node, 'div', 'keyboard-row');
            data[i].forEach((btn)=>{
             const button = new Button(row.node, btn.classname, btn[lang]);
             button.node.onclick= ()=>{
               if(!btn.type) this.setInputTextarea(btn[lang]);
             }
            })
          })
        }
    }


export default Keyboard;