/**
* App : $tockR
* File Name: FeedComponent.ts
* Description : This is the typescript file for Feed Component, has the functionality to get 
*               stock feed from the StockService and display it.
**/

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
  public errorList: Array<string>;
  public messageList: Array<string>;

  public displayStockList: Boolean;
  public displayStockDetails: Boolean;

  constructor(navCtrl: NavController, stockService: StockService) 
  {
    this.navCtrl = navCtrl;
    this.stockService = stockService;
    this.initFeedList();
    this.initErrorList();
    this.initMessageList();
    this.getFeed();
    this.displayStockList = true;
    this.displayStockDetails = false;
  }

  public getFeed(): void
  {
    this.initFeedList();
    this.initErrorList();
    this.initMessageList();

    this.stockService.getFeed()
      .subscribe((res) => {
        if (res.success) {
          let data = res.jsonResults.data;

          for (var i = 0; i < data.length; i++) {
            this.feedList.push(new Stock(data[i]));
          }

        } else {
          this.errorList.push(res.msg);
        }
      });
  }

  public displayDetails(stock): void
  {
    this.displayStockList = false;
    this.displayStockDetails = true;

    this.currentStock = stock;
  }

  public hideDetails(): void
  {
    this.displayStockList = true;
    this.displayStockDetails = false;
  }

  public removeStockFromWatchList(symbol: string): void
  {
    this.stockService.remove(symbol)
      .subscribe((res) => {
        if (res.success) {
          this.getFeed();
          this.messageList.push(res.msg);

        } else {
          this.getFeed();
          this.errorList.push(res.msg);
        }
      });
  }

  private initFeedList(): void
  {
    this.feedList = [];
  }

  private initErrorList(): void
  {
    this.errorList = [];
  }

  private initMessageList(): void
  {
    this.messageList = [];
  }
}
