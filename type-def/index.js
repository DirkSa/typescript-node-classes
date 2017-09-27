"use strict";
let response = {
    "something": {
        line: 123
    },
    "anotherthing": {
        line: 321
    }
};
for (let key in response) {
    console.log(key);
}
