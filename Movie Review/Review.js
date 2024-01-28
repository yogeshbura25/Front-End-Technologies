let reviewconatinerElement = document.getElementById("reviewsContainer");
let titleInputElement = document.getElementById("titleInput");
let reviewTextareaElement = document.getElementById("reviewTextarea")

function onAddReview() {
    let MovieTitle = titleInputElement.value;
    let MovieReview = reviewTextareaElement.value;

    if (MovieTitle === "") {
        alert("please enter a movie title");
        return;
    }
    let movieTitleElement = document.createElement("h1");
    movieTitleElement.textContent = "Movie Title: " + MovieTitle;
    movieTitleElement.classList.add("paragraph-heading");
    reviewconatinerElement.appendChild(movieTitleElement);

    let MoviereviewElement = document.createElement("p");
    MoviereviewElement.textContent = "Review: " + MovieReview;
    reviewconatinerElement.appendChild(MoviereviewElement);

    let horizontallineElemnt = document.createElement("hr");
    reviewconatinerElement.appendChild(horizontallineElemnt);

    titleInputElement.value = "";
    reviewTextareaElement.value = "";
    let Addbutton = document.getElementById("addBtn");

}