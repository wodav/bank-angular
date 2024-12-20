/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Account } from '../models/account';
import { accountsGet } from '../fn/accounts/accounts-get';
import { AccountsGet$Params } from '../fn/accounts/accounts-get';

@Injectable({ providedIn: 'root' })
export class AccountsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `accountsGet()` */
  static readonly AccountsGetPath = '/accounts';

  /**
   * Returns a list of account.
   *
   * Optional extended description in CommonMark or HTML
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGet$Response(params?: AccountsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Account>>> {
    return accountsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns a list of account.
   *
   * Optional extended description in CommonMark or HTML
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGet(params?: AccountsGet$Params, context?: HttpContext): Observable<Array<Account>> {
    return this.accountsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Account>>): Array<Account> => r.body)
    );
  }

}
