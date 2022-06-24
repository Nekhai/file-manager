import { readdir } from "fs/promises";

export const ls = async () => {
  try {
    const files = await readdir(process.cwd());

    console.log(files);
  } catch (error) {
    throw error;
  }

  // rl.write(`you tap ls${EOL}`);
};
