import { EOL, cpus, homedir, userInfo, arch } from "os";

export const os = (command) => {
  try {
    switch (command) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;
      case "--cpu":
        console.log(cpus());
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        console.log("Invalid input");
    }
  } catch (error) {
    throw error;
  }
};
