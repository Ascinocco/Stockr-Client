import { Injectable } from '@angular/core';

@Injectable()
export class GuardService
{
    constructor(){}

    public isAuthenticated(): boolean
    {
        // check local storage for token
        // if good return true
        // else false
        // for now always return true
        return true;
    }
}