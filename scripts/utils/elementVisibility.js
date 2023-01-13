const activeClass = 'active';
const hiddenClass = 'hidden';
export function showElement(node){
    node.classList.remove(hiddenClass)
    node.classList.add(activeClass);
}
export function hideElement(node){
    node.classList.remove(activeClass)
    node.classList.add(hiddenClass);
}