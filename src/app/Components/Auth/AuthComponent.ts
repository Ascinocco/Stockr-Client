import 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'auth-component',
  templateUrl: 'AuthComponent.html',
})
export class AuthComponent {

  private http: Http;

  constructor(public navCtrl: NavController, http: Http) {
    this.http = http;
  }


}
