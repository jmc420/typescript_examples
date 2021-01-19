"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var examplelibrary_1 = require("examplelibrary");
var login = new examplelibrary_1.Login("somebody@nobody.com", "password");
console.log("Email " + login.getEmail() + " password " + login.getPassword());
