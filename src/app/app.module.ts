import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ListBoxComponent, TextBoxComponent ],
  entryComponents: [ListBoxComponent, TextBoxComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
