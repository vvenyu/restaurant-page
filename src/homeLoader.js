import catImage from './cat.jpg'

export default () => {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  const image = document.createElement('img');
  const description = document.createElement('p');
  const descriptionHeader = document.createElement('h2');
  const descriptionDiv = document.createElement('div');
  const infoDiv = document.createElement('div');
  const hoursHeader = document.createElement('h2');
  const hours = document.createElement('p');
  const hoursDiv = document.createElement('div');


  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet lorem. Praesent eu mi lorem. Cras hendrerit risus ante, nec mollis urna semper sit amet. In hac habitasse platea dictumst. Vivamus congue magna eget nibh efficitur facilisis. In blandit nibh diam, in vestibulum enim lobortis id.';
  descriptionHeader.textContent = 'Description';
  image.src = catImage;
  headline.textContent = 'Cat cafe';
  hoursHeader.textContent = 'Hours';
  hours.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet lorem. Praesent eu mi lorem. Cras hendrerit risus ante, nec mollis urna semper sit amet. In hac habitasse platea dictumst. Vivamus congue magna eget nibh efficitur facilisis. In blandit nibh diam, in vestibulum enim lobortis id.';
  infoDiv.classList.add('grid');

  content.appendChild(headline);
  content.appendChild(image);
  descriptionDiv.appendChild(descriptionHeader);
  descriptionDiv.appendChild(description);
  hoursDiv.appendChild(hoursHeader);
  hoursDiv.appendChild(hours);
  infoDiv.appendChild(descriptionDiv);
  infoDiv.appendChild(hoursDiv);
  content.appendChild(infoDiv);
};