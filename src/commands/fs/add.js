import { writeFile } from "fs/promises";

export const add = async (fileName) => {
  const currentDir = process.cwd();
  const filePath = `${currentDir}/${fileName}`;
  try {
    await writeFile(filePath, "", { flag: "wx" });
  } catch (error) {
    console.log(`Operation failed`);
  }
};
