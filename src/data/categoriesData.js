const pizza = require('src/assets/images/pizza-icon.png');
const seafood = require('src/assets/images/shrimp-icon.png');
const soft = require('src/assets/images/soda-icon.png');

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
    selected: false,
  },
];

export default categoriesData;
