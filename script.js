// Theme handling
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  updateThemeButtonText(newTheme);
}

function updateThemeButtonText(theme) {
  const themeButton = document.querySelector('.theme-switch');
  if (themeButton) {
    themeButton.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
}

// Initialize theme and attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Attach theme switcher event listener
  const themeButton = document.querySelector('.theme-switch');
  if (themeButton) {
    updateThemeButtonText(savedTheme);
    themeButton.addEventListener('click', toggleTheme);
  }

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Log form data (replace with actual form submission)
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});