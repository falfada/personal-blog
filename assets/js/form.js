// When Form submits:
// validates all input fields that are not empty
// if empty: show error message
// store data in localStorage
// redirect to blog.html  
const usernameInput = document.querySelector('#blogUsername');
const blogTitle = document.querySelector('#blogTitle');
const blogContent = document.querySelector('#blogContent');
const blogSubmit = document.querySelector('#blogSubmit');

blogSubmit.addEventListener('click', storeBlogInfo);

function storeBlogInfo(event){
    event.preventDefault;

    const blogInfo = {
        user: usernameInput.value,
        title: blogTitle.value,
        content: blogContent.value
    }

    localStorage.setItem('blogInfo', JSON.stringify(blogInfo));
    window.location.href = "blog.html";
};
