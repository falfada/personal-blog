function renderBlogInfo() {
  const blogPostInfo = JSON.parse(localStorage.getItem("blogInfo"));
  const postsContainer = document.getElementById("posts-container");

  for (let i = 0; i < blogPostInfo.length; i++) {
    //Creating HTML structure for each post
    let postItemContainer = document.createElement("article");
    let postTitle = document.createElement("h2");
    let postContent = document.createElement("p");
    let postUser = document.createElement("p");

    //Applying CSS styles to HTML elements
    postItemContainer.classList.add("post-item");
    postTitle.classList.add("post-title");
    postTitle.classList.add("post-content");
    postUser.classList.add("post-user");

    //Adding text content to each post
    postTitle.textContent = blogPostInfo[i].title;
    postContent.textContent = blogPostInfo[i].content;
    postUser.textContent = `Posted by: ${blogPostInfo[i].user}`;

    //Appending HTML elements
    postsContainer.appendChild(postItemContainer);
    postItemContainer.appendChild(postTitle);
    postItemContainer.appendChild(postContent);
    postItemContainer.appendChild(postUser);
  }
}

function init() {
  renderBlogInfo();
}
init();
