"use strict";
function identity1(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
function identity(arg) {
    return arg;
}
identity('foo'); // string
identity('foo'); // string
function identityWithMoreGenerics(arg) {
    return arg;
}
identityWithMoreGenerics('foo'); // string
identityWithMoreGenerics('foo'); // string
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
class Generic {
    bar(x) {
        return x;
    }
}
const generic = new Generic();
generic.foo = '';
generic.bar('baz');
class DefaultGeneric {
    bar(x) {
        return x;
    }
}
const generic2 = new DefaultGeneric();
generic2.foo = '';
generic2.bar('baz');
function loggingConstraintIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingConstraintIdentity([]);
loggingConstraintIdentity({ length: 2 });
