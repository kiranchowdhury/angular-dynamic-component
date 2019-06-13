import { Component, OnInit, Input, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  @Input() items: any[];
  @Input() defaultItem: any;
  @Input() id: string;

  dropdownForm: FormGroup;

  constructor(private injector: Injector, private fb: FormBuilder) {
    this.items = injector.get('items');
    this.defaultItem = injector.get('defaultItem');
  }

  ngOnInit() {
    this.dropdownForm = this.fb.group({
      selectedItem: [this.defaultItem]
    });
  }

}