let btn = document.getElementById('btn');
let temp = document.getElementById('fNode');
let canv = document.getElementById('canv');
btn.addEventListener('click', loadPhoto);

function loadPhoto(rangePhoto){
    let result = fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10')
    .then(result1 => result1.json()).then(result2 => result2.photos).then(a => {
    let arr=[];
    for(let i=0; i < 10; i++){
        arr.push(a[i].url); 
    }
    return arr;
    }).then(b => {
    for(let i =0; i < 10; i++){
        let photo = temp.content.cloneNode(true);
        photo.getElementById('img').setAttribute('src', b[i]);
        console.log(b[i]);
        canv.appendChild(photo);
    }
    });
};