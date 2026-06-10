import { inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from '@environments/environment';

export const APP_CONFIG = new InjectionToken<typeof environment>('app.config');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  private config = inject(APP_CONFIG);

  get backendUrl(): string {
    return this.config.backendUrl;
  }

  get showDebugLogs(): boolean {
    return this.config.showDebugLogs;
  }

}
