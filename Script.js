// // // let c = "Глобальная переменная";

// // // function sum(a,b){
// // //     let c = a + b;
// // //     console.log(`Область видимости функции ${c}`);
// // //     if(c > 12){
// // //         let c = "Область блока";
// // //     }

// // //     console.log(`Выход из блока, значение ${c}`);
// // //     return c;
// // // }

// // // sum(5, 7);
// // // console.log(c);

// // // // const f = sum;
// // // // f(5, 6);
// // // // const d = (c, u)=>{ // ()
// // // //     let res = c * u;
// // // //     console.log(`Результат умножения ${res}`);
// // // // }


// // let polkan = {
// //     poroda: 'Алабай',
// //     speak: function(){
// //         console.log(`Gav, gav ${this.age}`)
// //     },
// //     age: 100,
// // }
// // console.table(polkan);

// // polkan.speak();


// let ar = [2, 7, 9, 12, 33];
// const flt = (a) => a > 5;
// let f = ar.filter(flt);
// console.log(f);


	
let users = [
{id: 1,
uname:	"Leanne Graham",
username: "Bret",
age: 25,
email:	"Sincere@april.biz",
address:{
street: "Маршала Жукова",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874"}
},

{id: 2,
uname: "Ervin Rommel",
username: "Antonette",
age: 25,
email: "Shanna@melissa.tv",
address:{
street: "Дунаевского",
suite: "Suite 879",
city: "Wisokyburgh",
zipcode: "90566-7771"}
},

{id: 3,
uname: "Clementine Bauch",
username: "Samantha",
age: 12,
email: "Nathan@yesenia.net",
address:{
street: "Douglas Extension",
suite: "Suite 847",
city: "McKenziehaven",
zipcode: "59590-4157"}
}]

// Найти пользователей с возрастом 25 лет и вывести
let res1 = users.filter(a => a.age == 25);
console.table(res1);

// Из массива пользователей создать массив почтовых адресов
let res2 = users.map(a => a.email);
console.table(res2);


// Найти пользователей, у которых в username нет буквы А
let res3 = users.filter(n => {
    if(n.username.indexOf('a') == -1 && n.username.indexOf('A') == -1){
        return true;
    }
    return false;
}
);
console.table(res3);

// what is...
let res4 = users.map(a => {
    let d = {
    username: "",
    city: "",   
    }
    d.username = a.username;
    d.city = a.address.street;
    return d;
});
console.table(res4);