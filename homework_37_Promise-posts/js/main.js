const refs = {
  postId: document.querySelector("#postId"),
  searchPostBtn: document.querySelector("#searchPostBtn"),

  postBox: document.querySelector("#postBox")
};

//=======response to API=========
async function getData(url) {
  let request = await fetch(url);
  let response = request.ok ? request.json() : Promise.catch(data.statueText);

  return response;
}

refs.searchPostBtn.addEventListener("click", () => {
  let postId = refs.postId.value;
  searchPost(postId);
});


//==========Getting post=============
async function searchPost(idValue) {
  try {
    let post = await getData(
      `https://jsonplaceholder.typicode.com/posts/${idValue}`
    );
    
    let postComments = await getData(
      `https://jsonplaceholder.typicode.com/posts/${idValue}/comments`);
      if(refs.postBox.querySelector(`div[data-id="${idValue}"]`)) {
        alert('You`ve already get this post');
      } else if (postComments.length > 0) {
        renderPost(post.title, post.body, idValue);
        renderCommentsButton(idValue, postComments);
      } else {
        renderPost(post.title, post.body, idValue);
      }
  } catch (err) {
    console.log(err);
    // alert('Sorry, post not found')
  }
}


//========Elements Render==========
const renderPost = (postTitle, postBody, postIdValue) => {
  let postBox = document.createElement("div");
  postBox.className = "post";
  postBox.dataset.id = `${postIdValue}`
  postBox.innerHTML = `
    <h3 class="post__title">${postTitle}</h3>
    <p class="post__body">${postBody}</p>
  `;

  refs.postBox.append(postBox);
};

const renderCommentsButton = (postIdValue, commentsArray) => {
  let commentsButton = document.createElement("button");
  commentsButton.className = "getCommentsBtn";
  commentsButton.textContent = "Get comments";

  let currentPostBox = refs.postBox.querySelector(`div[data-id="${postIdValue}"]`);
  currentPostBox.append(commentsButton);

  let comList = document.createElement('ul');

  commentsButton.addEventListener("click", () => {
    if (comList.children.length > 0) {
      comList.innerHTML = ''
      comList.classList.remove ('comments')
    } else {
      comList.className = 'comments';
      commentsArray.forEach(com => comList.append(renderComment(com)));
      currentPostBox.append(comList);
    }
  });
}

const renderComment = (comment) => {
  let postLi = document.createElement('li')
  postLi.innerHTML = `
  <p>${comment.name}</p>
  <a type="e-mail">${comment.email}</a>
  <q>${comment.body}</q>
  `
  return postLi
}

