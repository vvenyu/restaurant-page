import catImage from './cat.jpg'

export const loader = () => {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  const image = document.createElement('img');

  image.src = catImage;
  headline.textContent = 'Cat cafe';


  content.appendChild(headline);
  content.appendChild(image);
};