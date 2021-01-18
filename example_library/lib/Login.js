"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Login;
