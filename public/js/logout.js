document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
  
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        try {
          // Make a request to your server to logout the user
          const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            // Redirect or perform any other action after successful logout
            window.location.href = '/';
          } else {
            console.error('Logout failed');
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      });
    }
  });
  