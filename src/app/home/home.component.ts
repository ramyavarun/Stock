import { Component, OnInit } from '@angular/core';
import { Stock } from '../Model/stock';
import { StockQuote } from '../Model/stockQuote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stockList:Stock[]=[];

 
  constructor() { }

  ngOnInit(): void {
  }
  addSymbol($event:Stock){
    this.stockList.push($event);
   
    console.log("home " ,$event);

  }
  deletestock($event: string) {
    this.stockList.splice(this.stockList.findIndex(item => item.StockSymbol.displaySymbol === $event), 1)


    }
}
