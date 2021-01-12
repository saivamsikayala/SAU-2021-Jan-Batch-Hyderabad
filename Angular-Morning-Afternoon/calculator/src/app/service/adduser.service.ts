import { Injectable } from '@angular/core';
import { user } from '../user';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  sortedUsers: user[];
  users: user[] = [];
  addUser(User: user): void{
    console.log(User);
    this.users.push(User);
  }
  getUsers(): user[]{
    return this.users;
  }
  constructor() { 
    this.sortedUsers = this.users.slice();
  }
  
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

