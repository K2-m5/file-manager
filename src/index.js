import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';
import { byeMessage, commandService, initCommandService } from './service/commandService.js';

initCommandService()

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {  
  commandService(input)
});

rl.on('close', () => {
  byeMessage()
})