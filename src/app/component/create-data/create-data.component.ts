import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from 'src/app/service/sheet.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css'],
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;
  owners = ['20D','BR','Da']//`${environment.owners}`;
  storages = ['Dispensa','Frigorifico','Congelador']//`${environment.owners}`;
  buttonActive: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private service: SheetService,
    private router: Router
  ) {
    this.googleSheetForm = this.formBuilder.group({
      name: formBuilder.control(''),
      number: formBuilder.control(''),
      amount: formBuilder.control(''),
      placeOfStorage: formBuilder.control(''),
      weight: formBuilder.control(''),
      validationDate: formBuilder.control(''),
      owner: formBuilder.control(''),
      comment: formBuilder.control(''),
    });
  }

  ngOnInit() {}

  public save(close: boolean) {
    
    this.buttonActive = false;

    const name = this.googleSheetForm.value.name;
    const number = this.googleSheetForm.value.number;
    const amount = this.googleSheetForm.value.amount;
    const placeOfStorage = this.googleSheetForm.value.placeOfStorage;
    const weight = this.googleSheetForm.value.weight;
    const validationDate = this.googleSheetForm.value.validationDate;
    const owner = this.googleSheetForm.value.owner;
    const comment = this.googleSheetForm.value.comment;

    this.service.createSheet(name, number, amount, placeOfStorage,weight, validationDate, owner, comment).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          if (close) {
            this.router.navigate(['/list-data']);
          } else {
            this.googleSheetForm.reset();
          }
          this.buttonActive = true;
        }
      },
      error: (error) => {
        console.log(error);
        this.buttonActive = true;
      },
    });
  }
}
