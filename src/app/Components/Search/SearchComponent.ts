import { Component } from '@angular/core';
import { Stock } from '../../Models/Stock';
import { NavController } from 'ionic-angular';
import { StockService } from '../../Services/StockService';

@Component({
  selector   : 'search-component',
  templateUrl: 'SearchComponent.html',
})
export class SearchComponent 
{
  public navCtrl: NavController;
  private stockService: StockService;

  public symbol: string;
  public stockResult: Stock;

  public messages : Array<string>;
  public errorList: Array<string>;

  public showDetails: Boolean;

  constructor(navCtrl: NavController, stockService: StockService) 
  {
    this.navCtrl = navCtrl;
    this.stockService = stockService;
    this.symbol = "";
    this.clearSearchBar();
    this.clearErrors();
    this.clearMessages();
    this.hideDetails();
  }

  public search(): any
  {
    this.clearErrors();

    this.stockService.search(this.symbol)
      .subscribe((res) => {
        if (res.success) {
          this.clearErrors();
          this.stockResult = new Stock(res.jsonResults[0]);
          console.log(this.stockResult.name);
        }
        else {
        this.errorList.push(res.msg);
        console.log('Error Found in searching', this.symbol);
        }
      });
  }

  public add(): any
  {
    this.clearErrors();

    this.stockService.add(this.stockResult.symbol)
      .subscribe((res) => {
        if (res.success) {
         this.messages.push(res.msg);
        }
        else {
        this.errorList.push(res.msg);
        }
      })
  }

  private clearSearchBar(): void
  {
    this.symbol = "";
  }

  private clearErrors(): void
  {
    this.errorList = [];
  }

  private clearMessages(): void
  {
    this.messages = [];
  }

  public displayDetails(): void
  {
    this.showDetails = true;
  }

  public hideDetails(): void
  {
    this.showDetails = false;
  }
}
