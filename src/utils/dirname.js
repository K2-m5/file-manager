import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const rootDirName = dirname(fileURLToPath(import.meta.url), '..');
