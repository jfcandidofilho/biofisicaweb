// Polyfill for optional chaining
// Fount at https://stackoverflow.com/a/66860878/1494516
//
// Usage:
//
// optionalChaining( a, b )
//      where   a = result of document.getElemen...()
//              b = the [key] of an array
//
// nullishRet( a, b )
//      where   a = result of optionalChaining(...)
//              b = default result to be returned (be smart!)

// Builds optional chaining for ECMA5
function optionalChain(source, item) {
    var _chained;
    return (_chained = source) === null || _chained === undefined ? undefined : _chained[item];
}

// Builds null return for ECMA5
// TODO don't quite remember this and why I need it
function nullishRet(item, default_result) {
    var _nullishc;
    return (_nullishc = item) !== null && _nullishc !== undefined ? _nullishc : default_result;
}