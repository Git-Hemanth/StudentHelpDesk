function showDashboard() {
    hideAllPages();
    document.getElementById('dashboard').style.display = 'block';
  }
  
  function showInquire() {
    hideAllPages();
    document.getElementById('inquire').style.display = 'block';
  }
  
  function showFAQ() {
    hideAllPages();
    document.getElementById('faqs').style.display = 'block';
  }
  
  function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
      page.style.display = 'none';
    });
  }
  