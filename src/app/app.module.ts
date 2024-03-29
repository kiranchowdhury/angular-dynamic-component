import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ListBoxComponent, TextBoxComponent, CriteriaListComponent, DynamicComponent, RemoveComponent ],
  entryComponents: [CriteriaListComponent, ListBoxComponent, TextBoxComponent, RemoveComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
