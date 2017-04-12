/**
* App : $tockR
* File Name: SettingsComponent.ts
* Description : This is the typescript file for Settings Component, that has update
*                and delete functionality for the current logged in user
**/

import { User } from '../../Models/User';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../Services/AuthService';
import { UserService } from '../../Services/UserService';
import { AuthComponent } from '../Auth/AuthComponent';

@Component({
    selector: 'user-component',
    templateUrl: 'SettingsComponent.html'
})
export class SettingsComponent
{
    public email: string;
    public lastName: string;
    public firstName: string;
    public updateErrors: Array<any>;
    public updateMessages: Array<any>;

    public navCtrl: NavController;
    private userService: UserService;
    private authService: AuthService;

    constructor(navCtrl: NavController, userService: UserService, authService: AuthService)
    {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authService = authService;
        this.setForm();
        this.updateMessages = [];
    }

    public update(): any
    {
        let user: User = new User(this.firstName, this.lastName, this.email);

        this.userService.update(user)
            .subscribe((res) => {
                if (res.success) {
                    this.setForm();
                    this.updateMessages.push(res.msg);
                } else {
                    this.updateErrors.push(res.msg);
                    console.log(res.err);
                }
            });
    }

    public deleteAccount(): any
    {
        this.userService.deleteAccount()
            .subscribe((res) => {
                if (res.success) {
                    this.navCtrl.push(AuthComponent);
                } else {
                    this.updateErrors.push(res.msg);
                }
            })
    }

    private setForm(): void
    {
        let user: User = this.authService.getUser();
        this.email = user.email;
        this.lastName = user.lastName;
        this.firstName = user.firstName;
        this.updateErrors = [];
    }
}