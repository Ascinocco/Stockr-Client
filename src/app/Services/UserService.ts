import 'rxjs/Rx';
import { User } from '../Models/User';
import { Response } from '@angular/http';
import { HttpService } from './HttpService';
import { Globals } from '../Config/Globals';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class UserService
{
    private httpService: HttpService;
    private localStorage: LocalStorageService;

    constructor(httpService: HttpService, localStorage: LocalStorageService)
    {
        this.httpService = httpService;
        this.localStorage = localStorage;
    }

    public update(user: User): any
    {
        return this.httpService.post(Globals.BASE_URL + "/user/update", user)
            .map((res: Response) => {
                let data = res.json();

                if (data.success) {
                    this.localStorage.set('user', data.user);
                }

                return data;
            });
    }
}