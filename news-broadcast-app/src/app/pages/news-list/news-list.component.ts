import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/model/news.model';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  newsItems: News[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  pages: any;
  isLoading = false;
  searchQuery: any;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList(): void {
    this.isLoading = true;
    this.newsService.getNews().subscribe((newsList) => {
      this.isLoading = false;
      this.newsItems = newsList.filter((news) => news.url);
      this.calculatePages();
    });
  }

  calculatePages() {
    const numberOfPages = Math.ceil(this.newsItems.length / this.itemsPerPage);
    this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
