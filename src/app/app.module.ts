import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDataComponent } from './component/list-data/list-data.component';
import { CreateDataComponent } from './component/create-data/create-data.component';
import { EditDataComponent } from './component/edit-data/edit-data.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FilterOwnerComponent } from './component/filter-table/filter-owner/filter-owner.component';
import { TableFilterPipe } from './component/list-data/table-filter.pipe';
import { FilterStorageComponent } from './component/filter-table/filter-storage/filter-storage.component';
import { FilterNameComponent } from './component/filter-table/filter-name/filter-name.component';

@NgModule({
  declarations: [AppComponent, ListDataComponent, CreateDataComponent, EditDataComponent, FilterOwnerComponent, TableFilterPipe, FilterStorageComponent, FilterNameComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TableFilterPipe]
})
export class AppModule {}
