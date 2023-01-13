const repositorySmall = ({name, owner, created_at}) => {
    let formattedDate = new Date(created_at).toLocaleDateString("ru", {
		dateStyle: "short",
	});
	return `
    <div class="repository-small">
        <div class="repository-small__main-info">
            <span class="repository-small__name">
                ${name}
            </span>
            <span class="repository-small__text_sub repository-small__owner">
                ${owner.login}
            </span>
        </div>
        <div class="repository-small__sub-info">
            <div class="repository-small__text_sub repository-small__date">
                ${formattedDate}
            </div>
        </div>
    </div>
    `;
};

export default repositorySmall;