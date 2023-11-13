import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-storage',
  templateUrl: './filter-storage.component.html',
  styleUrls: ['./filter-storage.component.css']
})
export class FilterStorageComponent {
    storages = ['Dispensa','Frigorifico','Congelador']//`${environment.owners}`;
    storage = '';
    @Output() addFilter = new EventEmitter<string>()
  
    constructor() {
    }
  
    detectChange(event: any) {
      this.addFilter.emit(event);
    }
  }