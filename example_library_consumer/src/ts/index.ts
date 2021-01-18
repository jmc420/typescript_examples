
import {ILogin, Login} from 'examplelibrary';

let login:ILogin = new Login("somebody@nobody.com", "password");

console.log("Email "+login.getPassword());