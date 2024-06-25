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
  httpOptionsImage = { headers: new HttpHeaders({ 'enctype': 'multipart/form-data'})
    .set('access-control-allow-origin', "https://localhost:7080/") };

  constructor(private http: HttpClient) {}

  getGames() {
    this.http.get<ProductGame[]>(this.url, this.httpOptions).subscribe((data) => {
      this.gameSubject.next(data);
    })
  }

  displayGameList(): Observable<ProductGame[]> {
    return this.http.get<ProductGame[]>(this.url, this.httpOptions);
  }

  search(query: string):Observable<ProductGame[]> {
    return this.http.get<ProductGame[]>(`${this.searchurl}/${query}`, this.httpOptions).pipe(
      map(response => response)
    );
  } 

  addGames(formData: FormData): Observable<ProductGame> {
    return this.http.post<ProductGame>(`${this.url}`, formData, this.httpOptions);
  }

  editGames(id: string, game: ProductGame): Observable<ProductGame> {
    return this.http.put<ProductGame>(`${this.url}/${id}`, game);
  }

  deleteGames(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
