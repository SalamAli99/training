import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MealsModule} from "./meals/meals.module";

@NgModule({
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
    MealsModule,
    FormsModule,
    AppRoutingModule,
    
  ],

  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
