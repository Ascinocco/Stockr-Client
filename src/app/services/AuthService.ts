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
        this.http.post(Globals.BASE_URL + "/auth/login", credentials)
        .map((res: Response) => {
                let data = res.json();
                this.storeToken(res.headers);
                this.storeUserId(res.headers);
                this.storeUser(data.user);
                return data;
            });
    }

    public signUp(registration: Object): any
    {
        return this.http.post(Globals.BASE_URL + "/auth/register", registration)
            .map((res) => {
            console.log(res);
            let data = res.json();

            this.storeToken(res.headers);
            this.storeUserId(res.headers);
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
            .map((res) => {
                console.log('logged out on server?')
                this.destoryToken();
                this.destroyUser();
                this.destroyUserId();
                console.log('logged out on client??')
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

    public getUser(): Object
    {
        let user = this.localStorage.get('user');
        
        if (user["created_at"]) {
            delete user["created_at"];
        }

        if (user["updated_at"]) {
            delete user["updated_at"];
        }

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

    public getUserId(): string
    {
        return this.localStorage.get('_id').toString();
    }

    private storeUserId(headers: Headers): void 
    {
        const userId = headers.get('_id');
        this.localStorage.set('_id', userId);
    }

    private destroyUserId(): void 
    {
        this.localStorage.set('_id', '');
    }
}