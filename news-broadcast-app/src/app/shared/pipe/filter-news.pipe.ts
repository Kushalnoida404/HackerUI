import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {
  transform(newsItems: any[], searchQuery: string): any[] {
    if (!newsItems) return [];
    if (!searchQuery) return newsItems;
    searchQuery = searchQuery.toLowerCase();
    return newsItems.filter(newsItem =>
      newsItem.title.toLowerCase().includes(searchQuery));
  }
}