import {
  ls,
  up,
  cd,
  os,
  cat,
  add,
  rn,
  cp,
  mv,
  del,
  hash,
  compress,
  decompress,
} from "../utils/index.js";
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
        cd(command.slice(3));
        break;
      case command.startsWith("os"):
        os(command.slice(3));
        break;
      case command.startsWith("cat"):
        cat(command.slice(4));
        break;
      case command.startsWith("add"):
        add(command.slice(4));
        break;
      case command.startsWith("rn"):
        rn(command.slice(3));
        break;
      case command.startsWith("rm"):
        del(command.slice(3));
        break;
      case command.startsWith("cp"):
        cp(command.slice(3));
        break;
      case command.startsWith("mv"):
        mv(command.slice(3));
        break;
      case command.startsWith("hash"):
        hash(command.slice(5));
        break;
      case command.startsWith("compress"):
        compress(command.slice(9));
        break;
      case command.startsWith("decompress"):
        decompress(command.slice(11));
        break;
      default:
        console.log("Invalid input");
    }
  } catch (error) {
    console.log(`Operation failed${EOL}`);
  }

  console.log(`You are currently in ${process.cwd()}${EOL}`);
};
