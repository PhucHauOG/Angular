import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { GamesService } from 'src/app/service/game-service/games.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  addProductMessage: string | undefined;
  gameForm!: FormGroup;
  file: File | null = null;
  error: Error | null = null;

  constructor(private gameService: GamesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Image: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    });
  }

  onFileChange(event: any) {
    console.log(event)
    if (event.target.files.length > 0) {
      this.file = event.target.files[0]
    }
  }


  submit() {
    if (this.gameForm.valid) {
      const formData = new FormData;
      formData.append("Name", this.gameForm.value.Name);
      formData.append("Image", this.gameForm.value.Image);
      formData.append("Description", this.gameForm.value.Description);
      formData.append("Price", this.gameForm.value.Price);
      if (this.file) {
        formData.append("formFile", this.file);
      }

      console.log(formData);

      this.addGames(formData);
      this.gameForm.reset();

      alert('Changes applied successfully!');
    }


    setTimeout(() => {
      this.addProductMessage = undefined
    }, 3000);

    this.router.navigate(['/admin-dashboard']);
  }
  
  addGames(formData: FormData) {
    this.gameService.addGames(formData).pipe(
      tap({
        error: (error) => { this.error = error }
      }),
      catchError(err => of([]))
    ).subscribe();
  }
}
