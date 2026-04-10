import './about.css';

export default () => {
  const content = document.querySelector('#content');

  const wrapper = document.createElement('div');
  wrapper.className = 'about-page';
  content.appendChild(wrapper);

  const title = document.createElement('h1');
  title.textContent = 'About Us';
  wrapper.appendChild(title);

  const intro = document.createElement('p');
  intro.classList.add('about-intro');
  intro.textContent =
    'Welcome to Cat Café — where freshly brewed coffee meets furry companionship. ' +
    'Nestled in the heart of the city, we opened our doors in 2019 with a simple mission: ' +
    'serve exceptional coffee while giving rescue cats a warm, loving space to find their forever homes.';
  wrapper.appendChild(intro);

  const cards = [
    {
      icon: '☕',
      heading: 'Our Coffee',
      body: 'We source single-origin beans from small farms around the world and roast them locally every week. From bold espressos to silky lattes, every cup is crafted with care.',
    },
    {
      icon: '🐱',
      heading: 'The Cats',
      body: 'All of our resident cats come from local shelters and rescues. They roam freely through the café, napping on window sills and greeting guests. Over 120 cats have found homes through us!',
    },
    {
      icon: '📍',
      heading: 'Visit Us',
      body: '42 Whisker Lane, Downtown\nOpen daily 8 AM – 8 PM\nReservations recommended on weekends.',
    },
  ];

  const grid = document.createElement('div');
  grid.className = 'about-grid';

  cards.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('about-card');

    const icon = document.createElement('span');
    icon.classList.add('card-icon');
    icon.textContent = data.icon;

    const heading = document.createElement('h3');
    heading.textContent = data.heading;

    const divider = document.createElement('hr');

    card.appendChild(icon);
    card.appendChild(heading);
    card.appendChild(divider);

    if (data.body) {
      const body = document.createElement('p');
      body.textContent = data.body;
      card.appendChild(body);
    }

    if (data.values) {
      const list = document.createElement('ul');
      list.classList.add('about-values');
      data.values.forEach((v) => {
        const li = document.createElement('li');
        li.textContent = v;
        list.appendChild(li);
      });
      card.appendChild(list);
    }

    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
};
