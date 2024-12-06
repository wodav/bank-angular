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

import { Transaction } from '../models/transaction';
import { transactionsPost } from '../fn/user-transactions/transactions-post';
import { TransactionsPost$Params } from '../fn/user-transactions/transactions-post';
import { usersUserIdAccountsAccountIdTransactionsGet } from '../fn/user-transactions/users-user-id-accounts-account-id-transactions-get';
import { UsersUserIdAccountsAccountIdTransactionsGet$Params } from '../fn/user-transactions/users-user-id-accounts-account-id-transactions-get';

@Injectable({ providedIn: 'root' })
export class UserTransactionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersUserIdAccountsAccountIdTransactionsGet()` */
  static readonly UsersUserIdAccountsAccountIdTransactionsGetPath = '/users/{user-id}/accounts/{account-id}/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersUserIdAccountsAccountIdTransactionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersUserIdAccountsAccountIdTransactionsGet$Response(params: UsersUserIdAccountsAccountIdTransactionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
    return usersUserIdAccountsAccountIdTransactionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersUserIdAccountsAccountIdTransactionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersUserIdAccountsAccountIdTransactionsGet(params: UsersUserIdAccountsAccountIdTransactionsGet$Params, context?: HttpContext): Observable<Array<Transaction>> {
    return this.usersUserIdAccountsAccountIdTransactionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Transaction>>): Array<Transaction> => r.body)
    );
  }

  /** Path part for operation `transactionsPost()` */
  static readonly TransactionsPostPath = '/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transactionsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transactionsPost$Response(params?: TransactionsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
    return transactionsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transactionsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transactionsPost(params?: TransactionsPost$Params, context?: HttpContext): Observable<Transaction> {
    return this.transactionsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Transaction>): Transaction => r.body)
    );
  }

}
