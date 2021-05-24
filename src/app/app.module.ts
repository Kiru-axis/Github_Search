import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultComponent } from './git-result/git-result.component';
import { ColorDirective } from './Directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitResultComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
