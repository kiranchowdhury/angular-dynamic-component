import { Component } from '@angular/core';
import {ListBoxComponent} from './list-box/list-box.component';
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
  }

  createTextComponent() {}

}
