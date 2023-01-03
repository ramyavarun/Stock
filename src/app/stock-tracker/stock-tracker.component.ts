
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Stock } from '../Model/stock';
import { StockQuote } from '../Model/stockQuote';
import { StockSymbol } from '../Model/stockSymbol';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent implements OnInit {
  @Output() addStocker: EventEmitter<Stock> = new EventEmitter<Stock>();
  symbol!: string;
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }
  trackSymbol() {
    let stSymbol: StockSymbol = new StockSymbol();
    let stQuote: StockQuote = new StockQuote();
    forkJoin({
      search: this.stockService.getSearchData(this.symbol),
      quote: this.stockService.getSymbolData(this.symbol)
    }).subscribe(({ search, quote }) => {

      let jsonData = JSON.parse(JSON.stringify(quote));

      localStorage.setItem(this.symbol, this.symbol);
      console.log(" quote ", quote)

      stQuote.currentPrice = jsonData.c;
      stQuote.change = jsonData.d;
      stQuote.persentChange = jsonData.dp;
      stQuote.high = jsonData.h;
      stQuote.low = jsonData.l;
      stQuote.open = jsonData.o;
      stQuote.priviceclose = jsonData.pc;
      stQuote.timestamp = jsonData.t;
      // stocksymbol code
      jsonData = JSON.parse(JSON.stringify(search));
      stSymbol.description = jsonData.result[0].description;
      stSymbol.displaySymbol = jsonData.result[0].displaySymbol;
      stSymbol.symbol = jsonData.result[0].symbol;
      stSymbol.type = jsonData.result[0].type;

     
      let stock: Stock = new Stock();
      stock.StockQuote = stQuote;
      stock.StockSymbol = stSymbol;
      this.stockService.stock = stock;
      this.addStocker.emit(stock);
      console.log("stock", stock)
    });
   
    
   

  }
}
