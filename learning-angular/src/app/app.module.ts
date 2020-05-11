import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillnagarComponent } from './skillnagar/skillnagar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillnagarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
