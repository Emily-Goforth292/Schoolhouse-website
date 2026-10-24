/* =========================================================
   Shared header and footer.
   Edit the menu or the footer here ONCE and every page updates.
   Each page says which menu item to highlight with:
   <body data-page="index.html">
   ========================================================= */

const MENU = [
  ['index.html', 'Home'],
  ['mission.html', 'Mission'],
  ['learn-more.html', 'Learn More'],
  ['testimonies.html', 'Testimonies'],
  ['staff.html', 'Our Staff'],
  ['programs.html', 'Our Programs'],
  ['pricing.html', 'Pricing'],
];

const current = document.body.dataset.page;

const links = MENU.map(([file, label]) =>
  `<a href="${file}" class="${file === current ? 'active' : ''}">${label}</a>`
).join('');

const enrollClass = current === 'enrollment.html' ? 'nav-cta active' : 'nav-cta';

document.getElementById('site-header').innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html">
        <img src="images/logo.png" alt="A Little Schoolhouse logo">
        <span class="brand-name">A Little Schoolhouse<span>Christian Learning Academy</span></span>
      </a>
      <button class="menu-button" id="menu-button" aria-expanded="false" aria-controls="nav">Menu</button>
      <nav class="nav" id="nav">
        ${links}
        <a href="enrollment.html" class="${enrollClass}">Enrollment</a>
      </nav>
    </div>
  </header>`;

document.getElementById('site-footer').innerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <span>A Little Schoolhouse Christian Learning Academy</span>
      <span>11740 US Hwy 301 N, Parrish, FL · 941.776.1973 · ALittleSchoolhouseDirector@gmail.com · [License #]</span>
    </div>
  </footer>`;

// Phone menu: tap "Menu" to open and close the list of links
const button = document.getElementById('menu-button');
const nav = document.getElementById('nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
});
