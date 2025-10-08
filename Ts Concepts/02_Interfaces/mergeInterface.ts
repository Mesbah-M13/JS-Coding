interface StudentInfo {
  name: string;
  rollNo: number;
  class: number;
}

interface StudentInfo{
  section: string
}

const studentDetails : StudentInfo ={
  name: 'M. Himel',
  rollNo: 4548,
  class: 11,
  section: 'Science-A'
}

console.log(studentDetails);