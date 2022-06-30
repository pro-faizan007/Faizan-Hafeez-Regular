
// uniqueCount=['a' ,'b', 'c', 'd', 'd', 'e', 'a', 'c' ,'c', 'f', 'g', 'h' ];
// var map= new Object();
// for (var i=0; i<uniqueCount.length; i++){
// if(
//     map[uniqueCount[i]] !=null){
//         map[uniqueCount[i]]+=1;
//     }
//     else{
//     map[uniqueCount[i]]=1;
//     }
// }
// console.log(map);

// count upper case

const str="i am Faizan Hafeez";

for(var i=0, len= str.length, count=0 ; i<length; ++i)
{
    if(str[i]>='A' && str[i]<='Z')
    ++count;
}
console.log(count);