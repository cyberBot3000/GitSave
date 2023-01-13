
import repositorySmall from './repository-small.js';
const repositoryHint = (repo) => {
    return `
    <div class="search-field__hint">
        <div class="search-field__hint-add-button" data-name="${repo.name}" data-owner="${repo.owner.login}">
            <i class="fa-solid fa-plus"></i>
        </div>
        ${repositorySmall(repo)}
    </div>
    `;
};

export default repositoryHint;