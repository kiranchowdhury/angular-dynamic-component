import { Component } from '@angular/core';
import {ListBoxComponent} from './list-box/list-box.component';
import {TextBoxComponent} from './text-box/text-box.component';
import {RemoveComponent} from './remove/remove.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  componentData = null;

  createListComponent() {
    const rand = Math.floor(Math.random() * 1000) + 1;
    const payload = {
      items: ['Quote Id(s)', 'Approval Code', 'Approval Date'],
      defaultItem:  'Quote Id(s)',
      id: rand
    }
    this.componentData = {
      component: ListBoxComponent,
      inputs: payload
    }
    setTimeout(() => {this.createTextComponent(rand)}, 0);
    setTimeout(() => {this.createRemoveComponent(rand)}, 0);
  }

  createTextComponent(rand) {
    const payload = {
      searchString: '',
      helpText: 'Multiple quotes search is allowd',
      id: rand
    }
    this.componentData = {
      component: TextBoxComponent,
      inputs: payload
    }
    
  }

  createRemoveComponent(rand) {
    const payload = {id: rand};
    this.componentData = {
      component: RemoveComponent,
      inputs: payload
    }
  }



}
