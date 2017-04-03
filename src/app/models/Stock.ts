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

    constructor(symbol: string, name: string, askingPrice: string, todaysHighestBid: string,
                todaysLowestBid: string, changeInPercent: string, lastTrade: string, thisWeeksHighestPrice: string,
                thisWeeksLowestPrice: string, earningsPerShare: string, weeksRange: string, changeFromThisWeeksHighInPercent: string,
                changeFromThisWeeksHighInDecimal: string, changeFromThisWeeksLowInPercent: string, changeFromThisWeeksLowInDecimal: string)
    {
        this.symbol = symbol;
        this.name = name;
        this.askingPrice = askingPrice;

        this.todaysHighestBid = todaysHighestBid;
        this.todaysLowestBid = todaysLowestBid;

        this.changeInPercent = changeInPercent;

        this.lastTrade = lastTrade;
        this.thisWeeksHighestPrice = thisWeeksHighestPrice;
        this.thisWeeksLowestPrice = thisWeeksLowestPrice;

        this.earningsPerShare = earningsPerShare;
        this.weeksRange = weeksRange;

        this.changeFromThisWeeksHighInPercent = changeFromThisWeeksHighInPercent;
        this.changeFromThisWeeksHighInDecimal = changeFromThisWeeksHighInDecimal;

        this.changeFromThisWeeksLowInPercent = changeFromThisWeeksLowInPercent;
        this.changeFromThisWeeksLowInDecimal = changeFromThisWeeksLowInDecimal;
    }
}