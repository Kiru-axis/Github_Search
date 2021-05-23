import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';

@Component({
  selector: 'app-git-result',
  templateUrl: './git-result.component.html',
  styleUrls: ['./git-result.component.css']
})
export class GitResultComponent implements OnInit {
  searchGithubServices:GithubSearchService;
  user:User;
  repoDetails = [];

  constructor(searchGithubService: GithubSearchService) {
    this.searchGithubServices =searchGithubService
   }

   ngOnInit(){
    this.user = this.searchGithubServices.user
    this.repoDetails = this.searchGithubServices.repositoryData
  }

}
