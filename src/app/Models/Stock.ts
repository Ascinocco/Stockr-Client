/**
 * App: Stockr
 * File: stock.ts
 * Description: this page creates an instance of stock JSON object.
 */

export class Stock
{
    public symbol: string;
    public name: string;
    public askingPrice: string;
    
    public todaysHighestBid: string;
    public todaysLowestBid: string;

    public changeInPercent: string;

    public lastTrade: string;

    public thisWeeksHighestPrice: string;
    public thisWeeksLowestPrice: string;

    public earningsPerShare: string;
    public weeksRange: string;

    public changeFromThisWeeksHighInPercent: string;
    public changeFromThisWeeksHighInDecimal: string;

    public changeFromThisWeeksLowInPercent: string;
    public changeFromThisWeeksLowInDecimal: string;

    /**
     * Creates an instance of Stock.
     * @param {JSON} stockData the data required to build a stock 
     * 
     * @memberOf Stock
     */
    constructor(stockData)
    {
        try {

            this.symbol = stockData.SYMBOL;
            this.name = stockData.NAME;
            this.askingPrice = stockData.ASKING_PRICE;

            this.todaysHighestBid = stockData.TODAYS_HIGHEST_BID;
            this.todaysLowestBid = stockData.TODAYS_LOWEST_BID;

            this.changeInPercent = stockData.CHANGE_IN_PERCENT;

            this.lastTrade = stockData.LAST_TRADE;
            this.thisWeeksHighestPrice = stockData.THIS_WEEKS_HIGHEST_PRICE;
            this.thisWeeksLowestPrice = stockData.THIS_WEEKS_LOWEST_PRICE;

            this.earningsPerShare = stockData.EARNINGS_PER_SHARE;
            this.weeksRange = stockData.WEEKS_RANGE;

            this.changeFromThisWeeksHighInPercent = stockData.CHANGE_FROM_THIS_WEEKS_HIGH_IN_PERCENT;
            this.changeFromThisWeeksHighInDecimal = stockData.CHANGE_FROM_THIS_WEEKS_HIGH_IN_DECIMAL;

            this.changeFromThisWeeksLowInPercent = stockData.CHANGE_FROM_THIS_WEEKS_LOW_IN_PERCENT;
            this.changeFromThisWeeksLowInDecimal = stockData.CHANGE_FROM_THIS_WEEKS_LOW_IN_DECIMAL;
        } catch(err) {
            console.log("COULD NOT CREATE STOCK!!!!");
            console.log("DID YOU ENTER ALL REQUIRED STOCK DATA? SEE STOCK CONSTRUCTOR");
            console.log(err);
        }
    }
}