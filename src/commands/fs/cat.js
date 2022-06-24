import { lstat } from "fs/promises";
import { createReadStream } from "fs";
import { EOL } from "os";

export const cat = async (path) => {
  try {
    const state = await lstat(path);
    if (state.isFile()) {
      const readStream = createReadStream(path);

      readStream.on("data", (chunk) => {
        console.log(chunk.toString());
      });

      readStream.on("error", () => {
        console.log(`Operation failed${EOL}`);
      });
    } else {
      throw error;
    }
  } catch (error) {
    console.log(`Operation failed${EOL}`);
  }
};
