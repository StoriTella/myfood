import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SheetService } from 'src/app/service/sheet.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  updateSheetForm!: FormGroup;
  id!: number;
  data!: any;
  owners = ['20D','BR','Da']//`${environment.owners}`;
  storages = ['Dispensa','Frigorifico','Congelador']//`${environment.owners}`;

  constructor(
    private formBuilder: FormBuilder,
    private service: SheetService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateSheetForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      amount: [''],
      placeOfStorage: ['', Validators.required],
      weight: [''],
      validationDate: [''],
      owner: ['', Validators.required],
      comment: [''],
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getSheetDataById(this.id).subscribe((res: any) => {
        console.log(res[0]);
        this.data = res[0];
        this.updateSheetForm.get('name')?.setValue(this.data.name);
        this.updateSheetForm.get('number')?.setValue(this.data.number);
        this.updateSheetForm.get('amount')?.setValue(this.data.amount);
        this.updateSheetForm.get('placeOfStorage')?.setValue(this.data.placeOfStorage);
        this.updateSheetForm.get('weight')?.setValue(this.data.weight);
        this.updateSheetForm.get('validationDate')?.setValue(this.data.validationDate);
        this.updateSheetForm.get('owner')?.setValue(this.data.owner);
        this.updateSheetForm.get('comment')?.setValue(this.data.comment);
      });
    });
  }

  onSubmit() {
    const { value } = this.updateSheetForm;
    console.log('value', value);

    const name = this.updateSheetForm.value.name;
    const number = this.updateSheetForm.value.number;
    const amount = this.updateSheetForm.value.amount;
    const placeOfStorage = this.updateSheetForm.value.placeOfStorage;
    const weight = this.updateSheetForm.value.weight;
    const validationDate = this.updateSheetForm.value.validationDate;
    const owner = this.updateSheetForm.value.owner;
    const comment = this.updateSheetForm.value.comment;

    this.service
      .updateSheet(this.id, name, number, amount, placeOfStorage, weight, validationDate, owner, comment)
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.router.navigate(['/list-data']);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
