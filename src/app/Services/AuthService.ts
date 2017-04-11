import 'rxjs/Rx';
import { User } from '../Models/User';
import { Http, Headers, Response } from '@angular/http';
import { HttpService } from './HttpService';
import { Globals } from '../Config/Globals';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class AuthService
{


    private http: Http;
    private httpService: HttpService;
    private localStorage: LocalStorageService;

    constructor(http: Http, httpService: HttpService, localStorage: LocalStorageService)
    {
        this.http = http;
        this.httpService = httpService;
        this.localStorage = localStorage;
    }


    public signIn(credentials: Object): any
    {
        return this.http.post(Globals.BASE_URL + "/auth/login", credentials)
            .map((res: Response) => {
                let data = res.json();
                this.storeToken(res.headers);
                this.storeUser(data.user);
                return data;
            });
    }

    public signUp(registration: Object): any
    {
        return this.http.post(Globals.BASE_URL + "/auth/register", registration)
            .map((res: Response) => {
            console.log(res);
            let data = res.json();

            this.storeToken(res.headers);
            this.storeUser(data.user)

            console.log(res.headers);

            return data;
        });
    }

    // sign out needs to HttpService 
    public signOut(): any
    {
        // using http service instead of http here, because http service automatically
        // attaches headers to request
        return this.httpService.post(Globals.BASE_URL + "/auth/logout", {})
            .map((res: Response) => {
                this.destoryToken();
                this.destroyUser();
                console.log('logged out')
                return res.json();
            });
    }

    public isUserLoggedIn(): boolean
    {
        if (this.localStorage.get('x-access-token')) {
            return true;
        }
        return false;
    }

    public getUserFirstName(): string
    {
        let user = this.localStorage.get('user');
        if ("firstName" in user) {
            return user["firstName"];
        }
    }

    public getUser(): User
    {
        let userData = this.localStorage.get('user');

        let user = new User(
            userData["firstName"],
            userData["lastName"],
            userData["email"]
        )

        return user;
    }

    private storeUser(user: User): void
    {
        console.log('Storing user...');
        console.log(user);
        this.localStorage.set('user', user);
        console.log(this.localStorage.get('user'));
        console.log('Has been stored')
    }

    private destroyUser(): void
    {
        console.log('Removing user');
        console.log(this.localStorage.get('user'));
        this.localStorage.set('user', '');
        console.log(this.localStorage.get('user'));
        console.log('User has been removed');
    }

    public getToken(): string
    {
        return this.localStorage.get('x-access-token').toString();
    }

    private storeToken(headers: Headers): void
    {
        const token = headers.get('x-access-token');
        this.localStorage.set('x-access-token', token);
    }

    private destoryToken(): void
    {
        this.localStorage.set('x-access-token', '');
    }
}