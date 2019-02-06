import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export interface IAppConfig {
  idParam: string;
}

export const AppConfig: IAppConfig = {
    idParam: 'id'
};
