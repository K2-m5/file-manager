import { createReadStream, existsSync } from 'fs';


export const readFile = async (filePath) => {
  try {
    if (!existsSync(filePath)) {
      return console.log('File not found');
      
    }
    
    const readStream = createReadStream(filePath, 'utf-8');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err.message);
    });

    readStream.on('open', () => {
        console.log('Stream opened successfully');
    });

    readStream.on('end', () => {
        console.log('\nReading finished.');
    });
  } catch (error) {
    console.error('Something get wrong!', error)
  }
};
