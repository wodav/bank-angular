import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { User } from '../api/models/user';
import { UsersService } from '../api/services/users.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{


    users: User[] = [];
    // Inject the generated Angular service as a dependency of this class
    constructor(private usersService: UsersService) {}

    getUsers() {
        this.usersService.usersGet().subscribe(
            data => {
                this.users = data;
                //accounts = this.users.accounts;
            });
        }


    ngOnInit() {
        this.getUsers();
    }

}
