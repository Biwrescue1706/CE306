const str = 'The Quick brown fox jumps over the lazy dog.';
const csvData = '23,34,56,78';
const output = str.split(" ");
const datas = csvData.split(",").map(x => parseFloat(x))
const data = csvData.split(",").map(x => parseFloat(x)).filter(x=> x > 40);
console.log(output);
console.log(datas);
console.log(data);