document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonLabel(currentTheme);

  toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonLabel(newTheme);
  });

  function updateButtonLabel(theme) {
    toggleBtn.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
});
