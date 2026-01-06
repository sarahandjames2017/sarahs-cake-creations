export type Product = {
  id: string;
  name: string;
  price: number;
  quantityAvailable: number;
  soldOut: boolean;
  customOnly: boolean;
  description?: string;

  // ✅ either single image OR multiple images
  image?: string;
  images?: string[];
};



export const products: Product[] = [
  {
    id: "90s-themed-cake",
    name: "Celebration Cakes",
    price: 0,
    quantityAvailable: 0,
    soldOut: false,
    customOnly: true,

    // ✅ MAIN IMAGE (used on products grid)
    image: "star_wars.png",

    // ✅ GALLERY IMAGES (used on product page)
    images: [
      "star_wars.png",
      "90s_themed_cake.jpg",
      "80s_themed_cake.jpg",
      "2_tier_unicorn_cake.jpg",
      "k_pop.png",
      "ariel_cake.jpg",
      "stitch.png",
      "chocolate_overload.png",
      "labubu_cake.jpg",
      "blippi.png",
      "disney_princess.png",
      "disney_princess_2.png",
      "black_and_white_heart.jpg",
            
    ],

    description:
      "A fully customisable celebration cake inspired by iconic 90s nostalgia. Perfect for birthdays and special occasions.",
  },
  {
    id: "biscoff-rockyroad",
    name: "Biscoff Rockyroad",
    price: 2.5,
    quantityAvailable: 9,
    soldOut: true,
    image: "biscoff_rockyroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "bakewell-shortbread-slice",
    name: "Bakewell Shortbread Slice",
    price: 2.5,
    quantityAvailable: 9,
    soldOut: true,
    image: "bakewell_shortbread_slice.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "billionaires-brownie",
    name: "Billionaires Brownie",
    price: 3.5,
    quantityAvailable: 9,
    soldOut: true,
    image: "billionaires_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "biscoff-and-chocolate-cookie-pie",
    name: "Biscoff And Chocolate Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "biscoff_and_chocolate_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "caramel-cornflake-brownie",
    name: "Caramel Cornflake Brownie",
    price: 3.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "caramel_cornflake_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "caramel-gingerbread-cookie-bar",
    name: "Caramel Gingerbread Cookie Bar",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "caramel_gingerbread_cookie_bar.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "cherry-bakewell-cookie-pie",
    name: "Cherry Bakewell Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "cherry_bakewell_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "cookies-and-cream-cookie-pie",
    name: "Cookies And Cream Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "cookies_and_cream_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "cornflake-tart",
    name: "Cornflake Tart",
    price: 1.50,
    quantityAvailable: 8,
    soldOut: true,
    image: "cornflake_tart.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "cosmic-brownie",
    name: "Cosmic Brownie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "cosmic_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "crunchie-brownie",
    name: "Crunchie Brownie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "crunchie_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "dairymilk-rockyroad",
    name: "Dairymilk Rockyroad",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "dairymilk_rockyroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "dubai-brownie",
    name: "Dubai Brownie",
    price: 3.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "dubai_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "funfetti-cookie-sandwich",
    name: "Funfetti Cookie Sandwich",
    price: 3.50,
    quantityAvailable: 10,
    soldOut: true,
    image: "funfetti_cookie_sandwich.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "gold-bar-krispie",
    name: "Gold Bar Krispie",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "gold_bar_krispie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "guylian-shell-krispie",
    name: "Guylian Shell Krispie",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "guylian_shell_krispie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "jammy-dodger-flapjack",
    name: "Jammy Dodger Flapjack",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "jammy_dodger_flapjack.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "kinder-stuffe-cookie",
    name: "Kinder Stuffed Cookie",
    price: 3.00,
    quantityAvailable: 12,
    soldOut: true,
    image: "kinder_stuffed_cookie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "kinderella-cookie-pie",
    name: "Kinderella Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "kinderella_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "kitkat-brownie",
    name: "kitkat Brownie",
    price: 3.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "kitkat_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "mars-stuffed-cookie",
    name: "Mars Stuffed Cookie",
    price: 3.00,
    quantityAvailable: 12,
    soldOut: true,
    image: "mars_stuffed_cookie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "millionaires-shortbread",
    name: "Millionaires Shortbread",
    price: 2.50,
    quantityAvailable: 8,
    soldOut: true,
    image: "millionaires_shortbread.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "mint-aero-brownie",
    name: "Mint Aero Brownie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "mint_aero_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "nutella-krispie-slice",
    name: "Nutella Krispie Slice",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "nutella_krispie_slice.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "oreo-brownie",
    name: "Oreo Brownie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "oreo_brownie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "oreo-stuffed-cookie",
    name: "Oreo Stuffed Cookie",
    price: 3.00,
    quantityAvailable: 12,
    soldOut: true,
    image: "oreo_stuffed_cookie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "pink-wafer-rockroad",
    name: "Pink Wafer Rockroad",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "pink_wafer_rockroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "red-velvet-cookies-sandwich",
    name: "Red Velvet Cookies Sandwich",
    price: 3.50,
    quantityAvailable: 10,
    soldOut: true,
    image: "red_velvet_cookies_sandwich.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "rolo-blondie",
    name: "Rolo Blondie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "rolo_blondie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "salted-caramel-and-pretzel-rockyroad",
    name: "Salted Caramel And Pretzel Rockyroad",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "salted_caramel_and_pretzel_rockyroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "school-cake",
    name: "School Cake",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "School_Cake.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "smarties-millionaire-krispie",
    name: "Smarties Millionaire Krispie",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "smarties_millionaire_krispie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "smores-cookie-pie",
    name: "Smores Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "smores_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "snickers-and-peanutbutter-cookie-pie",
    name: "Snickers And Peanutbutter Cookie Pie",
    price: 4.00,
    quantityAvailable: 8,
    soldOut: true,
    image: "snickers_and_peanutbutter_cookie_pie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "terry-s-chocolate-orange-rockyroad",
    name: "Terry's ChocolateOrange Rockyroad",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "terry's_chocolate_orange_rockyroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "triple-chocolate-brookie",
    name: "Triple Chocolate Brookie",
    price: 3.00,
    quantityAvailable: 9,
    soldOut: true,
    image: "triple_chocolate_brookie.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
  {
    id: "white-chocolate-rockyroad",
    name: "White Chocolate Rockyroad",
    price: 2.50,
    quantityAvailable: 9,
    soldOut: true,
    image: "white_chocolate_rockyroad.jpg",
    customOnly: false,
    description:
      "A rich chocolate rocky road packed with crunchy biscuits, fluffy marshmallows and finished with a generous layer of smooth Biscoff spread.",
  },
];

