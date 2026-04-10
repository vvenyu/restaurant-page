import './menu.css'
export default () => {
  const itemList = [
    {
      title: 'The Little Bean',
      description: 'A tiny, 4 oz cup perfect for espressos, named after adorable cat toe beans.',
      price: '2$',
    },
    {
      title: 'The Kitten Sip',
      description: "An 8 oz cup for smaller drinks or kids' hot chocolates.",
      price: '3.50$',
    },
    {
      title: 'The Purrfect Pour',
      description: "The standard 12 oz everyday cup.",
      price: '5$',
    },
    {
      title: 'The Main Meow',
      description: "A generous 16 oz cup for those who need a serious caffeine fix.",
      price: '7.50$',
    },
    {
      title: 'The Maine Coon',
      description: "An extra-large 20 oz cup, named after the largest domesticated cat breed.",
      price: '9$',
    },
    {
      title: "The Lion's Share",
      description: "A massive 24 oz iced coffee tumbler.",
      price: '10$',
    },
  ];
  const content = document.querySelector('#content');

  const sectionTitle = document.createElement('h1');
  sectionTitle.textContent = 'Menu Items';
  content.appendChild(sectionTitle);

  const grid = document.createElement('div');
  grid.className = 'menu-page';
  content.appendChild(grid);

  itemList.forEach((item) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const divider = document.createElement('hr');
    const price = document.createElement('span');

    card.classList.add('menu-item');
    title.classList.add('item-title');
    description.classList.add('item-desc');
    price.classList.add('item-price');

    title.textContent = item.title;
    description.textContent = item.description;
    price.textContent = item.price;

    card.appendChild(title);
    card.appendChild(divider);
    card.appendChild(description);
    card.appendChild(price);
    grid.appendChild(card);
  });
};