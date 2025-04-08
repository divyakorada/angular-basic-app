import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchText: string, fieldName:string): any {
    console.log('searchText:::: ', searchText);
    console.log('fieldName::::', fieldName);
    if(!items) {return null}

    return items.filter((e:any) => {
      console.log('e::::', fieldName);
      if(e && e[fieldName]) {
        return e[fieldName].toLowerCase().includes(searchText);
      }
    });
  }

}
 
