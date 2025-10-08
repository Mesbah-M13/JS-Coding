// unions

type ID = number | string

// Narrowing
function printId( id : ID ) {
  if( typeof id === 'string'){
    console.log(id.toUpperCase());
  }
  else console.log(id);
}

// printId(5);

type data = string | number[]

function getFirstThree( x : string ) {
  return x.slice(0,3)
}

function takeFirstThree(x:number[]) {
  return x.slice(0,4)
}

console.log(getFirstThree('Bangladesh'));
console.log(takeFirstThree([45,50,21,90,8,11]));