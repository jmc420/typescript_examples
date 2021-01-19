"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var Login = (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    Login.prototype.getEmail = function () {
        return this.email;
    };
    Login.prototype.getPassword = function () {
        return this.password;
    };
    return Login;
}());
exports.Login = Login;
