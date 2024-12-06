/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Account } from '../../models/account';

export interface UsersIdAccountsGet$Params {

/**
 * Numeric Id of User
 */
  id: number;
}

export function usersIdAccountsGet(http: HttpClient, rootUrl: string, params: UsersIdAccountsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Account>>> {
  const rb = new RequestBuilder(rootUrl, usersIdAccountsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Account>>;
    })
  );
}

usersIdAccountsGet.PATH = '/users/{id}/accounts';
