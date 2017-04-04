import { Component } from '@angular/core';
import { Stock } from '../../Models/Stock';
import { NavController } from 'ionic-angular';
import { StockService } from '../../Services/StockService';

@Component({
  selector: 'feed-component',
  templateUrl: 'FeedComponent.html',
})
export class FeedComponent 
{
  public navCtrl: NavController
  private stockService: StockService;

  public feedList: Array<Stock>;
  public currentStock: Stock;

  constructor(navCtrl: NavController, stockService: StockService) 
  {
    this.navCtrl = navCtrl;
    this.stockService = stockService;
    this.initFeedList();
    this.getFeed();
  }

  public getFeed(): void
  {
    this.initFeedList();

    this.stockService.getFeed()
      .subscribe((res) => {
        if (res.success) {
          let data = res.jsonResults.data;

          for (var i = 0; i < data.length; i++) {
            this.feedList.push(new Stock(data[i]));
          }

        } else {
          console.log(res);
        }
      });
  }

  public displayFeed(): void
  {

  }

  public removeStockFromWatchList(): void
  {

  }

  private initFeedList(): void
  {
    this.feedList = [];
  }

}
