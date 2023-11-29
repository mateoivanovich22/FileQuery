
const returnBack = document.querySelector(".return-back");

returnBack.addEventListener("click", () => {
    window.location.href = "/";
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.querySelector('.category-list');

    categoryList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedCategory = event.target.textContent.trim();
            window.location.href = `/file/${selectedCategory}`;
        }
    });
});
