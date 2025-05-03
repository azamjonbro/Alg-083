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




const user = {
  name:"Laylo",
  age: 20,
  isMarried: false,
  height:1.59,
  weight: 40,
  hobbies: ["reading", "writing", "swimming"],
  address: {
    city: "Tashkent",
    street: "Chilonzor",
    quarter:"3A",
    houseNumber: 10,
    floorNumber: 2,
  },
  greet : function(){
    console.log("Hello, my name is " + this.name);
  }
}

const newUser = user

newUser.name ="Madina"

console.log(user);

newUser.greet()
