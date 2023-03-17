import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/api-calls.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any[] = [];
  productsForm: FormGroup;


  ngOnInit() {
    this.getData();
  }
  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.productsForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    });

  }
  getData() {
    this.dataService.getAllData('Products').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  createData() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: this.productsForm.value.name,
      price: this.productsForm.value.price,
      category: {
        id: 0,
        name: 'Cat1',
        products: []
      },
      supplier: {
        id: 0,
        name: 'Sup1',
        products: []
      }
    };

    this.dataService.createData('Products', body).subscribe(data => {
      this.data.push(data);
      this.productsForm.reset();
    });
  }
  updateData(dataId: string) {
    const newData = { ...this.productsForm.value, id: dataId };
    this.dataService.updateData(parseInt(dataId), this.productsForm.value).subscribe(data => {
      const index = this.data.findIndex(d => d.id === dataId);
      if (index !== -1) {
        this.data[index] = data;
        this.productsForm.reset();
      }
    });
  }

  deleteData(dataId: string) {
    this.dataService.deleteData(parseInt(dataId)).subscribe(() => {
      const index = this.data.findIndex(d => d.id === dataId);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    });
  }

  onSubmit() {
    this.createData();
  }
}
