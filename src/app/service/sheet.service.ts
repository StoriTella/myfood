import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sheet } from '../models/sheet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private http: HttpClient) {}

  createSheet(
    name: string,
    number: string,
    amount: string,
    placeOfStorage: string,
    weight: string,
    validationDate: string,
    owner: string,
    comment: string
  ): Observable<Sheet> {
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, {
      name,
      number,
      amount,
      placeOfStorage,
      weight,
      validationDate,
      owner,
      comment
    });
  }

  listSheet() {
    return this.http.get(`${environment.CONNECTION_URL}`);
  }

  deleteSheet(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL}/${id}`);
  }

  getSheetDataById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL}/${id}`);
  }

  updateSheet(
    id: number,
    name: string,
    number: string,
    amount: string,
    placeOfStorage: string,
    weight: string,
    validationDate: string,
    owner: string,
    comment: string
  ): Observable<Sheet> {
    return this.http.put<Sheet>(`${environment.CONNECTION_URL}/${id}`, {
      name,
      number,
      amount,
      placeOfStorage,
      weight,
      validationDate,
      owner,
      comment
    });
  }
}
