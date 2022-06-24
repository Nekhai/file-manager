import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";

export const mv = async (paths) => {
  try {
    const [readPath, writePath] = paths.split(" ");

    const readStream = createReadStream(readPath).on("error", () => {
      console.log(`Operation failed`);
    });
    const writeStream = createWriteStream(`${writePath}`).on("error", () => {
      console.log(`Operation failed`);
    });

    const stream = readStream.pipe(writeStream);

    stream.on("error", () => {
      console.log(`Operation failed`);
    });

    stream.on("finish", () => {
      rm(readPath, { recursive: true });
    });
  } catch (error) {
    console.log(`Operation failed`);
  }
};
