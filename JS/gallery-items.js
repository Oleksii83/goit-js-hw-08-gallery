import photoEl from './data/imgEl.js';

// const photoLiEl = document.createElement('li');
// photoLiEl.classList.add('gallery__item');

// const photoParagEl = document.createElement('a');
// photoParagEl.classList.add('gallery__link');
// photoParagEl.setAttribute('href', `${photoEl.href}`);

// const photoImgEl = document.createElement('img');
// photoImgEl.classList.add('gallery__image');
// photoImgEl.src = `{preview}`;
// photoImgEl.dataset.source = `{original}`;
// photoImgEl.alt = `{description}`;
// photoImgEl.width = 400;
// photoImgEl.height = 200;

// photoLiEl.append(photoParagEl, photoImgEl);
// console.log('🚀 ~ file: gallery-items.js ~ line 33 ~ photoLi', photoLiEl);
// const imageElContainer = document.querySelector('js-gallery');

// пример 1
// const imageElContainer = document.querySelector('.js-gallery');
// const makePhoto = ({ preview, original, description }) => {
//   const photoLiEl = document.createElement('li');
//   photoLiEl.classList.add('gallery__item');

//   const photoParagEl = document.createElement('a');
//   photoParagEl.classList.add('gallery__link');
//   photoParagEl.href = original;
//   photoParagEl;
//   const photoImgEl = document.createElement('img');
//   photoImgEl.classList.add('gallery__image');
//   photoImgEl.src = preview;
//   photoImgEl.dataset.source = original;
//   photoImgEl.alt = description;
//   photoImgEl.width = 400;
//   photoImgEl.height = 200;

//   photoLiEl.append(photoParagEl, photoImgEl);

//   return photoLiEl;
// };

// const elements = photoEl.map(makePhoto);
// console.log(elements);
// imageElContainer.append(...elements);
// пример 2

const galleryEl = document.querySelector('.js-gallery');
const boxlWindow = document.querySelector('.js-lightbox');
const boxlImage = document.querySelector('.lightbox__image');
const boxBtn = document.querySelector('.lightbox__button');
const boxOverlay = document.querySelector('.lightbox__overlay');

const [{ preview, original, description }] = photoEl;
const listEl = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
    <a class="gallery__link" href=${original} onclick="event.preventDefault()">
    <img class='gallery__image' data-source=${original} src=${preview} alt=${description} width = 400  height = 200 />
    </a></li>`;
};

const MakeListEl = photoEl.map(listEl).join('');
galleryEl.insertAdjacentHTML('beforeend', MakeListEl);

galleryEl.addEventListener('click', onPhoto);

function onPhoto(event) {
  if (event.target.nodeName === 'IMG') {
    boxlWindow.classList.add('is-open');
    boxlImage.src = event.target.dataset.source;
  }
}
boxBtn.addEventListener('click', OnClose);
boxOverlay.addEventListener('click', OnClose);
window.addEventListener('keydown', OnExcClose);

function OnClose(e) {
  boxlWindow.classList.remove('is-open');
  boxlImage.src = '';

  window.removeEventListener('keydown', OnClose);
}

function OnExcClose(e) {
  if (e.code === 'Escape') OnClose();
}

// Доп задание слайдер
