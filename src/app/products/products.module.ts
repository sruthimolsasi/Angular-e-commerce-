import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule

  ]
})
export class ProductsModule { }
