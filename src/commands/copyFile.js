import fs from 'fs';
import path from 'path';
import { appendFile } from 'node:fs/promises';

export const copyFile = async (sourceFilePath, destinationDirectory) => {
  const fileName = path.basename(sourceFilePath);
  const destinationFilePath = path.join(destinationDirectory, fileName);

  try {
    await appendFile(destinationFilePath, '')

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);
  
    readStream.on('error', (error) => {
      console.error(`Error read file: ${error.message}`);
    });
  
    writeStream.on('error', (error) => {
      console.error(`Error write file: ${error.message}`);
    });
  
    writeStream.on('finish', () => {
      console.log(`File was copied successfully ${destinationFilePath}`);
    });
  
    readStream.pipe(writeStream);  
  } catch (error) {
    console.error('Something get wrong!', error)
    
  }
};
