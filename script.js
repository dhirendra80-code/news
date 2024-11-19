// Real-time News Fetch Example (using a mock function here)
// Replace 'YOUR_API_KEY' with your actual News API key.

const apiKey = '7096d39803344dbda97974dbb7767200';
const newsContainer = document.getElementById('newsContainer');

function fetchNews() {
  fetch(`https://newsapi.org/v2/top-headlines?country=in&q=local&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      newsContainer.innerHTML = ''; // Clear previous news

      articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
      });
    })
    .catch(error => console.error('Error fetching news:', error));
}

// Auto-refresh every 30 seconds (30000ms)
setInterval(fetchNews, 30000);

// Initial news fetch
fetchNews();

// Scroll to top functionality
window.onscroll = function () {
  let topButton = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
