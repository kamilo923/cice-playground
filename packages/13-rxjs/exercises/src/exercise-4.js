import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
export const onClick = () => fromEvent(document, 'click').pipe(map((value) => ({
    x: value.screenX,
    y: value.screenY
})));
