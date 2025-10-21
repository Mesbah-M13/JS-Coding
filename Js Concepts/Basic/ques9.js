// q9: Check if an object is empty (has no keys)
const myObj={

}
const objLength = Object.keys(myObj).length
if(objLength === 0){
  console.log('Empty Object');
}else{
  console.log(`result is ${myObj}`);
}