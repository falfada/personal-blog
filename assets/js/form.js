// When Form submits:
// validates all input fields that are not empty
// if empty: show error message
// store data in localStorage [solved]
// redirect to blog.html  [solved]
const usernameInput = document.querySelector('#blogUsername');
const blogTitle = document.querySelector('#blogTitle');
const blogContent = document.querySelector('#blogContent');
const blogSubmit = document.querySelector('#blogSubmit');

let posts = [];

blogSubmit.addEventListener('click', storeBlogInfo);

function storeBlogInfo(event){
    event.preventDefault();

    const blogInfo = {
        user: usernameInput.value,
        title: blogTitle.value,
        content: blogContent.value
    }

    posts.push(blogInfo);

    localStorage.setItem('blogInfo', JSON.stringify(posts));
    window.location.href = 'blog.html';
};
