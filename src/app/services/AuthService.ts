import 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService
{
    constructor(){}

    public signOut(): void
    {
        alert("Signing Out!")
    }
}