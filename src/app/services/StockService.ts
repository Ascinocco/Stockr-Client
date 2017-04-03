import 'rxjs/Rx';
import { Stock } from '../Models/Stock';
import { Injectable } from '@angular/core';
import { HttpService } from '../Services/HttpService';

@Injectable()
export class StockService
{
    private httpService: HttpService;

    constructor(httpService: HttpService)
    {
        this.httpService = httpService;
    }
}