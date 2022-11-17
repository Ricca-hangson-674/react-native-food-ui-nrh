const pizza1 = require('src/assets/images/pizza1.jpg');
const pizza2 = require('src/assets/images/pizza2.jpg');
const pizza3 = require('src/assets/images/pizza3.jpg');

const ham = require('src/assets/images/ham.jpg');
const tomato = require('src/assets/images/tomato.jpg');
const cheese = require('src/assets/images/cheese.jpg');
const garlic = require('src/assets/images/garlic.jpg');

const popularData = [
  {
    id: 1,
    image: pizza1,
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: 3.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thi9n Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: ham,
      },
      {
        id: 2,
        name: 'tomato',
        image: tomato,
      },
      {
        id: 3,
        name: 'cheese',
        image: cheese,
      },
      {
        id: 4,
        name: 'garlic',
        image: garlic,
      },
    ],
  },
  {
    id: 2,
    image: pizza2,
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 14,
    crust: 'Thick Crust',
    deliveryTime: 50,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: ham,
      },
      {
        id: 2,
        name: 'tomato',
        image: tomato,
      },
    ],
  },
  {
    id: 3,
    image: pizza3,
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '3.0',
    price: 2.99,
    sizeName: 'Large',
    sizeNumber: 14,
    crust: 'Thick Crust',
    deliveryTime: 90,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: ham,
      },
      {
        id: 2,
        name: 'tomato',
        image: tomato,
      },
      {
        id: 3,
        name: 'cheese',
        image: cheese,
      },
      {
        id: 4,
        name: 'garlic',
        image: garlic,
      },
    ],
  },
];

export default popularData;
