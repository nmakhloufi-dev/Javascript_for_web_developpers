const onlyEvenNum = arr => arr.filter(v => v % 2 === 0);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Filtrer les nombres pairs
const evenNumbers = onlyEvenNum(data);
console.log("Even Numbers :", evenNumbers);

// Utilisation de reduce() pour calculer la somme des nombres pairs
const sum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculer la moyenne
const average = sum / evenNumbers.length;

console.log("Average of even numbers:",average); // Moyenne des nombres pairs