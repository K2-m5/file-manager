import { promises as fs, existsSync } from 'fs';
import path from 'path';

const list = async (directory) => {  
  if (directory) {
    if (existsSync(directory)) {
      const files = await fs.readdir(directory);
      await renderTable(directory, files);
    } else {
      console.error(`Path ${directory} not found`)
    }
  } else {
    const files = await fs.readdir(process.cwd());

    await renderTable(process.cwd(), files);
  }
};

export { list };

const renderTable = async (directory, files) => {
  const drawLine = (colWidths) => {
    return colWidths.map(width => '-'.repeat(width)).join('+') + '+';
  };

  const pad = (str, length) => {
    return str.length >= length ? str.slice(0, length) : str + ' '.repeat(length - str.length);
  };
  
  const colWidths = [30, 10, 15];
  const header = [
      pad('File name', colWidths[0]),
      pad('Type', colWidths[1]),
      pad('Size, (byte)', colWidths[2]),
  ].join('|') + '|';

  console.log(drawLine(colWidths));
  console.log(header);
  console.log(drawLine(colWidths));
  
  files.forEach(async fileName => {
    const filePath = path.join(directory, fileName)

    try {
      const fileStat = await fs.stat(filePath)      
      
      const type = fileStat.isFile() ? 'file' : fileStat.isDirectory() ? 'directory' : 'another'

      const row = [
        pad(fileName, colWidths[0]),
        pad(type, colWidths[1]),
        pad(fileStat.size.toString(), colWidths[2]),
      ].join('|') + '|';

      console.log(row);

      if (files.indexOf(fileName) === files.length - 1) {
        console.log(drawLine(colWidths));
      }
    } catch (error) {
      console.error('Something get wrong!', error)
    }
  })
}