import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  username:string;
  searchGithubService: GithubSearchService;

  submitUsername(){
    this.searchGithubService.getUserData(this.username)
  }

  constructor(searchGithubService: GithubSearchService) {
    this.searchGithubService = searchGithubService
   }

  ngOnInit(): void {
  }

}
