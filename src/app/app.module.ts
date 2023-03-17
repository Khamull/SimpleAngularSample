import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , RouterModule.forRoot(routes)
    , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
