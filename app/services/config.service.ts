import {Injectable} from '@angular/core';
import {WindowRef} from './window-ref.service';

class DefaultConfig {
  protected baseUrl = 'http://localhost:8080/api';
  protected PAGE_SIZE = 10;
}

@Injectable()

export class ConfigService extends DefaultConfig {
  constructor(windowRef: WindowRef) {
    super();
    let arkiverConfig = windowRef.getNativeWindow().arkiver || {};
    Object.assign(this, arkiverConfig);
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getPageSize(): number {
    return this.PAGE_SIZE;
  }
}
