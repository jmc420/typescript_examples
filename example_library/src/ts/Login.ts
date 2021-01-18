import ILogin from './Login';

export default class Login implements ILogin {
    private email: string;
    private password: string;

    public constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }
}
