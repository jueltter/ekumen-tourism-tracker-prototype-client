import { inject, Injectable, InjectionToken } from '@angular/core';
import { EnvironmentService } from './environment.service';



@Injectable({
  providedIn: 'root',
})
export class LoggerWrapperService {
  private environmentService = inject(EnvironmentService);

  private showDebugLogs = this.environmentService.showDebugLogs;

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
