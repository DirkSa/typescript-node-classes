
interface Line {
  lineNumber: number
}

interface ApiResponse {
  [key: string]: Line
}

let response: ApiResponse = {
  something: {
    lineNumber: 123
  },
  "anotherthing": {
    lineNumber: 321
  }
}

// same thing:
console.log(response.something);
console.log(response['something']);

for(let key in response) {
  let objectInside = response[key];
  console.log(`Key: ${key}, its value: ${objectInside}`);
}