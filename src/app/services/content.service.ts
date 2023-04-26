import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  //auxilia no armazenamento de valores e estados
  private cache: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http: HttpClient) { }

  public content(): Observable<any> {
    if(this.cache.getValue() !== null) {
      return new Observable<any>((observer) => {
        observer.next(this.cache.getValue())
      })
    }

    return this.http.get('../../assets/content.json')
    .pipe(map(res => {
      this.cache.next(res);
      return this.cache.getValue()
    }))
  }
}
