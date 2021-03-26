import { ModuleWithProviders, NgModule, Optional, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestClient } from './rest-client.service';

export function clientAPIFactory(http: HttpClient): RestClient {
  return new RestClient(http);
}

export const REST_CLIENT_PROVIDER: Provider = {
  provide: RestClient,
  useFactory: clientAPIFactory,
  deps: [HttpClient, new Optional()]
};

@NgModule({
  declarations: [],
  imports: []
})
export class RestClientModule {
  public static forRoot(): ModuleWithProviders<RestClientModule> {
    return {
      ngModule: RestClientModule,
      providers: [ REST_CLIENT_PROVIDER ]
    }
  }
  public static forChild(): ModuleWithProviders<RestClientModule> {
    return {
      ngModule: RestClientModule,
      providers: [ REST_CLIENT_PROVIDER ]
    }
  }
}
