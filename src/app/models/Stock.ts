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

    constructor(symbol: string, name: string, askingPrice: string)
    {
        this.symbol = symbol;
        this.name = name;
        this.askingPrice = askingPrice;
    }

    public getDetails(): void
    {

    }
}