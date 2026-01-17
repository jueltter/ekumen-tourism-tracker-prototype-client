import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AchievementService} from './achievement.service';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Stalin');

  achievements : any[] = [];

  constructor(private achievementService: AchievementService) {
  }

  ngOnInit(): void {
    //this.findAll();
  }

  private findAll() {
    this.achievementService.search().subscribe(achievements => {
      console.log(achievements);
      this.achievements = achievements
    });

  }
}
