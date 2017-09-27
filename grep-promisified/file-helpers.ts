import fs = require('fs');

export function searchText(file: string, searchedString: string): Promise<void> {
  return new Promise<void>((resolve: any, reject: any) => {
    fs.readFile(file, 'utf-8', (err: any, content: string) => {
      if (err) { return reject(err); }
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (line.indexOf(searchedString) > 0) {
          console.log(`${file}:${index} ${line}`);
        }
      });
      resolve();
    });
  });
}

export function readDirectory(path: string): Promise<string[]> {
  return new Promise<string[]>((resolve: Function, reject: Function) => {
    fs.readdir(path, (err: any, files: string[]) => {
      if (err) { reject(err); }
      else { resolve(files); }
    });
  });
}

export function stats(file: string): Promise<fs.Stats> {
  return new Promise<fs.Stats>((resolve: Function, reject: Function) => {
    fs.stat(file, (err: any, stats: fs.Stats) => {
      if (err) { reject(err); }
      else { resolve(stats) };
    });
  });
}
