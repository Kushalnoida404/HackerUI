import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
import { NewsService } from 'src/app/shared/services/news.service';
import { of } from 'rxjs';
import { News } from 'src/app/shared/model/news.model';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NewsListComponent', () => {
    let component: NewsListComponent;
    let fixture: ComponentFixture<NewsListComponent>;
    let newsService: NewsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NewsListComponent],
            providers: [NewsService, HttpClient, HttpHandler],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsListComponent);
        component = fixture.componentInstance;
        newsService = TestBed.inject(NewsService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch news list on initialization', () => {
        const newsList: News[] = [
            { id: 1, title: 'Benchmarking Ourselves over Time at DuckDB', url: 'https://duckdb.org/2024/06/26/benchmarks-over-time.html' , by:"vgt"},
            { id: 2, title: 'Rabbit failed to properly reset keys: emails can be sent from rabbit.tech domain', url: 'https://rabbitu.de/articles/security-disclosure-2', by:"davidbarker" }
        ];
        spyOn(newsService, 'getNews').and.returnValue(of(newsList));

        component.ngOnInit();

        expect(component.newsItems).toEqual(newsList);
    });

    it('should calculate the correct number of pages', () => {
        component.newsItems = [
            { id: 1, title: 'Benchmarking Ourselves over Time at DuckDB', url: 'https://duckdb.org/2024/06/26/benchmarks-over-time.html' , by:"vgt"},
            { id: 2, title: 'Rabbit failed to properly reset keys: emails can be sent from rabbit.tech domain', url: 'https://rabbitu.de/articles/security-disclosure-2', by:"davidbarker" }
        ];
        component.itemsPerPage = 5;

        component.calculatePages();

        expect(component.pages).toEqual([1]); // Expected number of pages based on itemsPerPage
    });

    it('should change the current page', () => {
        const page = 2;

        component.changePage(page);

        expect(component.currentPage).toBe(page);
    });
});