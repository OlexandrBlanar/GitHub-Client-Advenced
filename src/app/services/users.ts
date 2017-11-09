export class User {
    
    login: string;
    url: string;
    html_url: string;
    
    constructor(login: string, url: string, html_url: string) {
        this.login = login;
        this.url = url;
        this.html_url = html_url;
    }
}