const pizza = require('src/assets/images/pizza-icon.jpg');
const seafood = require('src/assets/images/shrimp-icon.jpg');
const soft = require('src/assets/images/soda-icon.jpg');

const categoriesData = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza',
    selected: true,
  },
  {
    id: 2,
    image: seafood,
    title: 'Seafood',
    selected: false,
  },
  {
    id: 3,
    image: soft,
    title: 'Soft Drinks',
    selected: true,
  },
];

export default categoriesData;
