// let condition = false;
// let userName = prompt('Введите свое имя');
// console.log(userName);
//switch(userName){
//    case 'Путин':
//       alert('Ты внезапно стал Путиным');
//    break;
//    case 'Байден':
//        alert('Ты старина Байден, ты забылся');
//        break;
//     case 'Шарик':
//         alert('Шарик, убери лапу с клавы!');
//         break;
//     case 'Барсик':
//         alert('Ты Барсик');
//         break;
//     default:
//         alert('Ты какое-то непонятное чудо! Определись!');
// }

// for(let i = 0; i < 10; i++){
//     console.log(i*5);
// }

// while(userName != 'q'){
//     console.log(userName);
//     alert('Посмотри на меня');
//     userName = prompt('Для того, чтобы выйти введите q');
//     if(userName == 'Dog'){
//         alert('Продолжаем. Введено "Dog"');
//         continue;
//     }
//     if(userName == 'Cat'){
//         alert('Вываливаемся из цикла');
//         break;
//     }
// }

// let ar = ['Шарик','Бобик','Барсик','Мурзик','Муська'];
// console.log(ar.length);
// ar.push('Иван Иваныч');
// console.log(ar.length);
// console.table(ar);

let MoneySumm = document.getElementById('money').value;
let MoneySelect = document.getElementById('checkMoney').value;
let outResult = document.getElementById('out');
let arr = [82, 12, 97, 0.6];

function converter(){
    let res = MoneySumm * arr[MoneySelect -1];
    outResult.innerText = `Стоимость по курсу ${res}`;
}