import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  user:User;  //For getting usernaem
  repository:Repository; //for the repo
  repositoryData = [];
  newUserData:any = [] ;


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
    let promise = new Promise <void>((reject,resolve) =>{
      this.http.get<ApiResponse>(" https://api.github.com/users/" + username).toPromise().then(response =>{
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos;
        this.user.created_at = response.created_at;
        
        resolve();
      },
      error =>{
        reject(error)
      })

      //repository dat
      this.http.get<any>(" https://api.github.com/users/" + username + "/repos").toPromise().then(response =>{
        for(let i = 0; i < response.length; i ++){
          this.newUserData = new Repository(response[i].name,response[i].descriptin,response[i].updated_at,response[i].clone_url, response[i].language)
          this.repositoryData.push(this.newUserData)
        }

        resolve()
      },error =>{
        reject(error)
      }
      )

    })

    return promise;
  }
}
