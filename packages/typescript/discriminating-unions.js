"use strict";
const networkState = Math.random() > 0.7
    ? Math.random() < 0.3
        ? { state: 'loading' }
        : { response: 'foo', state: 'success' }
    : { state: 'failed', code: 404 };
function getStatus() {
    let status;
    switch (networkState.state) {
        case 'failed':
            // OK
            status = 'error';
            networkState.code;
            break;
        case 'loading':
            // KO
            networkState.code;
            status = 'loading';
            break;
        case 'success':
            status = 'success';
            // OK
            networkState.response;
            break;
    }
    return status;
}
