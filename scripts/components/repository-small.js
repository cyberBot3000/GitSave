const repositorySmall = (name, ownerName, publicationDate) => {
	return `
    <div class="repository-small">
        <div class="repository-small__main-info">
            <span class="repository-small__name">
                ${name}
            </span>
            <span class="repository-small__text_sub repository-small__owner">
                ${ownerName}
            </span>
        </div>
        <div class="repository-small__sub-info">
            <div class="repository-small__text_sub repository-small__date">
                ${publicationDate}
            </div>
        </div>
    </div>
    `;
};

export default repositorySmall;