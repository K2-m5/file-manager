import { rename } from 'node:fs/promises';
import path from 'path';

export const renameFile = async (filePath, newName) => {
    const currentDirectory = path.dirname(filePath);
    const newFilePath = path.join(currentDirectory, newName);

    try {
        await rename(filePath, newFilePath);
        console.log('File renamed successfully.');
    } catch (error) {
        console.error('Something get wrong!', error)
    } 
};