import { createReadStream, createWriteStream } from "fs";

export const cp = async (paths) => {
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
  } catch (error) {
    console.log(`Operation failed`);
  }
};
