import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsService } from './shared/services/news.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NewsListComponent],
      providers: [NewsService, HttpClient, HttpHandler]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'news-broadcast-app'`, () => {
    expect(component.title).toEqual('news-broadcast-app');
  });
});