import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

export const decompress = async (sourceFilePath, destinationFilePath) => {
    try {
        const readStream = createReadStream(sourceFilePath);
        const gunzipStream = createGunzip();
        const writeStream = createWriteStream(destinationFilePath);
    
        readStream.pipe(gunzipStream).pipe(writeStream);
    
        writeStream.on('finish', () => {
            console.log('Decompression finished successfully.');
        });
    
        readStream.on('error', (err) => {
            console.error('Error reading the file:', err.message);
        });
        gunzipStream.on('error', (err) => {
            console.error('Error during decompression:', err.message);
        });
        writeStream.on('error', (err) => {
            console.error('Error writing to the file:', err.message);
        });    
    } catch (error) {
        console.error('Something get wrong!', error)
    }
};
