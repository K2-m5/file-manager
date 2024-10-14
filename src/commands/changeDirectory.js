import path from 'node:path';
import { chdir, cwd } from 'node:process';

export const changeDirectory = (directory) => {  
  try {
    chdir(directory);
    console.log(`Current work directory: ${cwd()}`);
  } catch (err) {    
    if (err.code === 'ENOENT') {
      console.error(`No such directory or file: ${err.dest}`);
    }
  } 
}

export const goUp = () => {
  const currentDirectory = process.cwd()
  const parentDirectory = path.dirname(currentDirectory);

  if (currentDirectory !== parentDirectory) {
      process.chdir(parentDirectory);
      console.log(`Current work directory: ${cwd()}`);
  } else {
      console.log('You are in the root directory, you cannot go higher.');
  }
}