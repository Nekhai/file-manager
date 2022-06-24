import { rename } from "fs/promises";

import { dirname } from "path";

export const rn = async (props) => {
  try {
    const [path, newName] = props.split(" ");

    const __dirname = dirname(path);
    const newPath = `${__dirname}/${newName}`;

    await rename(path, newPath);
  } catch (error) {
    console.log(`Operation failed`);
  }
};
