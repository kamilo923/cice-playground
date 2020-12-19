import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export const double = (array) => from(array).pipe(map(x => x * 2));
