import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class HttpService
{
    public http: Http;
    public localStorage: LocalStorageService;

    constructor(http: Http, localStorage: LocalStorageService)
    {
        this.http = http;
        this.localStorage = localStorage;
    }

    public createAuthHeader(headers: Headers): void
    {
        try {
            const token = this.localStorage.get('x-access-token').toString();
            const _id = this.localStorage.get('_id').toString();
            headers.append('x-access-token', token);
            headers.append('_id', _id);
        } catch (err) {
            console.error(err);
            console.error('No token found or no id found');
        }
    }

    public get(url: string): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    public post(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
    
    public put(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }

    public patch(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.patch(url, data, {
            headers: headers
        });
    }

    public delete(url: string): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    }
}