export const up = () => {
  try {
    process.chdir("../");
    // console.log(`You are currently in ${process.cwd()}`);
    // console.log(process.cwd());
  } catch (error) {
    throw error;
  }
};
