import { fromEvent } from 'rxjs';
import { map, mergeMapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
export const yesNo = () => fromEvent(document.querySelector('#exercise-9-input'), 'keydown').pipe(mergeMapTo(ajax.getJSON('https://yesno.wtf/api')), map(({ answer }) => answer));
