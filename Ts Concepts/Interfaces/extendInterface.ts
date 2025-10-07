// how to extend 2 interfaces

interface Book{
  name:string;
  price: number;
}

interface EbookInfo extends Book{
  fileSizeInMB: number;
  fileFormat: string;
}
interface AudioBook extends EbookInfo{
  duration: number;
}

const bookInfo: EbookInfo={
  name:"Atomic Habits",
  price: 1250,
  fileSizeInMB: 250,
  fileFormat: 'PDF'
}

console.log(bookInfo);