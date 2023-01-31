import {config, DotenvParseOutput} from "dotenv";
import {IConfigService} from './config.interface'

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor() {
    const {error, parsed} = config();
    if (error) {
      throw new Error("The .env file not found");
    }
    if (!parsed) {
      throw new Error("The .env file is empty");
    }
    this.config = parsed;
  }
  get(key: string): string {
   const res = this.config[key];
   if(!res) {
     throw new Error(`The ${key} is not found in .env file`);
    }
   return res;
  }
}

//https://youtu.be/ssaG31RBao0?t=716
