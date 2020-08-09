const buttonJsBtn = document.querySelectorAll('.button-js-btn');
const krainImg = document.querySelector('.krain-img');
const krupaImg = document.querySelector('.krupa-img');
const semaImg = document.querySelector('.sema-img');
const nikitImg = document.querySelector('.nikit-img');
const denImg = document.querySelector('.den-img');
const close = document.querySelectorAll('.close');
const bruh = document.querySelector('.bruh');
const bruhText = document.querySelector('.bruh-text');
const text = document.querySelector('.text');

buttonJsBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (i === 0){
      krainImg.classList.add('active');
      krupaImg.classList.remove('active');
      semaImg.classList.remove('active');
      nikitImg.classList.remove('active');
      denImg.classList.remove('active');
      text.classList.remove('active');
    }
    if (i === 1) {
      krupaImg.classList.add('active');
      krainImg.classList.remove('active');
      semaImg.classList.remove('active');
      nikitImg.classList.remove('active');
      denImg.classList.remove('active');
      text.classList.remove('active');
    }
    if (i === 2) {
      semaImg.classList.add('active');
      krainImg.classList.remove('active');
      krupaImg.classList.remove('active');
      nikitImg.classList.remove('active');
      denImg.classList.remove('active');
      text.classList.remove('active');
    }
    if (i === 3) {
      nikitImg.classList.add('active');
      semaImg.classList.remove('active');
      krainImg.classList.remove('active');
      krupaImg.classList.remove('active');
      denImg.classList.remove('active');
      text.classList.remove('active');
    }
    if (i === 4) {
      denImg.classList.add('active');
      semaImg.classList.remove('active');
      krainImg.classList.remove('active');
      krupaImg.classList.remove('active');
      nikitImg.classList.remove('active');
      text.classList.remove('active');
    }
  });
});

close.forEach((close) => {
close.addEventListener('click', () => {
  krainImg.classList.remove('active');
  krupaImg.classList.remove('active');
  semaImg.classList.remove('active');
  nikitImg.classList.remove('active');
  denImg.classList.remove('active');
  text.classList.remove('active');
});
});

const ladno = document.querySelector('.ladno');

bruh.addEventListener('click', () => {
  bruhText.innerHTML = "Нет блять, брух";
  ladno.classList.add('active');
});
ladno.addEventListener('click', () => {
  ladno.innerHTML = "ТЕКСТ";
  text.classList.add('active');
  krainImg.classList.remove('active');
  krupaImg.classList.remove('active');
  semaImg.classList.remove('active');
  nikitImg.classList.remove('active');
  denImg.classList.remove('active');
});



