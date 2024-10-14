import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async (filePath) => {
    try {
        const stream = createReadStream(filePath);
    
        const hash = createHash('sha256');
    
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });
    
        stream.on('end', () => {
            const result = hash.digest('hex');
            console.log(`SHA256 Hash: ${result}`);
        });
    
        stream.on('error', (err) => {
            console.error('Error reading the file:', err);
        });
    } catch (error) {
        console.error('Something get wrong!', error)   
    }
};
