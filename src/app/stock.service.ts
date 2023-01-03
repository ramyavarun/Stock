import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './Model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=ceml3piad3ieeugkaih0ceml3piad3ieeugkaihg";
 public stock!: Stock;

  constructor(private http: HttpClient) { }

  getSymbolData(symbol:string){
    return this.http.get(
      this.configUrl + "quote?symbol=" + symbol + this.token
    );
    }
    getSearchData(symbol:string){
      return this.http.get(
        this.configUrl + "search?q=" + symbol + this.token
      );
      


  }
  getStockNews(symbol:string){
    return this.http.get(
      this.configUrl + "stock/insider-sentiment?symbol=" + symbol + "&from=2015-01-01&to=2022-03-01" + this.token
    );
    // stock/insider-sentiment?symbol=TSLA&from=2015-01-01&to=2022-03-01&token=


}
}
