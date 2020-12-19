import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
export const yesNoDebounce = () => fromEvent(document.querySelector('#exercise-10-input'), 'keydown').pipe(debounceTime(500), map(x => x.target.value), distinctUntilChanged(), switchMapTo(ajax.getJSON('https://yesno.wtf/api')), map(({ answer }) => answer));
