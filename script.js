const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('#waitlist-form');
const formMessage = document.querySelector('#form-message');

const savedTheme = localStorage.getItem('infinity-theme');
if (savedTheme === 'light') {
  root.classList.add('theme-light');
  themeIcon.textContent = '☾';
} else {
  root.classList.remove('theme-light');
  themeIcon.textContent = '☀︎';
}

themeToggle?.addEventListener('click', () => {
  const isLight = root.classList.toggle('theme-light');
  localStorage.setItem('infinity-theme', isLight ? 'light' : 'dark');
  themeIcon.textContent = isLight ? '☾' : '☀︎';
});

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email')?.value?.trim();
  if (!email) {
    formMessage.textContent = 'Please enter your email to request access.';
    return;
  }

  formMessage.textContent = `Thanks, ${email}! You are on the waitlist.`;
  form.reset();
});
