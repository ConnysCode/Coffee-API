export default [
  {
    title: "Black",
    description:
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    ingredients: ["Coffee"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
    id: 1,
    tags: ["Classic", "Simple", "Cafe Noir"],
  },
  {
    title: "Latte",
    description:
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    ingredients: ["Espresso", "Steamed Milk"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
    id: 2,
    tags: ["Popular", "Espresso", "Flavored"],
  },
  {
    title: "Cappuccino",
    description:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    ingredients: ["Espresso", "Steamed Milk", "Foam"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg",
    id: 3,
    tags: ["Foamy", "Espresso", "Variations"],
  },
  {
    title: "Americano",
    description:
      "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
    ingredients: ["Espresso", "Hot Water"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg",

    // Note: This is applying the same id as the previous item to test the applicants ability to handle duplicate keys
    id: 3,
    tags: ["Espresso", "Diluted", "Hot"],
  },
  {
    title: "Espresso",
    description:
      "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
    ingredients: ["1oz Espresso"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
    id: 5,
    tags: ["Strong", "Solo", "Base"],
  },
  {
    title: "Doppio",
    description:
      "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
    ingredients: ["2oz Espresso"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg",
    id: 6,
    // Note: This is setting a string as the tags to test the applicants ability to handle unexpected data types
    tags: "Strong",
  },
  {
    title: "Cortado",
    description:
      "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
    ingredients: ["1oz Espresso", "1oz Steamed Milk"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
    id: 7,
    tags: ["Balanced", "Espresso", "Steamed Milk"],
  },
  {
    title: "Red Eye",
    description:
      "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
    ingredients: ["Coffee", "Espresso"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg",
    id: 8,
    tags: ["Energetic", "Strong", "Wake-up"],
  },
  {
    title: "Galão",
    description:
      "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
    ingredients: ["Espresso", "Foamed milk"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
    id: 9,
    tags: ["Portuguese", "Foamy", "Light"],
  },
  {
    title: "Lungo",
    description:
      "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
    ingredients: ["Long pulled espresso"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
    id: 10,
    tags: ["Long", "Espresso", "Caffeine"],
  },
  {
    title: "Macchiato",
    description:
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
    ingredients: ["Espresso", "Foam"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
    id: 11,
    tags: ["Espresso", "Foamy", "Medium"],
  },
  {
    title: "Mocha",
    description:
      "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
    id: 12,
    tags: ["Chocolate", "Espresso", "Sweet"],
  },
  {
    title: "Ristretto",
    description:
      "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
    ingredients: ["Short pulled espresso"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
    id: 13,
    tags: ["Short", "Espresso", "Sweeter"],
  },
  {
    title: "Flat White",
    description:
      "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
    ingredients: ["Espresso", "Steamed Milk"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
    id: 14,
    tags: ["Australian", "Espresso", "No Foam"],
  },
  {
    title: "Affogato",
    description:
      "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
    ingredients: ["Espresso", "Ice cream"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
    id: 15,
    tags: ["Dessert", "Espresso", "Ice Cream"],
  },
  {
    title: "Café au Lait",
    description:
      "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
    ingredients: ["Coffee", "Steamed Milk"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
    id: 16,
    tags: ["Minimalist", "Coffee", "Warm Milk"],
  },
  {
    title: "Irish",
    description:
      "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
    ingredients: ["Coffee", "Whiskey", "Sugar", "Cream"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg",
    id: 17,
    tags: ["Whiskey", "Sweet", "Creamy"],
  },
  {
    title: "Guayoyo",
    description:
      "Traditional Venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's preferably drank without milk nor cream.",
    ingredients: ["Coffee", "Traditional", "Hot Water"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
    id: 18,
    tags: ["Venezuelan", "Traditional", "Strong"],
  },
  {
    title: "Cortadito",
    description:
      "Traditional Cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
    ingredients: ["Coffee", "Traditional", "Sugar", "Milk"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg",
    id: 19,
    // Note: This is missing the tags property to test the applicants ability to handle missing data
  },
  // Note: This is adding a nullish item to test the applicants ability to handle unexpected data types
  null,
  {
    title: "Cold Brew",
    description:
      "Cold brew is made by steeping coffee grounds in cold water for an extended period. It has a smoother, less acidic flavor compared to hot-brewed coffee.",
    ingredients: ["Coffee", "Ice"],
    // Note: This is using a relative path to test the applicants ability to handle missin images
    image: "images/cold brew.jpg",
    id: 20,
    tags: ["Cold", "Smooth", "Less Acidic"],
  },
  {
    // Note: This is setting a null value as the description to test the applicants ability to handle unexpected data types
    title: null,
    // Note: This is utalising html tags in the description to test the applicants ability to embed html
    description:
      "<b>A new take</b> on the classic cappuccino, served over ice for a refreshing twist.",
    ingredients: ["Coffee", "Ice"],
    // Note: This is using a relative path to test the applicants ability to handle missin images
    image: "images/cappucino.jpg",
    id: 21,
    tags: ["Iced", "Cappuccino", "Refreshing"],
  },
  {
    title: "New Americano",
    description:
      "An updated version of the americano, now served over ice for a cool and bold coffee experience.",
    ingredients: ["Coffee", "Ice"],
    // Note: This is using a relative path to test the applicants ability to handle missin images
    image: "images/americano.jpg",
    id: 22,
    tags: ["Iced", "Bold", "Americano"],
  },
];
