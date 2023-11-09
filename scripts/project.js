const portfolio = document.querySelector('#portfolioproject');
const portfolioh6 = document.querySelector('#portfolioprojecth6');

portfolio.addEventListener('mouseover', (event) => {
  portfolio.classList.add('animationhovercontact');
  portfolioh6.style.color = '#fff';
  portfolioh6.style.transition = 'all 0.3s ease-in-out';
});

portfolio.addEventListener('mouseout', (event) => { 
  portfolio.classList.remove('animationhovercontact');
  portfolioh6.style.color = 'rgb(113, 113, 122)';
});

const sponsor = document.querySelector('#sponsorproject');
const sponsorh6 = document.querySelector('#sponsorprojecth6');

sponsor.addEventListener('mouseover', (event) => {
  sponsor.classList.add('animationhovercontactemail');
  sponsorh6.style.color = '#fff';
  sponsorh6.style.transition = 'all 0.3s ease-in-out';
});

sponsor.addEventListener('mouseout', (event) => { 
  sponsor.classList.remove('animationhovercontactemail');
  sponsorh6.style.color = 'rgb(113, 113, 122)';
});

const dressing = document.querySelector('#dressingproject');
const dressingh6 = document.querySelector('#dressingprojecth6');

dressing.addEventListener('mouseover', (event) => {
  dressing.classList.add('animationhovercontact');
  dressingh6.style.color = '#fff';
  dressingh6.style.transition = 'all 0.3s ease-in-out';
});

dressing.addEventListener('mouseout', (event) => { 
  dressing.classList.remove('animationhovercontact');
  dressingh6.style.color = 'rgb(113, 113, 122)';
});