// main.js
const postsContainer = document.getElementById('posts');
const searchInput = document.getElementById('search');

function displayPosts(filter = '') {
  postsContainer.innerHTML = '';
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );
  filteredPosts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
      <p><small>${post.date} by ${post.author}</small></p>
      <p>${post.summary}</p>
    `;
    postsContainer.appendChild(div);
  });
}

searchInput.addEventListener('input', (e) => {
  displayPosts(e.target.value);
});

displayPosts();