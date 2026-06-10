import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoggerWrapperService } from '@common-services/logger-wrapper.service';
import { AchievementService } from '@tourism-tracker-services/achievement.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private logger = inject(LoggerWrapperService);

  protected readonly title = signal('Stalin');

  achievements : any[] = [];

  constructor() {
  }

  private achievementService = inject(AchievementService);

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.achievementService.search().subscribe(achievements => {
      this.logger.info('Found achievements:', achievements);
      this.achievements = achievements
    });

  }
}
