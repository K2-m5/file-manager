import { appendFile } from 'node:fs/promises';
import path from 'node:path';
import { cwd } from 'node:process';

export const createFile = async (fileName) => {
  try {
    const filePath = path.join(cwd(), fileName)

    await appendFile(filePath, '')
  } catch (error) {
    console.error('Something get wrong!', error)
  }
 }