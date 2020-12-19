import { fromEvent } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
export const yesNoSwitch = () => fromEvent(document.querySelector('#exercise-11-input'), 'keydown').pipe(switchMapTo(ajax.getJSON('https://yesno.wtf/api')), map(({ answer }) => answer));
