import { inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export const APP_CONFIG = new InjectionToken<typeof environment>('app.config');

@Injectable({
  providedIn: 'root',
})
export class LoggerWrapperService {
  private config = inject(APP_CONFIG);

  private showDebugLogs = this.config.showDebugLogs;

  log(message: any, ...optionalParams: any[]) {
    if (this.showDebugLogs) {
      console.log(message, ...optionalParams);
    }
  }

  error(message: any, ...optionalParams: any[]) {
    if (this.showDebugLogs) {
      console.error(message, ...optionalParams);
    }
  }

  warn(message: any, ...optionalParams: any[]) {
    if (this.showDebugLogs) {
      console.warn(message, ...optionalParams);
    }
  }

  info(message: any, ...optionalParams: any[]) {
    if (this.showDebugLogs) {
      console.info(message, ...optionalParams);
    }
  }

  debug(message: any, ...optionalParams: any[]) {
    if (this.showDebugLogs) {
      console.debug(message, ...optionalParams);
    }
  }



}
