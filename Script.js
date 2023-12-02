const btnLeft = document.getElementById('left');
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const btnRight = document.getElementById('right');
let monitor = document.getElementById('mon'); //Получаем доступ к монитору
const folder = "img/";
const arrTrans = ["logan", "samosval", "t34", "t90", "uaz"];
let curTrans = 0;

function runLeft(){
    console.log("Поехали влево")
    let path = `${folder}${arrTrans[curTrans]}/left.jpg`;
    monitor.setAttribute('src', path);
}

function runUp(){
    console.log("Поехали вперед")
    let path = `${folder}${arrTrans[curTrans]}/up.jpg`;
    monitor.setAttribute('src', path);
}

function runDown(){
    console.log("Поехали назад")
    let path = `${folder}${arrTrans[curTrans]}/down.jpg`;
    monitor.setAttribute('src', path);
}

function runRight(){
    console.log("Поехали вправо");
    let path = `${folder}${arrTrans[curTrans]}/right.jpg`;
    monitor.setAttribute('src', path);
}

btnLeft.addEventListener('click', runLeft);
btnUp.addEventListener('click', runUp);
btnDown.addEventListener('click', runDown);
btnRight.addEventListener('click', runRight);

