"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_helpers_1 = require("./file-helpers");
const searchedString = 'devDependencies';
/**
 1. read directory
 2. return array of files only
 3. read file by file
 4. search for text in file
 */
file_helpers_1.readDirectory('.')
    .then(files => filterFilesOnly(files))
    .then(onlyFiles => {
    let chainedPromise = Promise.resolve();
    onlyFiles.forEach(file => {
        chainedPromise = chainedPromise.then(() => file_helpers_1.searchText(file, searchedString));
    });
    return chainedPromise;
});
function filterFilesOnly(files) {
    return new Promise((resolve, reject) => {
        const result = [];
        const promisesPool = [];
        files.forEach(file => {
            const promise = file_helpers_1.stats(file).then((stats) => {
                if (stats.isFile()) {
                    result.push(file);
                }
            });
            promisesPool.push(promise);
        });
        return Promise.all(promisesPool).then(() => resolve(result));
    });
}
