import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import loader from "./components/loader.js";
import repositoryFull from "./components/repository-full.js";
import repositoryHint from "./components/repository-hint.js";
import UXHint from "./components/ux-hint.js";
import { debounceAsync } from "./utils/debounce.js";
import { elementFrom } from "./utils/elementFrom.js";
import { hideElement, showElement } from "./utils/elementVisibility.js";
const octokit = new Octokit({
	auth: "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",
});
const SAVED_REPOS_KEY = "saved_repos";
const searchInput = document.querySelector("#search");
const repoHintsList = document.querySelector(".search-field__hints-list");
const repoFullList = document.querySelector(".your-repos__list");
const searchClearBtn = document.getElementById("clearSearch");

updateFullReposList();

searchClearBtn.addEventListener("click", () => {
	disableSearch();
});

document.addEventListener("click", async e => {
	if (e.target.closest(".search-field__input")) {
		showElement(repoHintsList);
	} else {
		hideElement(repoHintsList);
	}
	if (e.target.closest(".search-field__search")) {
		initSearch(searchInput.value);
	}
	if (e.target.closest(".search-field__hint-add-button")) {
		let btnElem = e.target.closest(".search-field__hint-add-button");
		let { data } = await octokit.request(
			`GET /repos/${btnElem.dataset.owner}/${btnElem.dataset.name}`
		);
		saveRepository(data);
		updateFullReposList();
		disableSearch();
	}
});
searchInput.addEventListener("input", debounceAsync(searchHandler, 700, showLoader));

async function searchHandler(e) {
	try {
		let searchQuery = e.target.value;
		if(!initSearch(searchQuery)){
			return;
		}
		let response = await octokit.request(
			`GET /search/repositories?q=${searchQuery}&per_page=15`
		);
		if (response.data.total_count === 0) {
			showSearchFieldMessage("your query has no results(((");
		}
		if (e.target.value !== searchQuery) {
			return;
		}
		setHintListItems(response.data.items);
	} catch (err) {
		console.log(err);
		showSearchFieldMessage("oops, something went wrong on our side");
	}
}

function initSearch(searchQuery) {
	if (searchQuery === "") {
		showSearchFieldMessage("Type something...");
		return false;
	}
	return true;
}

function showSearchFieldMessage(message) {
	repoHintsList.innerHTML = "";
	repoHintsList.append(elementFrom(UXHint(message, "search-field__ux-hint")));
}

function showLoader() {
	repoHintsList.innerHTML = "";
	repoHintsList.append(elementFrom(loader("search-field__loader")));
}

function hideLoader() {
	if (!repoHintsList.querySelector(".search-field__loader")) {
		return;
	}
	repoHintsList.querySelector(".search-field__loader").remove();
}

function saveRepository(repo) {
	const savedRepos = getSavedReposArr();
	if (savedRepos.filter(elem => elem.id === repo.id).length !== 0) {
		return;
	}
	savedRepos.push(repo);
	localStorage.setItem(SAVED_REPOS_KEY, JSON.stringify(savedRepos));
}

function getSavedReposArr() {
	if (!localStorage.getItem(SAVED_REPOS_KEY)) {
		localStorage.setItem(SAVED_REPOS_KEY, JSON.stringify([]));
	}
	return JSON.parse(localStorage.getItem(SAVED_REPOS_KEY));
}

function updateFullReposList() {
	let savedRepos = getSavedReposArr();
	repoFullList.innerHTML = "";
	savedRepos.forEach(repo => {
		//html_url, stargazers_count, watchers_count, created_at, id, name, owner.login
		let formattedDate = new Date(repo.created_at).toLocaleDateString("ru", {
			dateStyle: "short",
		});
		repoFullList.append(
			elementFrom(
				repositoryFull(
					repo.name,
					repo.owner.login,
					repo.id,
					repo.stargazers_count,
					formattedDate,
					repo.watchers_count,
					repo.html_url
				)
			)
		);
	});
}

function disableSearch() {
	searchInput.value = "";
	hideElement(repoHintsList);
}

function setHintListItems(repos){
	repoHintsList.innerHTML = '';
	repos.forEach(repo => {
		let dateCreated = new Date(repo.created_at);
		repoHintsList.append(
			elementFrom(
				repositoryHint(
					repo.name,
					repo.owner.login,
					dateCreated.toLocaleDateString("ru", {
						dateStyle: "short",
					})
				)
			)
		);
	});
}
