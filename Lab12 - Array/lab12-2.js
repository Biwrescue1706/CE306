const fruits = ['apple', 'banana', 'orange', 'kiwi'];

const importFruits = [
    'orange', 'kiwi', 'cherry',
    'cherry', 'guava', 'banana', 
    'banana', 'apple', 'orange', 
    'grape', 'apple', 'grape', 
    'cherry', 'grape', 'banana', 
    'kiwi', 'apple', 'guava', 
    'apple', 'orange'];

const result = importFruits.map(fruit => fruits.includes(fruit) ? "OK" : "Not OK");

console.log("result :",result);