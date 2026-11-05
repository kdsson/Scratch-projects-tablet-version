fetch('cardswipe.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('content-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading HTML file:', error));
