// Theme-Switcher für Bright/Dark Mode – mit sichtbarem Body-Attribut für Debug
function setTheme(theme) {
  let themeLink = document.getElementById('theme-link');
  if (!themeLink) {
    // Fallback: Theme-Link dynamisch erzeugen, falls nicht vorhanden
    themeLink = document.createElement('link');
    themeLink.id = 'theme-link';
    themeLink.rel = 'stylesheet';
    document.head.prepend(themeLink);
  }
  const file = theme === 'dark'
    ? './styles/css/themes/mds-base-dark-desktop.css'
    : './styles/css/themes/mds-base-bright-desktop.css';
  themeLink.href = file;
  document.body.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('bright', theme === 'bright');
  document.body.setAttribute('data-theme', theme); // Debug: aktuelles Theme sichtbar
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'bright';
  setTheme(current === 'bright' ? 'dark' : 'bright');
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'bright';
  setTheme(saved);
});
