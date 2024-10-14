import { promises as fs } from 'node:fs';

export const removeFile = async (path) => {
  try {
      await fs.access(path);

      await fs.unlink(path);
      console.log('File deleted successfully.');
  } catch (error) {
    console.error('Something get wrong!', error)
  }
};