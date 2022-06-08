import { ls, up, cd } from "../../utils/index.js";
import { EOL } from "os";

export const commandsRouter = async (command) => {
  try {
    switch (true) {
      case command === "ls":
        await ls();
        break;
      case command === "up":
        up();
        break;
      case command.startsWith("cd"):
        await cd(command.slice(3));
        break;
      default:
        console.log("Invalid input");
    }
  } catch (error) {
    console.log(`Operation failed${EOL}`);
  }

  console.log(`You are currently in ${process.cwd()}${EOL}`);
};
