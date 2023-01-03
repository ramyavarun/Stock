import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StocknewsComponent } from './stocknews/stocknews.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockTrackerComponent,
    StockDetailComponent,
    StocknewsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
