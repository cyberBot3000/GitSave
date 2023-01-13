const UXHint = (message, ...additionalClasses) => {
    return `<i class="ux-hint ${additionalClasses.join(' ')}">${message}</i>`;
};
export default UXHint;