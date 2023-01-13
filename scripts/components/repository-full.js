const repositoryFull = ({created_at, html_url, stargazers_count, watchers_count, id, name, owner}) => {
    let formattedDate = new Date(created_at).toLocaleDateString("ru", {
		dateStyle: "short",
	});
    //html_url, stargazers_count, watchers_count, created_at, id, name, owner.login
    return `
        <div class="repository-full">
            <div class="repository-full__main-info">
                <span class="repository-full__text repository-full__default-elem repository-full__name">
                    ${name}
                </span>
                <span class="repository-full__text repository-full__sub-elem repository-full__owner">
                    ${owner.login}
                </span>
                <a href="${html_url}" class="repository-full__link">
                    <div class="repository-full__icon repository-full__icon_big">
                        <i class="fa-solid fa-link"></i>
                    </div>
                </a>
                <div class="repository-full__text repository-full__sub-elem repository-full__id">
                    ${id}
                </div>
            </div>
            <div class="repository-full__sub-info">
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <span class="repository-full__icon repository-full__icon_small"><i class="fa-solid fa-star"></i></span>
                    <span class="repository-full__text">${stargazers_count}</sp>
                </div>
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <div class="repository-full__icon repository-full__icon_small"><i class="fa-regular fa-calendar"></i></div>
                    <div class="repository-full__text">${formattedDate}</div>
                </div>
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <div class="repository-full__icon repository-full__icon_small"><i class="fa-regular fa-eye"></i></div>
                    <div class="repository-full__text">${watchers_count}</div>
                </div>
            </div>
        </div>
    `
};

export default repositoryFull;