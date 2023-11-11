let lkg = document.getElementById('kg');
let lfnt = document.getElementById('fnt');
let lRes = document.getElementById('res');

function convertKgToFunt(){
    let kg = lkg.value;
    let fnt = lfnt.value;
    const a = 0.454;
    let result = kg / a;
    console.log('Результат в фунтах ' + result + ' килограммов');
    lRes.innerText = result;
}