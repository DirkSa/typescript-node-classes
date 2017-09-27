import lodash = require('lodash');

const snakeCasedText: string = lodash.snakeCase('Hello my friend');

console.log(snakeCasedText);

function createPerson(id: number, name: string): {id: number, name: string} {
    return {
        id,
        name
    }
}

const people:any[] = [
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
]

let oneWithIdThree:any = lodash.find(people, {id: 3});
console.log(oneWithIdThree.name);