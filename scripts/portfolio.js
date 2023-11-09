const body = document.querySelector('#body');
const github = document.querySelector('#github');

github.addEventListener('mouseover', (event) => {
  body.classList.add('animationhovercontactemail');
  console.log('hover');
});

github.addEventListener('mouseout', (event) => { 
  body.classList.remove('animationhovercontactemail');
});