import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService
{
    private http: Http;

    constructor(http: Http)
    {
        this.http = http;
    }
}