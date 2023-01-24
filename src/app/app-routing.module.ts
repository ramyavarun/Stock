import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StocknewsComponent } from './stocknews/stocknews.component';

const routes: Routes = [
  {
    path:" ",redirectTo:"home",pathMatch:"full"
  },
   {
    path:"home",component:HomeComponent,pathMatch:"full"
  },
  {
    path:"stock-news/:id",component:StocknewsComponent,pathMatch:"full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
