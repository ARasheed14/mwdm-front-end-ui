import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateConvert'
})
@Injectable()
export class DateConvert implements PipeTransform {
  transform(value, args)  {

  if (value !== null && value !== undefined){ //If value is passed in
    if(value.indexOf('AM') > -1 || value.indexOf('PM') > -1){ //If time is already in standard time then don't format.
      return value;
    }
    else {
      if(value.length == 4){ //If value is the expected length for military time then process to standard time.
        let hour = value.substring ( 0,2 ); //Extract hour
        let minutes = value.substring ( 3,5 ); //Extract minutes
        let identifier = 'AM'; //Initialize AM PM identifier

        if(hour == 12){ //If hour is 12 then should set AM PM identifier to PM
          identifier = 'PM';
        }
        if(hour == 0){ //If hour is 0 then set to 12 for standard time 12 AM
          hour=12;
        }
        if(hour > 12){ //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
          hour = hour - 12;
          identifier='PM';
        }
        //Return the constructed standard time
        return hour + ':' + minutes + ' ' + identifier;
      }
      else { //If value is not the expected length than just return the value as is
        return value;
      }
    }
  }
};
}
