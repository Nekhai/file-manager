import { rm } from "fs/promises";

export const del = async (path) => {
  try {
    await rm(path, { recursive: true });
  } catch (error) {
    console.log(`Operation failed`);
  }
};
