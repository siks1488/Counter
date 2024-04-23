const dec = document.querySelector(`.decrease`);
const res = document.querySelector(`.reset`);
const inc = document.querySelector(`.increase`);
const o2 = document.querySelector(`.max2`);


let text = document.querySelector(`.text`);

 counterValue = 0;

function update(){
    text.textContent = counterValue;
}

function decrease (){
    counterValue--;
    update();
}

function reset(){
    counterValue = 0;
    update();
}
function increase(){
    counterValue++;
    update();
}

function imp2(){
    counterValue *=2;
    update();
}

dec.addEventListener('click', decrease);
res.addEventListener(`click`,reset);
inc.addEventListener(`click`,increase);
o2.addEventListener(`click`,imp2);