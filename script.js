// script.js

document.addEventListener('DOMContentLoaded', function () {
  showHome();  // Show home content by default
});
document.addEventListener('DOMContentLoaded', function () {
  showHome();  // Show home content by default
});


function showHome() {
  hideAllSections();
  document.getElementById('homeContent').style.display = 'block';
}

function showQueryForm() {
  hideAllSections();
  document.getElementById('queryForm').style.display = 'block';
}

function toggleFAQ() {
  var faqSection = document.getElementById('faqSection');
  var homeContent = document.getElementById('homeContent');

  hideAllSections();
  faqSection.style.display = 'block';
  homeContent.style.display = 'none';
}

function toggleAnswer(card) {
  var answer = card.querySelector('.answer');
  answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}

function submitQuery() {
  var submitButton = document.getElementById('submitQuerybtn');
  
  // Disable the button to prevent multiple clicks
  submitButton.disabled = true;

  // Your form submission logic goes here
  var successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';

  // Optional: You can redirect after a delay
  setTimeout(function () {
    window.location.href = 'index.html';
  }, 2000);

  // Enable the button back after the action is complete
  setTimeout(function () {
    submitButton.disabled = false;
  }, 2000);

  // Return false to prevent the form from submitting (remove this line if not needed)
  return false;
}

function hideAllSections() {
  var sections = ['homeContent', 'queryForm', 'faqSection'];
  sections.forEach(function(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
  });
}
// script.js

// script.js
// script.js

// script.js

// script.js

// ... (your existing code) ...

// script.js


function openContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'block';
}

function closeContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'none';
}

function submitContactForm() {
  // You can add logic to handle the submission of the contact form
  alert('Contact form submitted!'); // Replace with your actual logic

  // Close the modal after submission
  closeContactModal();

  // Prevent the default form submission
  return false;
}

function openContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'block';
}

function closeContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'none';
}

function submitContactForm() {
  // You can add logic to handle the submission of the contact form
  alert('Contact form')}

// script.js

document.addEventListener('DOMContentLoaded', function () {
  showHome();  // Show home content by default
});

function openContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'block';
}

function closeContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'none';
}

function submitContactForm() {
  // You can add logic to handle the submission of the contact form
  alert('Contact form submitted!'); // Replace with your actual logic

  // Close the modal after submission
  closeContactModal();

  // Prevent the default form submission
  return false;
}
