const loader = (...additionalClasses) => {
    return `<div class="loader ${additionalClasses.join(' ')}"><div></div><div></div><div></div><div></div></div>`;
}
export default loader;