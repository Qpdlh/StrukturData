const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const frequencyMap = {};

for (const number of numbers) {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
}

console.log(frequencyMap);