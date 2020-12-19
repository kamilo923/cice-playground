import { concatMapTo, tap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
export function testStore({ store, source, sourceValues, result, resultValues, observable }) {
    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });
    testScheduler.run(({ cold, expectObservable }) => {
        const storeObservable = cold(source, sourceValues).pipe(tap(x => store.set(x), err => store.error(err), () => store.complete()), concatMapTo(store.getState()));
        const actualObservable = storeObservable.pipe(concatMapTo(observable));
        expectObservable(actualObservable).toBe(result, resultValues);
    });
}
