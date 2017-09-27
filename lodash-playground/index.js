"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const snakeCasedText = lodash.snakeCase('Hello my friend');
console.log(snakeCasedText);
function createPerson(id, name) {
    return {
        id,
        name
    };
}
function calculateSum(numbers) {
    return numbers.reduce((a, b) => a + b);
}
exports.default = calculateSum;
const people = [
    {
        id: 1,
        name: 'Peter'
    },
    {
        id: 2,
        name: 'Rachel'
    },
    {
        id: 3,
        name: 'John'
    },
    {
        id: 4,
        name: 'Tim'
    },
    {
        id: 5,
        name: 'Zed'
    }
];
let oneWithIdThree = lodash.find(people, { id: 3 });
console.log(oneWithIdThree.name);
