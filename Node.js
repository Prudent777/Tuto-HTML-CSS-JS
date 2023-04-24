// Retrieve the email input and submit button elements
const emailInput = document.querySelector('#email-input');
const submitButton = document.querySelector('#submit-button');

// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the email address from the input field
  const email = emailInput.value;

  // Make an API call to subscribe the user to the newsletter
  fetch('https://example.com/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email: email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Show a success message to the user
    alert('Thanks for subscribing!');
  })
  .catch(error => {
    // Show an error message to the user
    alert('Oops, something went wrong. Please try again later.');
  });
});
