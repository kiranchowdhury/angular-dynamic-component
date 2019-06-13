import { Component, OnInit, Input, Injector, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  @Input() id: any;
  @Output() remove = new EventEmitter<any>();
  constructor(injector: Injector) {
    this.id = injector.get('id');
  }

  ngOnInit() {
  }

  notify() {
    this.remove.emit(this.id);
  }

}