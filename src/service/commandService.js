import { calculateHash } from "../commands/calculateHash.js";
import { changeDirectory, goUp } from "../commands/changeDirectory.js";
import { compress } from "../commands/compress.js";
import { copyFile } from "../commands/copyFile.js";
import { createFile } from "../commands/createFile.js";
import { decompress } from "../commands/decompress.js";
import { list } from "../commands/listFiles.js";
import { moveFile } from "../commands/moveFile.js";
import { getArch, getCPUs, getEOL, getHomeDir, getUserName } from "../commands/os.js";
import { readFile } from "../commands/readFile.js";
import { removeFile } from "../commands/removeFile.js";
import { renameFile } from "../commands/rename.js";
import { getInitVariables } from "../utils/commands.js";

const USERNAME_COMMAND = '--your_username'

const commandService = async (command) => {
  const [cmd, ...args] = command.trim().split(' ');
  
  switch (cmd) {
    case 'pwd':
      return console.log(process.cwd())
    
    case 'ls':
      return await list(args[0])
    
    case 'cd':
      if (args[0]) {
        return changeDirectory(args[0])
      } else {
        console.log('The function argument was not passed');
      }
    
      break

    case 'up': 
      return goUp()

    case '.exit': 
      byeMessage()
      process.exit()

    case 'cat':
      if (args[0]) {
        return readFile(args[0])      
      } else {
        console.log('The function argument was not passed, for example ./folder/text.txt');
      }
    
      break
    case 'add':
      if (args[0]) {
        return createFile(args[0])
      } else {
        console.log('The function argument was not passed, for example ./text.txt');
      }

      break
    
    case 'rn': 
      if (args[0] && args[1]) {
        return renameFile(args[0], args[1])
      } else {
        console.log('The function argument was not passed, for example ./folder ./text.txt');
      }

      break
    
    case 'cp':       
      if (args[0] && args[1]) {
        return copyFile(args[0], args[1])
      } else {
        console.log('The function argument was not passed, for example ./text.txt ./folder');
      }

      break

    case 'mv':       
      if (args[0] && args[1]) {
        return moveFile(args[0], args[1])
      } else {
        console.log('The function argument was not passed, for example ./text.txt ./folder');
      }

      break
    
    case 'rm':       
      if (args[0]) {
        return removeFile(args[0])
      } else {
        console.log('The function argument was not passed, for example ./text.txt');
      }

      break
    
    case 'os':
      switch (args[0]) {
        case '--EOL':
          getEOL();
          break;
        
        case '--cpus':
          getCPUs();
          break;
        
        case '--homedir':
          getHomeDir();
          break;
        
        case '--username':
          getUserName();
          break;
        
        case '--architecture':
          getArch();
          break;
        
        default:
          console.log('Invalid argument, try something like that --EOL, --cpus, --homedir, --username, -architecture');
        }
      
      break;
    
    case 'hash':       
      if (args[0]) {
        return calculateHash(args[0])
      } else {
        console.log('The function argument was not passed, for example ./text.txt');
      }

      break
    
    case 'compress':       
      if (args[0] && args[1]) {
        return compress(args[0], args[1])
      } else {
        console.log('The function argument was not passed, for example ./text.txt ./text.gs');
      }

      break

    case 'decompress':       
      if (args[0] && args[1]) {
        return decompress(args[0], args[1])
      } else {
        console.log('The function argument was not passed, for example ./text.gs ./text.txt');
      }

      break
    
    default:
      console.log(`Received: ${command}`);
  }
}

const initCommandService = () => {
  const username = getInitVariables(USERNAME_COMMAND)

  console.log(typeof username);
  
    
  return console.log(`Welcome to the File Manager, ${username}!`)
}

const byeMessage = () => {
  const username = getInitVariables(USERNAME_COMMAND)

  return console.log(`Thank you for using File Manager, ${username}, goodbye!`)
}

export { commandService, initCommandService, byeMessage }
