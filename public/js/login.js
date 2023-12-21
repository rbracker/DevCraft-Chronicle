document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        // Get user input
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        try {
          // Make a request to your server to handle login
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
  
          if (response.ok) {
            // Redirect or perform any other action after successful login
            window.location.href = '/';
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      });
    }
  });
  