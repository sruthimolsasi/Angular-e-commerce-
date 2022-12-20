import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   search=new BehaviorSubject('')

  constructor(private httpClient:HttpClient) { }

  viewallproduct(){
      const baseUrl='http://localhost:3000/products'
      return this.httpClient.get(baseUrl)
  }
  viewproduct(productid:any){
      const baseUrl='http://localhost:3000/products/'+productid
      return this.httpClient.get(baseUrl)
  }

  DeleteProduct(productid:any)
  {
      const baseUrl='http://localhost:3000/products/'+productid
      return this.httpClient.delete(baseUrl)
  }

  addproduct(productdata:any)
    {
      const baseUrl='http://localhost:3000/products/'
      return this.httpClient.post(baseUrl,productdata)
  }
  editproduct(productid:any,productdata:any)
  {
    const baseUrl='http://localhost:3000/products/'+productid
    return this.httpClient.put(baseUrl,productdata)
  }
}
