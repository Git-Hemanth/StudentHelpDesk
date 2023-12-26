function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = 'block';
  }
  
  function submitQuery() {
    // Implement your query submission logic here
    // For this example, let's just show a success message
  
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = '<p>Query submitted successfully!</p>';
    responseDiv.style.color = '#4CAF50'; // Green color
  
    const queryForm = document.getElementById('query-form');
    queryForm.parentNode.replaceChild(responseDiv, queryForm);
  }
  
  function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  }
  
  