

const login_route = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email_lg').value.trim();
  const password = document.querySelector('#password_lg').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signup_route = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first_name_su').value.trim();
  const email = document.querySelector('#email_su').value.trim();
  const password = document.querySelector('#password_su').value.trim();

  if (first_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', login_route);

document
  .querySelector('#sign_up_form')
  .addEventListener('submit', signup_route);
