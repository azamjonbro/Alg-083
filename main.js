// console.log(a);

// function bos(){
//   let btn1 = document.getElementById("btn1")
//   btn1.style.backgroundColor = "red"
// }
// let a=[1,2,3,5,8,7,15,9,]
// b=a.filter((number)=>num%2==0)
// console.log(b);


// let arr = ["Hello", "World", "JavaScript", "is", "awesome"];
// let result =[]

// arr.forEach((e)=>{
//   if(e==e.toLowerCase()){
//     result.push(e)
//   }

// })

// console.log(result);


// let sum = [1,2,3,4,5,6,7,8,9]




// const user = {
//   name:"Laylo",
//   age: 20,
//   isMarried: false,
//   height:1.59,
//   weight: 40,
//   hobbies: ["reading", "writing", "swimming"],
//   address: {
//     city: "Tashkent",
//     street: "Chilonzor",
//     quarter:"3A",
//     houseNumber: 10,
//     floorNumber: 2,
//   },
//   greet : function(){
//     console.log("Hello, my name is " + this.name);
//   }
// }

// const newUser = user

// newUser.name ="Madina"

// console.log(user);

// newUser.greet()


// "".toLowerCase()
// function getCount(str) {
//   let unlilar = str.split("").filter((e)=>{return e=="a"||e=="e"||e=="i"||e=="u"||e=="o"})
//   return unlilar.length
// }

// console.log(getCount("abrakadabra"));


// function disemvowel(str) {
//   let undoshlar =str.split("").filter((e)=>{return (e=="a"||e=="e"||e=="i"||e=="u"||e=="o"||e=="A"||e=="E"||e=="I"||e=="U"||e=="O")? false:true})
//   return undoshlar.join("")
// }
// console.log(disemvowel("This website is for losers LOL!"));

// function filter_list(l) {
//   return l.filter((e)=>{ return typeof e == "number"})
// }

// function descendingOrder(n){
//    let n = n.toString().split("").sort((a,b)=>{return b-a}).join("")
//    return Number(n)
// }

// console.log(descendingOrder(123456789));

var isSquare = function (n) {
  if (n >= 0) {
    let son = Math.sqrt(n)
    let qiymat = son.toString().includes(".")
    if (qiymat) {
      return false
    } else {
      return true
    }
  }
  else {
    return false
  }
}
console.log(isSquare(3));

function solution(number, limit) { 
  let arr =[]
  for (let i = 1; i<=10; i++){
    for (let j = 1; j<=10; j++){
      let son = i*j
      if (son <= limit){
        arr.push(son)
      }
    }
  }
  console.log(arr);
}
console.log(solution(3, 5))