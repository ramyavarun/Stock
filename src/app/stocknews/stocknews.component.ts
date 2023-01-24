import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../Model/stock';
import { StockNews } from '../Model/stocknews';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocknews',
  templateUrl: './stocknews.component.html',
  styleUrls: ['./stocknews.component.css']
})
export class StocknewsComponent implements OnInit {
  @Input() stock:Stock[]=[];
  newsData: StockNews[]=[]; 
  constructor(public stockservice:StockService, public route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ngOninit",id);
    console.log("new", this.stockservice.stock);
    this.stockservice.getStockNews(this.stockservice.stock.StockSymbol.displaySymbol).subscribe(data => {
     let jsonData = JSON.parse(JSON.stringify(data));

     jsonData.data.slice(-3).forEach((element:object)  => {
let elementJsonData=JSON.parse(JSON.stringify(element));
      let  news:StockNews=new StockNews();
      news.symbol=elementJsonData.symbol;
      news.year=elementJsonData.year;
      news.month=elementJsonData.month;
      news.change=elementJsonData.change;
      news.mspr=elementJsonData.mspr;
       this.newsData.push(news);

  
});


   



 // this.newsData= this.newsData.slice(Math.max(this.newsData.length - 3, 1))
      console.log("newsdata", this.newsData);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }

}
