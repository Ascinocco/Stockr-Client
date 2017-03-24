import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'auth-component',
  templateUrl: 'AuthComponent.html',
})
export class AuthComponent 
{
  public navCtrl: NavController

  public signInEmail: string;
  public signInPassword: string;

  public signUpFirstName: string;
  public signUpLastName: string;
  public signUpEmail: string;
  public signUpPassword: string;
  public signUpConfirmPassword: string;

  constructor(navCtrl: NavController) 
  {
    this.navCtrl = navCtrl;
    this.clearForms();
  }

  public signIn(): any
  {

    alert("Signing In!")
  }

  public signUp(): any
  {
    alert("Signing Up!")
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

}
