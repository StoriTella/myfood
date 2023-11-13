import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SheetService } from 'src/app/service/sheet.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  data: any = [];
  
  filters: { [key: string]: any } = [];

  constructor(private service: SheetService, private router: Router) {}

  ngOnInit() {
    this.listData();
  }

  listData() {
    this.service.listSheet().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteSheet(datum: any) {
    const index = this.data.findIndex((x: { name: any; owner: any; }) => x.name === datum.name && x.owner === datum.owner);
    this.service.deleteSheet(index).subscribe(
      (res: any) => {
        console.log(res);
        this.listData();
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(index);
  }

  editSheet(datum: any) {
    const id = this.data.findIndex((x: { name: any; owner: any; }) => x.name === datum.name && x.owner === datum.owner);
    this.router.navigate([`/edit-data/${id}`]);
  }

  addFilter(event: any, filter: string) {
    this.filters[filter] = event;
    this.filters = {...this.filters};
  }
  
}
