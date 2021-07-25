const db = require('../config/connection');
// const { User } = require('../models');
const { User, Product, Category, Restaurant } = require('../models');
// const userSeeds = require('./userSeeds.json');

// db.once('open', async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(userSeeds);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   process.exit(0);
// });

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Greek' },
    { name: 'Indian' },
    { name: 'French' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Restaurant.deleteMany();

  const restaurants = await Restaurant.insertMany([
    {
      name: 'Plato\'s Plate',
      description:
        'Fresh and delicious Greek food with all the classics!',
      image: '/platos-plate/gyro.jpg',
      category: categories[0]._id,
      price: 4.99,
      products: [
        {
          name: "Greek Fries",
          description: "Crispy, crunchy fries with chunks of feta cheese, drizzled with olive oil.",
          price: 6.99,
          image: '/platos-plate/greek-fries.jpg'
        },
        {
          name: "Spanakopita",
          description: "Tasty spinach cooked with onions and feta cheese, wrapped in a flaky phyllo dough.",
          price: 9.99,
          image: '/platos-plate/spanakopita.jpg'
        },
        {
          name: "Greek Salad",
          description: "Fresh lettuce, sliced onions, slice cucumbers, olives, and feta cheese, tossed with salad dressing.",
          price: 6.99,
          image: '/platos-plate/greek-salad.jpg'

        },
        {
          name: "Gyro",
          description: "Sliced roasted lamb with sliced onions and tomatos, wrapped in a warm pita.",
          price: 10.99,
          image: '/platos-plate/gyro.jpg'
        },
        {
          name: "Moussaka",
          description: "Layered grounded lamb and roasted eggplant, topped with a bechemel sauce.",
          price: 12.99,
          image: '/platos-plate/moussaka.jpg'
        },
        {
          name: "Soft Drink",
          description: "Always cold soda.",
          price: 1.99,
          image: '/platos-plate/soft-drink.jpg'
        }
      ]
    },
    {
      name: 'King Spicy',
      description:
        'Home to all spicy and flavorful Indian cuisine',
      image: '/king-spicy/baked-samosa.jpg',
      category: categories[1]._id,
      price: 3.99,
      products: [
        {
          name: "Tomato Rice",
          description: "A flavorful and delicious dish made with rice and tomatoes,spices and herbs.",
          price: 8.99,
          image: '/king-spicy/tomato-rice.jpg'
        },
        {
          name: "Chana Masala",
          description: "It’s a hearty, saucy chickpea and tomato dish with warming spices.",
          price: 13.99,
          image: '/king-spicy/chana-masala.jpg'
        },
        {
          name: "Pakoda",
          description: "Delicious indian crisp fried snack made with flour,spices and paneer.",
          price: 14.99,
          image: '/king-spicy/pakoda.jpg'

        },
        {
          name: "Poha",
          description: "Delicious and healthy breakfast recipe made with onions, potatoes and seasoning like chillies, crushed peanuts, lemon and curry leaves. ",
          price:10.99,
          image: '/king-spicy/poha.jpg'
        },
        {
          name: "Vegetarian Biryani",
          description: "An aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spice.",
          price: 12.99,
          image: '/king-spicy/veg-biryani.jpg'
        },
        {
          name: "Gulkand Chai",
          description: "Popular preserved tea made from rose petals that are dried and mixed along with sugar mixture.",
          price: 1.50,
          image: '/king-spicy/gulkand_chai.jpg'
        }
      ]
    },
    {
      name: 'La Belle Helene',
      description:
        'We serve french classics foods and drinks with a modern sensibility',
      image: '/la-belle-helene/confit-de-canard.jpg',
      category: categories[2]._id,
      price: 5.99,
      products: [
        {
          name: "Boeuf Bourguignon",
          description: "Stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms..",
          price: 18.99,
          image: '/la-belle-helene/boeuf-bourguignon.jpg'
        },
        {
          name: "Absinthe",
          description: "Bright-green, aniseed-flavored liqueur is famous for its hallucinatory effects.",
          price: 15.99,
          image: '/la-belle-helene/absinthe.jpg'
        },
        {
          name: "Salade Niçoise",
          description: "A mix of lettuce, fresh tomatoes, boiled eggs,tuna, green beans, Nicoise Cailletier olives, and anchovies.",
          price: 4.99,
          image: '/king-spicy/salade-niçoise.jpg'

        },
        {
          name: "Coq Au Vin",
          description: "Delicious dish made of chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic. ",
          price:20.99,
          image:'/la-belle-helene/coq-qu-vin.jpg'
        },
        {
          name: "Flamiche",
          description: "This a puff-pastry crust filled with cheese and vegetables and resembles a quiche.",
          price: 2.99,
          image:'/la-belle-helene/flamiche.jpg'
        },
        {
          name: "Ratatouille",
          description: "Iconic french made with vegetables shallow-fried and then layered in a casserole dish before being baked in an oven",
          price: 1.35,
          image: '/la-belle-helene/ratatouille.jpg'
        }
      ]
    }
  ]);

  console.log('restaurants seeded');

  await User.deleteMany();

  await User.create({
    userName: 'user1',
    email: 'user1@gmail.com',
    password: 'password123',
    orders: []
  });

  await User.create({
    userName: 'user2',
    email: 'user2@gmail.com',
    password: 'password123',
    orders: []
  });

  console.log('users seeded');

  process.exit();
});

