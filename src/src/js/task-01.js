// #1

const numOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", numOfCategories.children.length);



// #2

const generalNumOfCategories = document.querySelectorAll(".item").forEach(elements => {
    console.log("Category: ", elements.querySelector("h2").textContent);
    console.log("Elements: ", elements.querySelectorAll("li").length);
});


