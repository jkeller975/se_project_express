const fsPromises = require("fs").promises;

function getDataFromFile(pathToFile) {
  return fsPromises
    .readFile(pathToFile, { encoding: "utf-8" })
    .then((data) => JSON.parse(data));
}

module.exports = getDataFromFile;