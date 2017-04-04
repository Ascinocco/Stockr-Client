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

  public symbol: string;
  public searchErrors: Array<any>;

  constructor(navCtrl: NavController, stockService: StockService) 
  {
    this.stockService = stockService;
    this.navCtrl = navCtrl;
    this.symbol = "";
    this.clearSearchBar();
    this.clearErrors();
  }

  public search(): any
  {
    this.clearErrors();

    this.stockService.search(this.symbol)
      .subscribe((res) => {
        if (res.success) {
          this.clearErrors();
          this.clearSearchBar();
          console.log(res);
        }
        else {
        this.searchErrors.push(res.msg);
        console.log('Error Found in searching', this.symbol);
        }
      });
  }

  private clearSearchBar(): void
  {
    this.symbol="";
  }

  private clearErrors():void
  {
    this.searchErrors = [];
  }
}
