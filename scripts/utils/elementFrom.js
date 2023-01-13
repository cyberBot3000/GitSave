export default function elementFrom(htmlStr) {
    var template = document.createElement('template');
    template.innerHTML = htmlStr;
    return template.content;
}