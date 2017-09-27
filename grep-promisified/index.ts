import {readDirectory, searchText, stats} from './file-helpers';

const searchedString = 'devDependencies';

/**
 1. read directory
 2. return array of files only
 3. read file by file
 4. search for text in file
 */

readDirectory('.')
  .then(files => filterFilesOnly(files))
  .then(onlyFiles => {
    let chainedPromise = Promise.resolve();
    onlyFiles.forEach(file => {
      chainedPromise = chainedPromise.then(() => searchText(file, searchedString))
    });
    return chainedPromise;
  });


function filterFilesOnly(files: string[]): Promise<string[]> {
  return new Promise<string[]>((resolve: Function, reject: Function) => {
    const result: string[] = [];
    const promisesPool: Promise<void>[] = [];
    files.forEach(file => {
      const promise = stats(file).then((stats) => {
        if (stats.isFile()) {
          result.push(file);
        }
      });
      promisesPool.push(promise);
    });

    return Promise.all(promisesPool).then(() => resolve(result));
  })
}
