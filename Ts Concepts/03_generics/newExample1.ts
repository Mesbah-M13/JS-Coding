function getString( str: string) : string{
  console.log(str);
  return str
}

function getNumber(num:number): number {
  console.log(num);
  return num
}

function getBoolen(bool:boolean): boolean {
  console.log(bool);
  return bool
}

function getAll<T>(value: T): T {
  console.log(value);
  return value
}

// getAll("Hello Bangladesh");
getAll<number[]>([4,5,12]);