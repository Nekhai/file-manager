import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";

export const decompress = async (paths) => {
  try {
    const [readPath, writePath] = paths.split(" ");

    const readStream = createReadStream(readPath).on("error", () => {
      console.log(`Operation failed`);
    });
    const writeStream = createWriteStream(`${writePath}`).on("error", () => {
      console.log(`Operation failed`);
    });
    const brot = createBrotliDecompress();

    const stream = readStream.pipe(brot).pipe(writeStream);

    stream.on("error", () => {
      console.log(`Operation failed`);
    });
  } catch (error) {
    console.log(`Operation failed`);
  }
};
