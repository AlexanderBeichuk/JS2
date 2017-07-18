function Element(id, name, classname, parent) {
  this.id = id;
  this.element = document.createElement(name);
  if (name === 'input') {
    this.element.setAttribute('type', 'button');
    this.element.setAttribute('value', '  ');
  }
  this.element.setAttribute('id', this.id);
  this.element.setAttribute('class', classname);
  parent.appendChild(this.element);
}

(function game() {
  let namePlayer1 = '';
  let namePlayer2 = '';
  let arrPlayer1 = [];
  let arrPlayer2 = [];

  let player = 'X';
  let step = 0;
  inputInfo();
  let buttons = [];

  function start() {
    outputResult('The '+ namePlayer1 +'...');
    let restartbtn = document.getElementById('restart');
    restartbtn.onclick = function() {
      restart();
    };
    for (let button in buttons) {
      let btn = document.getElementById(buttons[button].id);
      btn.onclick = function() {
        btn.setAttribute('value', player);
        step++;
        if (player === 'X') {
          arrPlayer1.push(buttons[button].id);
          //console.log(step +': ' + 'Player 1 key --> ' + buttons[button].id);
          outputResult('The ' + namePlayer1 + ' ...', step, namePlayer1, ' key --> ', buttons[button].id);
          if (checkWin(arrPlayer1)) {
            outputResult(namePlayer1 + ' Winner!!!', step, namePlayer1, 'Winner!!!', '');
            //console.log('!!!Player 1 Winner!!!');
            return ;
          }
          player = 'O';
        } else {
          arrPlayer2.push(buttons[button].id);
          //console.log(step +': ' + 'Player 2 key --> ' + buttons[button].id);
          outputResult('The ' + namePlayer2 + ' ...', step, namePlayer2, ' key --> ', buttons[button].id);
          if (checkWin(arrPlayer2)) {
            outputResult(namePlayer2 + ' Winner!!!', step, namePlayer2, 'Winner!!!', '');
            //console.log('!!!Player 2 Winner!!!');
            return ;
          }
          player = 'X';
        }
        btn.disabled = true;
        if (step === 9) {
          outputResult('Fighting draw!!!', 'draw');
        }
      }
    }
    return ;
  }

  function createSquare() {
    let elements = [];

    function  addButton(element) {
      elements.push(element);
    }

    let div = document.getElementById('divId');

    addButton(new Element(1, 'input', 'button', div));
    addButton(new Element(2, 'input', 'button', div));
    addButton(new Element(3, 'input', 'button', div));
    new Element('br2', 'br', '', div);
    addButton(new Element(4, 'input', 'button', div));
    addButton(new Element(5, 'input', 'button', div));
    addButton(new Element(6, 'input', 'button', div));
    new Element('br3', 'br', '', div);
    addButton(new Element(7, 'input', 'button', div));
    addButton(new Element(8, 'input', 'button', div));
    addButton(new Element(9, 'input', 'button', div));

    new Element('br4', 'br', '', div);
    new Element('br5', 'br', '', div);

    let result = new Element('result', 'p', 'output', div);
    let restartbtn = new Element('restart', 'a', 'obl', div);
    let steps = new Element('steps', 'p', 'output', div);

    restartbtn.element.appendChild(document.createTextNode('Restart'));
    return elements;
  }

  function checkWin(arrPlayer) {
    let arrWin = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    let _arrPlayer = arrPlayer.sort(function(a, b) {
                      if (a > b) return 1;
                      if (a < b) return -1;
                    }
    );

    for (let comb in arrWin) {
      let check = 0;
      for (let number in arrPlayer) {
        if (arrWin[comb][0] === arrPlayer[number] ||
          arrWin[comb][1] === arrPlayer[number] || arrWin[comb][2] === arrPlayer[number]) {
          check++;
        }
        if (check === 3) {
          return true;
        }
      }
    }
      return false;
  }

  function restart() {
    step = 0;
    arrPlayer1 = [];
    arrPlayer2 = [];
    console.clear();
    player = 'X';
    outputResult('The '+ namePlayer1 +'...');
    for (let button in buttons) {
      let btn = document.getElementById(buttons[button].id);
      btn.setAttribute('value', '  ');
      btn.disabled = false;
    }
  }

  function outputResult(text, ...info) {
    document.getElementById('result').innerHTML = text;
    if (info.length === 0) {
      document.getElementById('steps').innerHTML = '';
    } else  if (info[0] != 'draw'){
      document.getElementById('steps').innerHTML += info[0] +': ' + info[1] + ' ' + info[2] + info[3] + "<br/>";
    }
  }

  function inputInfo() {
    let numberPlayer = 1;
    let div = document.getElementById('divId');

    let txt = new Element('txt', 'p', 'txt', div);
    txt.element.innerHTML = 'Name first player :';

    let nameplayer = new Element('player', 'input', 'player', div);
    nameplayer.element.setAttribute('type', 'text');
    nameplayer.element.setAttribute('placeholder', 'Your name...');
    nameplayer.element.setAttribute('onkeyup', 'toUpperCaseText(this)');
    nameplayer.element.value = '';
    nameplayer.element.focus();

    let br = new Element('br', 'br', '', div);
    let br1 = new Element('br1', 'br', '', div);
    let setInfo = new Element('setInfo', 'a', 'obl', div);
    setInfo.element.appendChild(document.createTextNode('Continue'));
    setInfo.element.onclick = function() {
      if (numberPlayer === 1) {
        namePlayer1 = nameplayer.element.value;
        txt.element.innerHTML = 'Name second player :';
        nameplayer.element.value = '';
        nameplayer.element.focus();
        numberPlayer++;
      } else {

        namePlayer2 = nameplayer.element.value;
        div.removeChild(txt.element);
        div.removeChild(br.element);
        div.removeChild(br1.element);
        div.removeChild(nameplayer.element);
        div.removeChild(setInfo.element);
        buttons = createSquare();
        start();
      }
    }
  }
}());

function toUpperCaseText(el) {
  if(!el || !el.value) return;
    el.value = el.value.toUpperCase();
};
dsfdsfdsf dfsf
fsdfdsfds
fdsf
dsf
sdfds
fds
fdsfdsdfsdfdsfdsf
aaaaaaa
