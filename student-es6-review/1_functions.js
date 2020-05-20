function add_v1(x, y) {
    return x + y;
}

const add_v2 = (x, y) => {
    return x + y;
}

const add_v3 = (x, y) => x + y;

const add_v4 = (x, y) => {
    x + y; //need return keyword if you have curly braces
}

console.log(add_v1(2,3));
console.log(add_v2(2,3));
console.log(add_v3(2,3));

// Can omit parentheses in parameter list if there is only one parameter
const foo = bar => bar + 1
console.log('foo:' + foo(1))

// If no parameters, CANNOT omit the parentheses
const baz = () => 100
console.log('baz: ' + baz())

const gimme_an_obj = () => {
    return {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
    }
};
console.log(gimme_an_obj());