import { Component } from '@angular/core';
import {ListBoxComponent} from './list-box/list-box.component';
import {TextBoxComponent} from './text-box/text-box.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  componentData = null;

  createListComponent() {
    const payload = {
      items: ['Quote Id(s)', 'Approval Code', 'Approval Date'],
      defaultItem:  'Quote Id(s)'
    }
    this.componentData = {
      component: ListBoxComponent,
      inputs: payload
    }
    setTimeout(() => {this.createTextComponent()}, 0)
  }

  createTextComponent() {
    const payload = {
      searchString: '',
      helpText: 'Multiple quotes search is allowd'
    }
    this.componentData = {
      component: TextBoxComponent,
      inputs: payload
    }
  }



}
