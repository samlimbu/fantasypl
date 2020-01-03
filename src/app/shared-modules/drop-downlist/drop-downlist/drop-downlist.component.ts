import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-downlist',
  templateUrl: './drop-downlist.component.html',
  styleUrls: ['./drop-downlist.component.css']
})
export class DropDownlistComponent implements OnInit {
  @Input() LIST = [];
  @Input() KEYS = [];
  @Input() title = 'select';
  @Output() eventClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onItemSelect(item) {
    this.eventClick.emit(item);
  }
}
