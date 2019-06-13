import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Input() searchString;
  @Input() helpText;

  constructor() { }

  ngOnInit() {
  }

}