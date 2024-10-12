import { getInitVariables } from "../utils/commands.js";
import { rootDirName } from "../utils/dirname.js";

const USERNAME_COMMAND = '--your_username'

const commandService = (command) => {
  switch (command) {
    case 'pwd':
      return console.log(rootDirName)
      
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
