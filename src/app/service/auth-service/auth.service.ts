import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { error } from 'console';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7080/api/account';
  private loggedIn: boolean = false;
  private username: string = '';
  private roles: string = '';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ username, password });

    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers }).pipe(
        map(response => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.decodeToken(token);
          return response;
        }),
        catchError((error: any) => {
          console.error('Error logging in', error);
          throw error;
        })
      );
  }

  signup(username: string, email: string, password:string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ username, email, password });

    return this.http.post<any>(`${this.apiUrl}/signup`, body, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error signning up', error);
        throw error;
      })
    );
  }

  private decodeToken(token: string): void {
    const decodeToken = this.jwtHelper.decodeToken(token);
    this.loggedIn = true;
    this.username = decodeToken.given_name;
    this.roles = decodeToken.role || '';
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }

  getRoles(): string  {
    return this.roles;
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.username = '';
    this.roles = '';
  }
}
