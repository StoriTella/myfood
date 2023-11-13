import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter-owner',
  templateUrl: './filter-owner.component.html',
  styleUrls: ['./filter-owner.component.css']
})
export class FilterOwnerComponent {
  owners = ['20D','BR','Da']//`${environment.owners}`;
  owner = '';
  @Output() addFilter = new EventEmitter<string>()

  constructor() {
  }

  detectChange(event: any) {
    this.addFilter.emit(event);
  }
}
