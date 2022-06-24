import readline from "readline";
import os from "os";

import { commandsRouter } from "./commandsRouter.js";

const args = process.argv.slice(2);
const homeDir = os.homedir();
const eol = os.EOL;

process.chdir(homeDir);

const currentDir = process.cwd();

const name = args.reduce((acc, arg) => {
  if (arg.startsWith("--username=")) {
    const index = arg.indexOf("=");
    acc = arg.slice(index + 1);
  }
  return acc;
}, "anonim");

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the File Manager, ${name}!${eol}`);
console.log(`You are currently in ${currentDir}${eol}`);

rl.on("line", (inputIn) => {
  const input = inputIn.trim();

  if (input === ".close") {
    rl.close();
  } else {
    commandsRouter(input);
  }
});

rl.on("close", () => console.log(`Thank you for using File Manager, ${name}!`));
