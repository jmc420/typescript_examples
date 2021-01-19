import { ILogin } from './ILogin';
export declare class Login implements ILogin {
    private email;
    private password;
    constructor(email: string, password: string);
    getEmail(): string;
    getPassword(): string;
}
