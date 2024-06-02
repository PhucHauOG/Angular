import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductGame } from '../../shared/model/product/product-game';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public searchSubject = new BehaviorSubject<string>("");
  public gameSubject = new BehaviorSubject<ProductGame[]>([]);
  url: string = 'https://localhost:7080/api/game';
  searchurl: string = 'https://localhost:7080/api/game/search';
  list: ProductGame [] = [];
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('access-control-allow-origin', "https://localhost:7080/") };

  constructor(private http: HttpClient) {}

  // refreshList() {
  //   this.http.get(this.ulr).subscribe({
  //     next: res => {
  //       this.list = res as ProductGame [];
  //     },
  //     error: err => {console.log(err)}
  //   })
  // }

  getGames() {
    this.http.get<ProductGame[]>(this.url, this.httpOptions).subscribe((data) => {
      this.gameSubject.next(data);
    })
  }


  search(query: string):Observable<ProductGame[]> {
    return this.http.get<ProductGame[]>(`${this.searchurl}/${query}`, this.httpOptions).pipe(
      map(response => response)
    );
  } 
}
