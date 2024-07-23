import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interface/products';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Products[],limit:string): Products[] {
    return products .filter((item)=>item.title.toLowerCase().includes(limit.toLowerCase()));
  }

}
