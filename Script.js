let btn = document.getElementById('btn');
let temp = document.getElementById('fNode');
let canv = document.getElementById('canv');
btn.addEventListener('click', loadPhoto);
let path = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=';
function loadPhoto(rangePhoto){
    const limit = setNumber();
    let url = path + limit;
    fetch(url).then(result1 => result1.json()).then(result2 => result2.photos).then(a => {
        let arr=[];
        for(let i=0; i < limit; i++){
            arr.push(a[i].url);
        }})
        return arr;   
        }.then(b =>{
            for(let i = 0; i < limit; i++){
                let photo = temp.content.cloneNode(true);
                photo.getElementById('ft').setAttribute('src',b[i]);
                console.log(b[i]);
                canv.appendChild(photo);
            }
        });

function setNumber(){
    let limit = document.getElementById('photoNumber');
}