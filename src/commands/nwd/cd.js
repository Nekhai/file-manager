import { lstat } from "fs/promises";

export const cd = async (command) => {
  try {
    const state = await lstat(command);
    try {
      if (state.isDirectory()) {
        process.chdir(command);
      } else {
        throw new Error();
      }
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};
