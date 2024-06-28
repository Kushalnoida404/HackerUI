import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsService } from './shared/services/news.service';
import { FilterNewsPipe } from './shared/pipe/filter-news.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewsListComponent, FilterNewsPipe],
  imports: [BrowserModule,FormsModule, HttpClientModule],
  providers: [NewsService, FilterNewsPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
