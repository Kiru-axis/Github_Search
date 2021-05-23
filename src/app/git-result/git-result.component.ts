import { User } from './../user';
import { GithubSearchService } from './../github-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-result',
  templateUrl: './git-result.component.html',
  styleUrls: ['./git-result.component.css']
})
export class GitResultComponent implements OnInit {

  searchGithubService:GithubSearchService;
  user:User;
  repoDetails = [];
  
  constructor(searchGithubService: GithubSearchService) {
    this.searchGithubService =searchGithubService
   }

  ngOnInit(){
    this.user = this.searchGithubService.user
    this.repoDetails = this.searchGithubService.repositoryData
  }

}