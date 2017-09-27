"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function searchText(file, searchedString) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, content) => {
            if (err) {
                return reject(err);
            }
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
exports.searchText = searchText;
function readDirectory(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(files);
            }
        });
    });
}
exports.readDirectory = readDirectory;
function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, stats) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(stats);
            }
            ;
        });
    });
}
exports.stats = stats;
