import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  //Used to bring in other angular modules that project will need
  declarations: [
    AppComponent
  ],
  //Used to make components, directives and pipes available
  bootstrap: [
    AppComponent
  ]
  //Shows the entry point for app code
})
export class AppModule{}
