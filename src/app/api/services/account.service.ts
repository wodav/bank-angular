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
import { accountsIdGet } from '../fn/account/accounts-id-get';
import { AccountsIdGet$Params } from '../fn/account/accounts-id-get';
import { deleteAccount } from '../fn/account/delete-account';
import { DeleteAccount$Params } from '../fn/account/delete-account';
import { updateAccount } from '../fn/account/update-account';
import { UpdateAccount$Params } from '../fn/account/update-account';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `accountsIdGet()` */
  static readonly AccountsIdGetPath = '/accounts/{id}';

  /**
   * Returns account.
   *
   * Optional extended description in CommonMark or HTML
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsIdGet$Response(params?: AccountsIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Account>> {
    return accountsIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns account.
   *
   * Optional extended description in CommonMark or HTML
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsIdGet(params?: AccountsIdGet$Params, context?: HttpContext): Observable<Account> {
    return this.accountsIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Account>): Account => r.body)
    );
  }

  /** Path part for operation `updateAccount()` */
  static readonly UpdateAccountPath = '/accounts/{id}';

  /**
   * Update Account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccount$Response(params: UpdateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccount(params: UpdateAccount$Params, context?: HttpContext): Observable<User> {
    return this.updateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `deleteAccount()` */
  static readonly DeleteAccountPath = '/accounts/{id}';

  /**
   * Delete Account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccount$Response(params: DeleteAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<Account>> {
    return deleteAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccount(params: DeleteAccount$Params, context?: HttpContext): Observable<Account> {
    return this.deleteAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<Account>): Account => r.body)
    );
  }

}
