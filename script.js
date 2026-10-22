const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const langToggle = document.getElementById('langToggle');
let english = false;
const translations = {
  'عن الكاتب':'About', 'الكتب':'Books', 'السينما':'Cinema', 'من الكتابة':'Writing', 'تواصل':'Contact',
  'الموقع الرسمي للكاتب المغربي':'Official website of the Moroccan writer',
  'اكتشف الأعمال':'Explore the books', 'اقرأ عن الكاتب':'About the author',
  'أعمال':'Selected', 'مختارة':'works'
};
langToggle.addEventListener('click', () => {
  // Lightweight bilingual mode: switches the interface direction and key navigation labels.
  english = !english;
  document.body.classList.toggle('english', english);
  document.documentElement.lang = english ? 'en' : 'ar';
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  langToggle.textContent = english ? 'عربي' : 'EN';
  const navLinks = nav.querySelectorAll('a');
  const ar = ['عن الكاتب','الكتب','السينما','من الكتابة','تواصل'];
  const en = ['About','Books','Cinema','Writing','Contact'];
  navLinks.forEach((link, i) => { if (i < 5) link.textContent = english ? en[i] : ar[i]; });
  // Main content is intentionally retained in Arabic until a complete English translation is added.
  langToggle.title = english ? 'Navigation translated; page content remains Arabic' : 'Switch language';
});
