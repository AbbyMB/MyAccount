import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ISubscription } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getSubscriptions() : Observable<ISubscription[]> {
    return this.http.get<ISubscription[]>(this.baseUrl + 'subscriptions.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'backend server error');
  }

}
