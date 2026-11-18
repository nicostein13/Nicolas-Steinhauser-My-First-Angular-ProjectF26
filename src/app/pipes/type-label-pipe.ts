import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeLabel',
})
export class TypeLabelPipe implements PipeTransform {
  private labels: Record<string, string> = {
   fire: 'Fire Type',
   water: 'Water Type',
   grass: 'Grass Type',
   electric: 'Electric Type',
   poison: 'Poison Type',
   flying: 'Flying Type',
   bug: 'Bug Type',
   normal: 'Normal Type',

}
  transform(type: string | null | undefined): string {
    if(!type) return '';
    const key = type.toLowerCase();
    return this.labels[key] ?? type;
  }
}
