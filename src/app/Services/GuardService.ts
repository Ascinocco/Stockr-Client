import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class GuardService
{
    private localStorage: LocalStorageService;

    constructor(localStorage: LocalStorageService)
    {
        this.localStorage = localStorage;
    }

    public isAuthenticated(): boolean
    {
        if (this.localStorage.get('x-access-token')) {
            return true;
        }

        return false;        
    }
}