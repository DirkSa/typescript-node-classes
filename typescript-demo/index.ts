
import lodash = require('lodash');
import * as something from './my-module';

console.log(something);

console.log('hfffi something  ooofffsss1 xxx xxxff');

const arrayOfPeople = [
  {
    id: 1,
    name: 'Lars'
  },
  {
    id: 2,
    name: 'Martin'
  },
  {
    id: 3,
    name: 'Ivo'
  }
];
let result = lodash.find(arrayOfPeople, {id: 1});
console.log(result);

