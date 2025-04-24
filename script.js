// use strict bu strict modeni yoqib beradi va kalit so'zlardan 
// foydalanmay o'zgaruvchi yaratishni oldini oladi
"use strict"

// var a = 1
// var a = 10
// var arr = [1,2,3,4,5,6,7,8,9]
// var arr = []
// // var nomi bir xil bolgan bir nechta o'zgaruvchini qayta 
// // elon qilib  qiymat biriktirsak ham ishlayveradi

// console.log(arr);

// if(a ==a){
//     // ikkinchi kamchiligi block scope yoki function scopedan tashqariga chiqib keta oladi
//     var x = 10 
// }
// x = 20

// console.log(x);

// bu global scope ichida elon qilingan qiymat 
// hech qanday figura ichida bolmagan o'zgaruchi global 
// scopedagi o'zgaruvchi hisoblanadi 
// let muhammadaziz = 1000





// if(muhammadaziz==1000){
//     muhammadaziz==10
// }


// function muhammadmirzo(){
//     muhammadaziz+1000
// }
// muhammadmirzo()

// console.log(muhammadaziz);



// var function ichidan chiqa olmaydi ammo block scope ichidan chiqa oladi

// function app(){
//     // bu function yoki local scope diyiladi bolalar
//     var mashxura = "imtixonni to'liq tugatmadi"
// }


// // block scopega misollar if else , switch case, methods, for , for in for of, while ,do while,
// if(1000){
//     // bu block scope ichida yozilgan o'zgaruvchi
//     var muhammadqodir =100
// }

// function nimadir(){
//     // lexical scope
//     let x = 10
//     function add (){
//         console.log(x);
        
//     }
// }



// console.log(muhammadqodir);


// console.log(b);
let b = 10





const user= {
    name:"Muhammadaziz",
    character:"Angry",
    height:190,
    style: "American old rap",
    glasses:-1.5,
    haircolor:"purple",
}

user.haircolor="black"

// object keys bu objecting faqat keylarini array holda olib beradi
console.log(Object.keys(user).length);

console.log(user);

let hello = "Hello World!"
console.log(hello);
