import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/service/game-service/games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  query: string = '';
  userName: string = '';

  constructor(private authService: AuthService, private router: Router, private gameService: GamesService) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
    }

  getUsername(): string {
    return this.authService.getUsername();
  }

  hasRole(role: string): boolean {
    return this.authService.getRoles().includes(role);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  search(): void {
    this.gameService.searchSubject.next(this.query);
    console.log(this.query)
  }
}