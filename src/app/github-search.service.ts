import { Repository } from './repository';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  user!: User;
  repository!:Repository;
  repositoryData = [];
  newUserData:any = [];

  constructor() { }
}
