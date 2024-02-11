import { renderBlog } from "./renderBlog.js";



export let currentIndex = 0;
export const postsPerPage = 6;
export let currentSortOrder = 'newest';
let sortedPosts = [];
let displayedPostsCount = postsPerPage; // Track the number of posts currently displayed



// Both the sort and see more should be working. When pressing "see more" and all posts are displayed
// - it will sort according to that all the posts are displayed, and not refreshing to postPerPage 6. It is intended. 
// See more button also disappears when all posts are loaded. 

export function initializeBlogFeatures(posts) {
    setupLoadMoreButton(posts);
    setupSortByFeature(posts);
    updateLoadMoreButtonVisibility(posts);
}

function setupLoadMoreButton(posts) {
    const button = document.querySelector(".button-blog button");
    if (!button) return;

    button.addEventListener('click', () => {
        const currentPosts = sortedPosts.length > 0 ? sortedPosts : posts;
        currentIndex += postsPerPage;
        displayedPostsCount += postsPerPage; // Update displayed posts count
        const postsToLoad = currentPosts.slice(currentIndex, currentIndex + postsPerPage);
        renderBlog(postsToLoad, true); 
        updateLoadMoreButtonVisibility(currentPosts); // Update based on currentPosts
    });
}

function setupSortByFeature(posts) {
    const selectElement = document.getElementById('sortby');
    if (!selectElement) return;

    selectElement.addEventListener('change', function() {
        currentSortOrder = this.value.toLowerCase();
        sortedPosts = sortPosts(posts, currentSortOrder);
        
        const postsToDisplay = sortedPosts.slice(0, displayedPostsCount);
        renderBlog(postsToDisplay, false);
        updateLoadMoreButtonVisibility(sortedPosts);
    });
}

function sortPosts(posts, sortOrder) {
    return posts.slice().sort((a, b) => {
        const dateA = new Date(a.acf.date_of_post), dateB = new Date(b.acf.date_of_post);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
}

function updateLoadMoreButtonVisibility(currentPosts) {
    const button = document.querySelector(".button-blog button");
    if (!button) return;
    button.style.display = displayedPostsCount >= currentPosts.length ? 'none' : 'block';
}





