const usernameInput = document.querySelector("#blogUsername");
const blogTitle = document.querySelector("#blogTitle");
const blogContent = document.querySelector("#blogContent");
const blogSubmit = document.querySelector("#blogSubmit");
const errorMessage = document.querySelector("#errorMessage");

blogSubmit.addEventListener("click", storeBlogInfo);

//Function to show error message
function displayMessage(type, message) {
  errorMessage.textContent = message;
  errorMessage.setAttribute("class", type);
}

//Function to store data in localStorage
function storeBlogInfo(event) {
  event.preventDefault();

  //Validating if input values are empty
  const userValue = usernameInput.value;
  const titleValue = blogTitle.value;
  const contentValue = blogContent.value;
  if (userValue === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (titleValue === "") {
    displayMessage("error", "Title cannot be blank");
  } else if (contentValue === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    // Storing Information in Local Storage
    let posts = [];

    if (localStorage.getItem("blogInfo") !== null) {
      posts = JSON.parse(localStorage.getItem("blogInfo"));
    }
    const blogInfo = {
      user: userValue,
      title: titleValue,
      content: contentValue,
    };

    posts.push(blogInfo);

    localStorage.setItem("blogInfo", JSON.stringify(posts));
    window.location.href = "blog.html";
  }
}
