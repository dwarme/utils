/**
 *
 * @param {Function} fn
 * @param {number} wait
 * @returns {(function(...[*]): void)|*}
 */
function debounce(fn, wait) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    }
}

export {
    debounce
}