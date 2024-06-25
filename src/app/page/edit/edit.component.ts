// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { GamesService } from 'src/app/service/game-service/games.service';
// import { ProductGame } from 'src/app/shared/model/product/product-game';

// @Component({
//   selector: 'app-edit',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './edit.component.html',
//   styleUrl: './edit.component.scss'
// })
// export class EditComponent {
//   gameData: ProductGame[] = [];
//   Message: undefined | string;
//   editForm: FormGroup;
//   productgame: ProductGame[]=[];

//   constructor(private route: ActivatedRoute, private gameService: GamesService, private formBuilder: FormBuilder) {
//     this.editForm = this.formBuilder.group({
//       id: [''],
//       name: ['', Validators.required],
//       image: ['', Validators.required],
//       description: ['', Validators.required],
//       price: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//     let gameId = this.route.snapshot.paramMap.get('id');
//     console.warn(gameId);
//     gameId &&
//       this.gameService.displayGameList().subscribe((data) => {
//         console.warn(data);
//         this.gameData = data;
//       });
//   }
//   submit(data: any) {
//     if (this.gameData) {
//       data.id = this.gameData.id;
//     }
//     this.gameService.editGames(data.id, data).subscribe((result) => {
//       if (result) {
//         this.Message = 'Game has updated';
//       }
//     });
//     setTimeout(() => {
//       this.Message = undefined;
//     }, 3000);
//     console.warn(data);
//   }
// }