import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async (sourceFilePath, destinationFilePath) => {
    try {
        const readStream = createReadStream(sourceFilePath);
        const gzipStream = createGzip();
        const writeStream = createWriteStream(destinationFilePath);
    
        readStream.pipe(gzipStream).pipe(writeStream);
    
        writeStream.on('finish', () => {
            console.log('Compression finished successfully.');
        });
    
        readStream.on('error', (err) => {
            console.error('Error reading the file:', err.message);
        });
        gzipStream.on('error', (err) => {
            console.error('Error during compression:', err.message);
        });
        writeStream.on('error', (err) => {
            console.error('Error writing to the file:', err.message);
        });    
    } catch (error) {
        console.error('Something get wrong!', error)
    }
};
