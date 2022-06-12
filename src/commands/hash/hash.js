import { createHash } from "crypto";
import { createReadStream } from "fs";
import { EOL } from "os";

export const hash = async (path) => {
  try {
    const readStream = createReadStream(path);
    const fileHash = createHash("sha256");

    readStream.on("data", (chunk) => {
      fileHash.update(chunk);
    });

    readStream.on("end", () => {
      console.log(fileHash.digest("hex"));
    });

    readStream.on("error", () => {
      console.log(`Operation failed${EOL}`);
    });
  } catch (error) {
    console.log(`Operation failed${EOL}`);
  }
};
