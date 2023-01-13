export function debounce(origFn, debounceTime, onReCall=()=>{}, afterCall=()=>{}){
    let lastTimeout = 0;
    let lastArgs = []
    return function(...args) {
        clearTimeout(lastTimeout);
        onReCall();
        lastArgs = args
        lastTimeout = setTimeout(() => {
            origFn.call(this, ...lastArgs);
            afterCall();
        }, debounceTime)
    }
}
export function debounceAsync(origFn, debounceTime, onReCall=()=>{}, afterCall=()=>{}){
    let lastTimeout = 0;
    let lastArgs = []
    return function(...args) {
        clearTimeout(lastTimeout);
        onReCall();
        lastArgs = args
        lastTimeout = setTimeout(async () => {
            await origFn.call(this, ...lastArgs);
            afterCall();
        }, debounceTime)
    }
}