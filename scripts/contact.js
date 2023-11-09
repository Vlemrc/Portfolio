// ANIMATION BG CONTACT //

const linkedin = document.querySelector('#linkedin');
const linkedinImage = document.querySelector('#linkedin-image');

linkedin.addEventListener('mouseover', (event) => {
  linkedinImage.style.border = '1px solid rgba(255, 255, 255, 0.8)';
  linkedin.classList.add('animationhovercontact');
  linkedinImage.style.transition = 'all 0.3s ease-in-out';
});

linkedin.addEventListener('mouseout', (event) => { 
  linkedinImage.style.border = '1px solid rgba(255, 255, 255, 0.3)';
  linkedin.classList.remove('animationhovercontact');
  linkedinImage.style.transition = 'all 0.3s ease-in-out';
});

//

const email = document.querySelector('#email');
const emailImage = document.querySelector('#email-image');

email.addEventListener('mouseover', (event) => {
  emailImage.style.border = '1px solid rgba(255, 255, 255, 0.8)';
  email.classList.add('animationhovercontactemail');
  emailImage.style.transition = 'all 0.3s ease-in-out';
});

email.addEventListener('mouseout', (event) => { 
  emailImage.style.border = '1px solid rgba(255, 255, 255, 0.3)';
  email.classList.remove('animationhovercontactemail');
  emailImage.style.transition = 'all 0.3s ease-in-out';
});

//

const cv = document.querySelector('#cv');
const cvImage = document.querySelector('#cv-image');
const cvp = document.querySelector('#cv-p');

cv.addEventListener('mouseover', (event) => {
  cvImage.style.border = '1px solid rgba(255, 255, 255, 0.8)';
  cvp.style.color = '#fff';
  cvp.style.transition = 'all 0.3s ease-in-out';
  cvImage.style.transition = 'all 0.3s ease-in-out';
});

cv.addEventListener('mouseout', (event) => { 
  cvImage.style.border = '1px solid rgba(255, 255, 255, 0.3)';
  cvp.style.color = 'rgb(113, 113, 122)';
  cvp.style.transition = 'all 0.3s ease-in-out';
  cvImage.style.transition = 'all 0.3s ease-in-out';
});