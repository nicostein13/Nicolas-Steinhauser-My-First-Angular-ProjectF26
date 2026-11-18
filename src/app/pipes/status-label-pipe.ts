import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  private long: Record<string, string> = {
    active: 'Available',
    inactive: 'Unavailable',
  }

  private short: Record<string, string> = {
    active: 'On',
    inactive: 'Off',
  }
  transform(status: string | null | undefined, style: 'long' | 'short'): string {
    if (!status) return '';

    const labels = style === 'short' ? this.short : this.long;
    return labels[status] ?? status;
  }
}
