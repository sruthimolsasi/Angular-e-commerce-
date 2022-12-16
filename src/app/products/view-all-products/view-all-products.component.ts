import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  products:any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
 
       this.productService.viewallproduct().subscribe(data=>{
        console.log('data is',data);
        this.products=data
       })
  }

}