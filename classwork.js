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




const isPendulum = (str) => {
    let count = 0;
    const obj =  {degree:2 , pen: false }
 if (str.length % 2 === 0){
    for (let i =0; i < str.length / 2; i++){
        if (str[i] != str[str.length - 1 - i]) {
    break;
        }
    else {
    count++;
    }
}
 }
    else { 
        for (let i = 0; i < (str.length - 1) / 2; i++){
        if (str[i] != str[str.length - 1 - i]) {
    break;
        }
    else{
    count++;
    }
}
    }
    obj.degree = count;
    if (count != 0){
    obj['pen'] = true;
    }
    return obj;
}
    console.log(isPendulum('HHHlloHHH'))