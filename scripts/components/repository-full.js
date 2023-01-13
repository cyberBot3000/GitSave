const repositoryFull = (name, owner, repoId, stargasersCount, addedOn, views, htmlUrl) => {
    return `
        <div class="repository-full">
            <div class="repository-full__main-info">
                <span class="repository-full__text repository-full__default-elem repository-full__name">
                    ${name}
                </span>
                <span class="repository-full__text repository-full__sub-elem repository-full__owner">
                    ${owner}
                </span>
                <a href="${htmlUrl}" class="repository-full__link">
                    <div class="repository-full__icon repository-full__icon_big">
                        <i class="fa-solid fa-link"></i>
                    </div>
                </a>
                <div class="repository-full__text repository-full__sub-elem repository-full__id">
                    ${repoId}
                </div>
            </div>
            <div class="repository-full__sub-info">
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <span class="repository-full__icon repository-full__icon_small"><i class="fa-solid fa-star"></i></span>
                    <span class="repository-full__text">${stargasersCount}</sp>
                </div>
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <div class="repository-full__icon repository-full__icon_small"><i class="fa-regular fa-calendar"></i></div>
                    <div class="repository-full__text">${addedOn}</div>
                </div>
                <div class="repository-full__icon-text repository-full__sub-elem">
                    <div class="repository-full__icon repository-full__icon_small"><i class="fa-regular fa-eye"></i></div>
                    <div class="repository-full__text">${views}</div>
                </div>
            </div>
        </div>
    `
};

export default repositoryFull;