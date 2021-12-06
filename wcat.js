#!/usr/bin/env node
//SHEBANG COMMAND

let sObj = require("./commands/-sLogic.js"); // FOR -S
let nObj = require("./commands/-nLogic.js"); // FOR -N
let bObj = require("./commands/-bLogic.js"); // FOR -B
let zeroOp = require("./commands/operationZero.js"); // WHEN NO OPERATION IS GIVEN

let fs = require("fs");

let input = process.argv.slice(2);
let operations = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][0] == "-") {
    operations.push(input[i]);
    input.splice(i, 1);
    i--;
  }
}

for (let files = 0; files < input.length; files++) {
  if (fs.existsSync(input[files]) && fs.lstatSync(input[files]).isFile()) {
    let fileContent = fs.readFileSync(input[files]).toString().split("\n");
    let tempOperations = Array.from(operations);

    if (operations.length == 0) {
      zeroOp.zeroOperation(fileContent);
    }

    if (tempOperations.includes("-b") && tempOperations.includes("-n")) {
      console.log("INVALID INPUT :)");
      return;
    }
    if (tempOperations.includes("-s")) {
      fileContent = sObj.dashS(fileContent);

      tempOperations.splice(tempOperations.indexOf("-s"), 1);

      if (tempOperations.length == 0) {
        zeroOp.zeroOperation(fileContent);
      }
    }
    if (tempOperations.includes("-n")) {
      nObj.dashN(fileContent);

      tempOperations.splice(tempOperations.indexOf("-n"), 1);
    }

    if (tempOperations.includes("-b")) {
      bObj.dashB(fileContent);

      tempOperations.splice(tempOperations.indexOf("-b"), 1);
    }
  } else {
    console.log("File doesn't exist");
  }
}
