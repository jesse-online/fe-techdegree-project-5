// Load baguetteBox once page has loaded
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// Clear search filter when 'x' in search field is pressed
document.getElementById('search').addEventListener('search', searchImg);

