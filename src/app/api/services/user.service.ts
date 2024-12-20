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

import { createUser } from '../fn/user/create-user';
import { CreateUser$Params } from '../fn/user/create-user';
import { deleteUser } from '../fn/user/delete-user';
import { DeleteUser$Params } from '../fn/user/delete-user';
import { updateUser } from '../fn/user/update-user';
import { UpdateUser$Params } from '../fn/user/update-user';
import { User } from '../models/user';
import { usersFindByNameGet } from '../fn/user/users-find-by-name-get';
import { UsersFindByNameGet$Params } from '../fn/user/users-find-by-name-get';
import { usersIdGet } from '../fn/user/users-id-get';
import { UsersIdGet$Params } from '../fn/user/users-id-get';
import { usersRoleGet } from '../fn/user/users-role-get';
import { UsersRoleGet$Params } from '../fn/user/users-role-get';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createUser()` */
  static readonly CreateUserPath = '/users';

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params?: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return createUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params?: CreateUser$Params, context?: HttpContext): Observable<User> {
    return this.createUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `usersIdGet()` */
  static readonly UsersIdGetPath = '/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet$Response(params: UsersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet(params: UsersIdGet$Params, context?: HttpContext): Observable<User> {
    return this.usersIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/users/{id}';

  /**
   * Update User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Update User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<User> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `deleteUser()` */
  static readonly DeleteUserPath = '/users/{id}';

  /**
   * Delete User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: DeleteUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return deleteUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: DeleteUser$Params, context?: HttpContext): Observable<User> {
    return this.deleteUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `usersFindByNameGet()` */
  static readonly UsersFindByNameGetPath = '/users/findByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersFindByNameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersFindByNameGet$Response(params: UsersFindByNameGet$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersFindByNameGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersFindByNameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersFindByNameGet(params: UsersFindByNameGet$Params, context?: HttpContext): Observable<User> {
    return this.usersFindByNameGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `usersRoleGet()` */
  static readonly UsersRoleGetPath = '/users/role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersRoleGet$Response(params: UsersRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersRoleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersRoleGet(params: UsersRoleGet$Params, context?: HttpContext): Observable<User> {
    return this.usersRoleGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

}
