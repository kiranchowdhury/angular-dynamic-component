import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CriteriaListComponent, ListBoxComponent, TextBoxComponent ],
  entryComponents: [CriteriaListComponent, ListBoxComponent, TextBoxComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
