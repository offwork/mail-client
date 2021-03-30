import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseApi } from './base-api';
import { environment } from '@env/environment';
@Injectable()
export class RestClient extends BaseApi {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) {
    super(httpClient);
  }

  request(method: string, url: string, body?: any | null, options?: {}): Observable<any> {
    const apiBaseUrl = environment.API_URL
    const param = {...options };

    return this.httpClient.request(method, `${apiBaseUrl}/${url}`, {
      body: body,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: param,
      observe: 'body',
      reportProgress: false,
      responseType: 'json',
      withCredentials: false,
    }).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }

    return throwError(`Something bad happened; please try again later. ${error.message}`);
  }
}
