// Polyfill for optional chaining
// Fount at https://stackoverflow.com/a/66860878/1494516

function optionalChain(source, item) {
    var _chained;
    return (_chained = source) === null || _chained === undefined ? undefined : _chained[item];
}

function nullishRet(item, default_result) {
    var _nullishc;
    return (_nullishc = item) !== null && _nullishc !== undefined ? _nullishc : default_result;
}