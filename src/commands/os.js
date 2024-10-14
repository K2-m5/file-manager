import os from 'node:os';


export const getHomeDir = () => {
  console.log(`Home directory: ${os.homedir()}`);
};

export const getUserName= () => {
  console.log(`System username: ${os.userInfo().username}`);
};

export const getArch = () => {
  console.log(`CPU architecture: ${os.arch()}`);
};

export const getEOL = () => {
    console.log(`System end-of-line: ${JSON.stringify(os.EOL, null, 2)}`);
};

export const getCPUs = () => {
    const cpus = os.cpus();
    console.log(`Number of CPUs: ${cpus.length}`);

    cpus.forEach((cpu, index) => {
      console.log(
        `CPU ${index + 1}: ` +
        `Model: ${cpu.model}, ` +
        `Speed: ${(cpu.speed / 1000).toFixed(2)} GHz`
      );
    });
};
