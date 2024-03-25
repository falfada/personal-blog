//get data from localStorage
//create a new container

function renderBlogInfo() {
  const blogPostInfo = JSON.parse(localStorage.getItem("blogInfo"));
  const postsContainer = document.getElementById("posts-container");

//   let postItemContainer = document.createElement("article");
//   for(let i = 0; i < posts.length; i++){
//     let postItem = posts[i];
//     console.log(postItem.user);
//     postItemContainer.textContent = `Posted by ${postItem.user}`;
  
//     postsContainer.appendChild(postItemContainer);
//   }

}

function init() {
  renderBlogInfo();
}
init();
