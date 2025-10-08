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


function getFirstThree( x : string | number[] ) {
  return x.slice(0,3)
}

console.log(getFirstThree('Bangladesh'));
console.log(getFirstThree([45,50,21,90,8,11]));