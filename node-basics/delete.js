
// delete
function deleteFile(filename) {
  return new Promise((resolve, reject) => {
    try {
      filesystem.unlinkSync(filename);
      resolve();
    } catch(err) {
      reject();
    }
  })
}

module.exports = deleteFile;
