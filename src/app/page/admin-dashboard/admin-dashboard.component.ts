import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { GamesService } from 'src/app/service/game-service/games.service';
import { ProductGame } from 'src/app/shared/model/product/product-game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatDialogModule, MatIconModule],
})
export class AdminDashboardComponent implements OnInit, OnChanges {

  @ViewChild(MatTable) table!: MatTable<ProductGame[]>;
  dataSource: ProductGame[] = [];
  
  displayedColumns = ['id', 'name', 'image', 'price', 'action'];

  constructor(private gameService: GamesService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.displayGameList();
    }
  }
  

  ngOnInit(): void {
    this.gameService.displayGameList().subscribe(
      (data) => {
        this.dataSource = data;
      }
    );
    this.displayGameList();
  }

  displayGameList() {
    this.gameService.displayGameList();
  }

  addGames() {
    this.router.navigate(['/add']);
  }

  editGames() {
    this.router.navigate(['/edit']);
  }

  deleteGames(id: string): void {
    this.gameService.deleteGames(id).subscribe(() => this.displayGameList());
    this.router.navigate(['/admin-dashboard']);
  }
}
