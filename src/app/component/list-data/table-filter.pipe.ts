import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], filters: { [key: string]: any }) {
    const keys = Object.keys(filters).filter(key => filters[key]);
    const filterDatum = (datum: { [x: string]: any; }) => keys.every(key => datum[key].toUpperCase().includes(filters[key].toUpperCase()));
    

    return keys.length ? list.filter(filterDatum) : list;
  }

}