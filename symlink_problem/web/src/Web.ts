import * as log from 'loglevel';
import Common from './common/Common';

export class Web {
  constructor() {
    log.setLevel(LogLevel.INFO);
    console.log("Web "+log.getLevel());
    log.info("Web logging");
  }

}

let web:Web = new Web();
