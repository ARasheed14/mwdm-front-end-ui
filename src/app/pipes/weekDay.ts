import {Pipe} from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDay {
  transform(value, args) {
    let dayConvert = "";
    return value;
  }
}
