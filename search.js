<script>
let articles = [];

// Load JSON index
fetch('articles.json')
    .then(response => response.json())
    .then(data => articles = data)
    .catch(err => console.error('Error loading articles:', err));

function searchArticles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!query) {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    filtered.forEach(article => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<a href="${article.url}">${article.title}</a><p>${article.content.substring(0, 100)}...</p>`;
        resultsDiv.appendChild(div);
    });
}
</script>
