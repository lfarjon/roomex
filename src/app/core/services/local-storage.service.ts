import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(item: string, itemData: any) {
    localStorage.setItem(item, JSON.stringify(itemData));
  }

  getItem(item: string): any {
    const data = localStorage.getItem(item);
    return data ? JSON.parse(data) : null;
  }
}
