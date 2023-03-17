import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/api-calls.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , HttpClientModule

  ],
  providers: [
    DataService
  ]
})
export class ProductModule { }
