import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/AuthService';
import { NavController } from 'ionic-angular';
import { FeedComponent } from '../Feed/FeedComponent';

@Component({
  selector: 'auth-component',
  templateUrl: 'AuthComponent.html',
})
export class AuthComponent 
{
  public navCtrl: NavController
  private authService: AuthService;

  public signInEmail: string;
  public signInPassword: string;
  public signInErrors: Array<any>;

  public signUpFirstName: string;
  public signUpLastName: string;
  public signUpEmail: string;
  public signUpPassword: string;
  public signUpConfirmPassword: string;
  public signUpErrors: Array<any>;

  constructor(navCtrl: NavController, authService: AuthService) 
  {
    this.navCtrl = navCtrl;
    this.authService = authService;
    this.clearForms();
    this.clearErrors();
  }

  public signIn(): void
  {
    this.clearErrors();
    
    let credentials: Object = {
      email: this.signInEmail,
      password: this.signInPassword
    }

    this.authService.signIn(credentials)
      .subscribe((res) => {
        if (res.success) {
          this.clearErrors();
          this.clearForms();
          this.navCtrl.push(FeedComponent);
        } else {
          this.signInErrors.push(res.msg);
        }
      });
  }

  public signUp(): void
  {
    this.clearErrors();

    let user: User = new User(
        this.signUpFirstName,
        this.signUpLastName,
        this.signUpEmail,
        this.signUpPassword
      );

    let registration: Object = {
      user: user,
      confirmPassword: this.signUpConfirmPassword
    }

    this.authService.signUp(registration)
      .subscribe((res) => {
        if (res.success) {
          this.clearErrors();
          this.clearForms();
          this.navCtrl.push(FeedComponent);
        } else {
          this.signUpErrors.push(res.msg);
        }
      });
  }

  private clearForms(): void
  {
    this.signInEmail = "";
    this.signInPassword = "";

    this.signUpFirstName = "";
    this.signUpLastName = "";
    this.signUpEmail = "";
    this.signUpPassword = "";
    this.signUpConfirmPassword = "";
  }

  private clearErrors(): void
  {
    this.signInErrors = [];
    this.signUpErrors = [];
  }

}
