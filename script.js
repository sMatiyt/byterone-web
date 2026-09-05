const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const year = document.getElementById('year');

const savedTheme = localStorage.getItem('byterone-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', savedTheme || (systemDark ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('byterone-theme', next);
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

if (year) year.textContent = new Date().getFullYear();