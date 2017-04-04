import 'rxjs/Rx';
import { Stock } from '../Models/Stock';
import { Injectable } from '@angular/core';
import { Globals } from '../Config/Globals';
import { HttpService } from '../Services/HttpService';
import { Http, Response } from '@angular/http';


@Injectable()
export class StockService
{
    private httpService: HttpService;

    constructor(httpService: HttpService)
    {
        this.httpService = httpService;
    }

    public getFeed(): any
    {
        return this.httpService.get(Globals.BASE_URL + '/stocks/feed')
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
    }

    public search(symbol: string): any
    {
        return this.httpService.post(Globals.BASE_URL + '/stocks/search', { symbol: symbol })
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
    }

    public add(symbol: string): any
    {
        return this.httpService.post(Globals.BASE_URL + '/stocks/add', { symbol: symbol })
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
    }

    public remove(symbol: string): any
    {
        return this.httpService.post(Globals.BASE_URL + '/stocks/remove', { symbol: symbol })
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
    }
}