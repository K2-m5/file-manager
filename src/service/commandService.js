import { changeDirectory, goUp } from "../commands/changeDirectory.js";
import { list } from "../commands/listFiles.js";
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
      return changeDirectory(args[0])

    case 'up': 
      return goUp()

    case '.exit': 
      byeMessage()
      process.exit()
      
    default:
      console.log(`Received: ${command}`);
  }
}

const initCommandService = () => {
  const username = getInitVariables(USERNAME_COMMAND)
    
  return console.log(`Welcome to the File Manager, ${username}!`)
}

const byeMessage = () => {
  const username = getInitVariables(USERNAME_COMMAND)

  return console.log(`Thank you for using File Manager, ${username}, goodbye!`)
}

export { commandService, initCommandService, byeMessage }
