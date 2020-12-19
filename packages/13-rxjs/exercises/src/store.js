import { BehaviorSubject } from 'rxjs';
export class Store {
    constructor(initialState) {
        this.initialState = initialState;
        this.state = new BehaviorSubject(undefined);
        this.set(initialState);
    }
    get() {
        return this.state.asObservable();
    }
    set(nextState) {
        return this.state.next(nextState);
    }
    value() {
        return this.state.getValue();
    }
    patch(params) {
        this.set({ ...this.value(), ...params });
    }
    complete() {
        this.state.complete();
    }
    error(error) {
        this.state.error(error);
    }
    getState() {
        return this.state;
    }
    reset() {
        this.set(this.initialState);
    }
}
