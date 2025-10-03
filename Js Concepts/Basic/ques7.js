//  q7: filter out those objects which have gender's value male

const person = [
  {
    p1_Name: "tom",
    age: 22,
    gender: 'Male',
  },
  {
    p1_Name: "Jerry",
    age: 32,
    gender: 'Female',
  },
  {
    p1_Name: "Ben 10",
    age: 12,
    gender: 'Male',
  },
  {
    p1_Name: "Cola",
    age: 20,
    gender: 'Female',
  },
];

// const filterGender = person.map((you)=> you.gender).filter(gen => gen ==='Male')
// console.log('Final Array :', filterGender);

const filterGender = person.filter( (per)=> per.gender === 'Male' )
console.log(filterGender);
