import { ls, up, cd, os } from "../utils/index.js";
import { EOL } from "os";

export const commandsRouter = async (command) => {
  const arg = command.slice(3);
  try {
    switch (true) {
      case command === "ls":
        await ls();
        break;
      case command === "up":
        up();
        break;
      case command.startsWith("cd"):
        break;
      case command.startsWith("os"):
        os(arg);
        break;
      default:
        console.log("Invalid input");
    }
  } catch (error) {
    console.log(`Operation failed${EOL}`);
  }

  console.log(`You are currently in ${process.cwd()}${EOL}`);
};
