import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workout'
})
export class WorkoutPipe implements PipeTransform {

  transform(value: any) {
    return value.type === 'endurance'
      ? ` Distance: ${value.endurance.distance + 'km'}, Duration: ${value.endurance.duration + 'mins'}`
      : `Weight: ${value.strength.weight + 'kg'}, Reps: ${value.strength.reps}, Sets: ${value.strength.sets}`;
  }

}
