
import repositorySmall from './repository-small.js';
const repositoryHint = (name, ownerName, publicationDate) => {
    return `
    <div class="search-field__hint">
        <div class="search-field__hint-add-button" data-name="${name}" data-owner="${ownerName}">
            <i class="fa-solid fa-plus"></i>
        </div>
        ${repositorySmall(name, ownerName, publicationDate)}
    </div>
    `;
};

export default repositoryHint;