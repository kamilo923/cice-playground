import { Store } from './store';
import { map } from 'rxjs/operators';
export class UserStore extends Store {
    constructor() {
        super({ username: '', password: '' });
    }
    isPasswordValid() {
        return this.get().pipe(map(x => x.password), map(x => x.length >= 8));
    }
}
