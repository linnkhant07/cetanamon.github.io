const descriptionLink = document.querySelector("#description-link-coco");
const historyLink = document.querySelector("#history-link-coco");
const nutritionLink = document.querySelector("#nutrition-link-coco");

const links = [descriptionLink, historyLink, nutritionLink]

const descriptionDiv = document.querySelector("#description-coco");
const historyDiv = document.querySelector("#history-coco");
const nutritionDiv = document.querySelector("#nutrition-coco");

const removeLinks = () => {
    for(let link of links){
        link.classList.remove("active");
    }
}

descriptionLink.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv.style.display = "block";
    historyDiv.style.display = "none";
    nutritionDiv.style.display = "none";
    removeLinks();
    descriptionLink.classList.add("active");
});

historyLink.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv.style.display = "none";
    historyDiv.style.display = "block";
    nutritionDiv.style.display = "none";
    removeLinks();
    historyLink.classList.add("active");
});

nutritionLink.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv.style.display = "none";
    historyDiv.style.display = "none";
    nutritionDiv.style.display = "block";
    removeLinks();
    nutritionLink.classList.add("active");
});

//for mohinga

const descriptionLink2 = document.querySelector("#description-link-mohin");
const historyLink2 = document.querySelector("#history-link-mohin");
const nutritionLink2 = document.querySelector("#nutrition-link-mohin");

const links2 = [descriptionLink2, historyLink2, nutritionLink2]

const descriptionDiv2 = document.querySelector("#description-mohin");
const historyDiv2 = document.querySelector("#history-mohin");
const nutritionDiv2 = document.querySelector("#nutrition-mohin");

const removeLinks2 = () => {
    for(let link of links2){
        link.classList.remove("active");
    }
}

descriptionLink2.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv2.style.display = "block";
    historyDiv2.style.display = "none";
    nutritionDiv2.style.display = "none";
    removeLinks2();
    descriptionLink2.classList.add("active");
});

historyLink2.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv2.style.display = "none";
    historyDiv2.style.display = "block";
    nutritionDiv2.style.display = "none";
    removeLinks2();
    historyLink2.classList.add("active");
});

nutritionLink2.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv2.style.display = "none";
    historyDiv2.style.display = "none";
    nutritionDiv2.style.display = "block";
    removeLinks2();
    nutritionLink2.classList.add("active");
});

//for ShanNoodles

const descriptionLink3 = document.querySelector("#description-link-shan");
const historyLink3 = document.querySelector("#history-link-shan");
const nutritionLink3 = document.querySelector("#nutrition-link-shan");

const links3 = [descriptionLink3, historyLink3, nutritionLink3]

const descriptionDiv3 = document.querySelector("#description-shan");
const historyDiv3 = document.querySelector("#history-shan");
const nutritionDiv3 = document.querySelector("#nutrition-shan");

const removeLinks3 = () => {
    for(let link of links3){
        link.classList.remove("active");
    }
}

descriptionLink3.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv3.style.display = "block";
    historyDiv3.style.display = "none";
    nutritionDiv3.style.display = "none";
    removeLinks3();
    descriptionLink3.classList.add("active");
});

historyLink3.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv3.style.display = "none";
    historyDiv3.style.display = "block";
    nutritionDiv3.style.display = "none";
    removeLinks3();
    historyLink3.classList.add("active");
});

nutritionLink3.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionDiv3.style.display = "none";
    historyDiv3.style.display = "none";
    nutritionDiv3.style.display = "block";
    removeLinks3();
    nutritionLink3.classList.add("active");
});


// I WILL DEFINTELY FIX THIS AND USE A LOGIC 