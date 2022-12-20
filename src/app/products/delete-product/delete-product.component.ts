import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productid:any
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {

   this.activatedroute.params.subscribe((data:any)=>{
    this.productid=data['id']
   })
   this.productservice.DeleteProduct(this.productid).subscribe((item:any)=>{
    alert('product deleted')
    this.router.navigateByUrl('products')
   })

  }

}
