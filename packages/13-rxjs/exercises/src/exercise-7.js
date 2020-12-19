import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
export const onTime = () => interval(1000).pipe(filter(x => x % 3 === 0));
