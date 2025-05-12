// Select the form element on the page
const form = document.querySelector<HTMLFormElement>('#work-form');

// Use Vite environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL;

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect form data and convert to plain object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Send POST request to the backend API
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  // Provide user feedback based on response status
  if (response.ok) {
    alert('Erfarenhet sparad!');
    form.reset();
  } else {
    alert('Något gick fel');
  }
});
