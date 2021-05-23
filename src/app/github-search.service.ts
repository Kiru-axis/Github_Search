import { HttpClient } from '@angular/common/http';
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
  

  constructor (private http:HttpClient) { 
    this.user = new User("", "", "", 0, new Date())
    this.repository = new Repository("", "", new Date, "", "");
  }
  
   //fetching userdat
   getUserData(username:string){
    interface ApiResponse{
      login:string, 
      avatar_url:string,
      bio:string,
      public_repos:number,
      created_at:Date,

      //username and such
    };
}
