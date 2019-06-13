import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Input() searchString;
  @Input() helpText;

  constructor(private injector: Injector) {
    this.searchString = injector.get('searchString');
    this.helpText = injector.get('helpText');
   }

  ngOnInit() {
  }

}