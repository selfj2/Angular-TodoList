import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoComponent} from './ToDo/todo.component';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
