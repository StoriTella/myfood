import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent {

  name = '';
  @Output() addFilter = new EventEmitter<string>()

  constructor() {
  }

  detectChange(event: any) {
    this.addFilter.emit(event);
  }
}
