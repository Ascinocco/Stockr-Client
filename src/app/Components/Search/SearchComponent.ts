import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StockService } from '../../Services/StockService';

@Component({
  selector: 'search-component',
  templateUrl: 'SearchComponent.html',
})
export class SearchComponent 
{

  private stockService: StockService;
  public navCtrl: NavController;

  constructor(navCtrl: NavController, stockService: StockService) 
  {
    this.stockService = stockService;
    this.navCtrl = navCtrl;
  }
}
