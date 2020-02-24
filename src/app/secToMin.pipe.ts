import { Pipe } from '@angular/core';

@Pipe({name: 'secToMin'})
export class SecToMin{
    transform(value: number): string {
        function toStr(value: number){
            return (value<10)?'0'+value: value;
        }
        return toStr(Math.floor(value / 60)) + ':' + toStr(value % 60);
      }
}