console.log("Vi er i fetchpost")


    const postForm = document.getElementById('post-form');
    const postContainer = document.getElementById('post-container');



    function formatDate(dateString) {
        console.log('dateString:', dateString);
        const options = {month: 'long', day: 'numeric', year: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    }


    function fetchPosts() {
        fetch('http://localhost:9090/posts')
            .then(response => response.json())
            .then(posts => {
                postContainer.innerHTML = '';
                posts.reverse().forEach(post => displayPost(post));
            })
            .catch(error => console.error('Error:', error));
    }

    function displayPost(post) {
        const postElement = document.createElement('body');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <p><em>${formatDate(post.date)}</em></p>
      `;
        postContainer.appendChild(postElement);
    };

postForm.addEventListener('submit', event => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');

    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        date: new Date().toISOString()
    };

        fetch('http://localhost:9090/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(response => response.json())
            .then(createdPost => {
                displayPost(createdPost);
                titleInput.value = '';
                bodyInput.value = '';
            })
            .catch(error => console.error('Error:', error));
    });

    fetchPosts();




