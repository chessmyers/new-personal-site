import {Pipe, PipeTransform} from '@angular/core';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateToString = (date: Date) => `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

@Pipe({name: 'dateArrayToString', pure: true})
export class DateArrayToStringPipe implements PipeTransform {
  transform(value: [Date, Date | null]): string {
    if (value[1] === null) {
      // still working on this
      return dateToString(value[0]) + ' - present';
    }
    if (value[0].getTime() === value[1].getTime()) {
      // created all in same month
      return dateToString(value[0]);
    }
    // normal date range
    return dateToString(value[0]) + ' - ' + dateToString(value[1]);
  }
}
