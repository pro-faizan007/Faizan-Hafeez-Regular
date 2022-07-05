// if(true) {
//     let name = "Mustansar";
//     if (true){
//         console.log(name);
//     }
// }
// const Value=null;
// console.log(typeof myNullValue)


// const obj={
//     name: "mustansar",
//     class: "game",
//     obj["score"]=3.2:
// }
// console.log(obj);

// if ({})
// {
// console.log("running");
// }



// var uppercase=0;
// var digits=0;
// var string="I AM Muhammad FAIZAN Hafeez ";
// for(let i=0;i<string.length;i++){
//     if(string[i]>='A'&& string[i]<='Z'){
//         uppercase++;
//     }
// }
// console.log("the number of upperCase = "+uppercase);




// const isPendulum = (str) => {
//     let count = 0;
//     const obj =  {degree:2 , pen: false }
//  if (str.length % 2 === 0){
//     for (let i =0; i < str.length / 2; i++){
//         if (str[i] != str[str.length - 1 - i]) {
//     break;
//         }
//     else {
//     count++;
//     }
// }
//  }
//     else { 
//         for (let i = 0; i < (str.length - 1) / 2; i++){
//         if (str[i] != str[str.length - 1 - i]) {
//     break;
//         }
//     else{
//     count++;
//     }
// }
//     }
//     obj.degree = count;
//     if (count != 0){
//     obj['pen'] = true;
//     }
//     return obj;
// }
//     console.log(isPendulum('HHHlloHHH'))



// const myArray=[2,4,6,8,1]
// const sortedArray= myArray.sort((currentValue,nextValue)=>{
// if (currentValue>nextValue){
//     return 1
// }
// if(currentValue<nextValue){
//     return -1
// }
// return 0
// })
// console.log(myArray)
// console.log(sortedArray)


const myArray=[
    {
        id:1,
        name:'ali',
        salary:50000,

    },

    {
        id:4,
        name:'File',
        salary:60000,
    },
    {
        id:6,
        name:'bota',
        salary:70000,
    },
    {
        id:3,
        name:'haji',
        salary:80000,
    },
    {
        id:5,
        name:"modi",
        salary:90000,
    }
]

myArray.sort((currentValue,nextValue)=>{
 return currentValue.salary - nextValue.salary
     
})
console.log(myArray)



const myArray=[
        {
            id:1,
            name:'ali',
            salary:50000,
    
        },
    
        {
            id:4,
            name:'File',
            salary:60000,
        },
        {
            id:6,
            name:'bota',
            salary:70000,
        },
        {
            id:3,
            name:'haji',
            salary:80000,
        },
        {
            id:5,
            name:"modi",
            salary:90000,
        }
    ]
    
    myArray.sort((currentValue,nextValue)=>{
     return nextValue.salary - currentValue.salary
         
    })
    console.log(myArray)