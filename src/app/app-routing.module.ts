import { GitResultComponent } from './git-result/git-result.component';
import { GitFormComponent } from './git-form/git-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "gitForm", component: GitFormComponent},
  {path: "gitResult", component: GitResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
