import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterstring:string,productName:string): any{
    const result:any=[]
    if(!value|| filterstring==''||productName==''){
      return value
    }
    
    value.forEach((item:any)=>{
      if(item[productName].trim().toLowerCase().includes(filterstring.toLowerCase())){

        result.push(item)
      }
    })
    return result
  }

}
