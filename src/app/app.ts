import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AchievementService} from './achievement.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ekumen-tourism-tracker-prototype-client');

  achievements : any[] = [];

  constructor(private achievementService: AchievementService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.achievementService.search().subscribe(achievements => {
      console.log(achievements);
      this.achievements = achievements
    });

  }
}
