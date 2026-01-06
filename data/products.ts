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
      "Indulgent, rich, and irresistibly moreish. Our Biscoff Rocky Road is made with smooth, melt-in-the-mouth chocolate, packed with crunchy Biscoff biscuits and soft, fluffy marshmallows, then finished with a generous swirl of creamy Biscoff spread. Every bite delivers the perfect balance of chocolatey richness and that signature caramelised Biscoff flavour. A decadent no-bake treat that’s perfect for sharing… or keeping all to yourself. 🍫✨",
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
      "A classic favourite with a buttery twist. Our Bakewell Shortbread features a melt-in-the-mouth, all-butter shortbread base topped with sweet raspberry jam and finished with a delicate almond layer for that unmistakable Bakewell flavour. Soft, crumbly, and perfectly balanced between fruity and nutty, it’s a timeless treat that pairs beautifully with a cup of tea or coffee. Elegant, comforting, and utterly delicious. 🍓🌰",
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
      "Pure indulgence in every layer. Our Billionaire’s Brownie starts with a rich, fudgy chocolate brownie base, topped with a thick layer of smooth, golden caramel and finished with a generous coating of silky chocolate. Decadent, gooey, and luxuriously sweet, it’s the ultimate treat for chocolate and caramel lovers alike. A show-stopping classic that truly lives up to its name. 🍫✨",
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
      "The ultimate indulgence for spread lovers. Our Biscoff & Chocolate Cookie Pie features a thick, soft-baked chocolate chip cookie base, stuffed with crunchy Biscoff biscuits and Nutella biscuits, then layered with rich Nutella spread and creamy Biscoff spread. Baked until golden on the outside and irresistibly gooey in the centre, every slice delivers molten chocolate, nutty hazelnut richness, and that signature caramelised Biscoff flavour. Decadent, comforting, and completely addictive. 🍪🍫✨",
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
      "A perfect mix of fudgy and crunchy. Our Caramel Cornflake Brownie starts with a rich, dense chocolate brownie base, topped with a thick layer of smooth, golden caramel and finished with a crunchy cornflake topping coated in chocolate. The result is a delicious contrast of gooey brownie, soft caramel, and crisp cornflakes in every bite. Bold, indulgent, and seriously satisfying — a must-try for brownie lovers. 🍫✨",
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
      "Warm, spiced, and irresistibly indulgent. Our Caramel Gingerbread Cookie Bar is made with a soft, chewy gingerbread cookie base infused with comforting spices, layered with rich, buttery caramel for the perfect sweet finish. Each bite delivers a balance of cosy gingerbread flavour and smooth caramel richness, creating a treat that’s both nostalgic and indulgent. Perfect with a hot drink and ideal for gingerbread lovers. 🍪✨",
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
      "A classic favourite reimagined. Our Cherry Bakewell Cookie Pie features a thick, soft-baked cookie base with a subtle almond flavour, generously layered with rich, tangy Morello cherry jam and stuffed with pieces of Cherry Bakewell tarts for an extra indulgent twist. Studded with juicy cherries and baked until golden on the outside and irresistibly gooey in the centre, it delivers all the nostalgic Bakewell flavour in a decadent cookie pie form — rich, comforting, and utterly delicious. 🍒✨",
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
      "Decadent, thick, and seriously indulgent. Our Cookies & Cream Cookie Pie features a soft-baked chocolate chip cookie shell filled with a creamy cookies-and-cream centre, layered with whole and crushed chocolate sandwich biscuits throughout. Studded with milk chocolate chunks and baked until golden, it’s crisp on the outside and luxuriously gooey inside. Every slice delivers the perfect balance of cookie dough, creamy filling, and chocolate crunch — a true show-stopping dessert. 🍪🤍🍫",
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
      "A nostalgic classic done right. Our Cornflake Tart features a crisp, buttery pastry base filled with sweet strawberry jam and topped with golden, crunchy cornflakes coated in rich, sticky syrup. Baked until perfectly golden, it’s the ultimate balance of buttery, fruity, and crunchy textures. A comforting, timeless treat that tastes just like home. ✨🥧",
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
      "Rich, fudgy, and full of fun. Our Cosmic Brownie is made with a dense, chocolatey brownie base, topped with a smooth layer of silky chocolate and finished with a colourful mix of Smarties and M&M’s. Ultra-indulgent, perfectly gooey, and packed with deep chocolate flavour, it’s a playful, nostalgic treat that looks just as good as it tastes. 🍫🌈✨",
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
      "Rich, fudgy, and packed with crunch. Our Crunchie Brownie features a dense, chocolatey brownie base loaded with chunks of Crunchie, melting slightly as it bakes to create pockets of golden honeycomb throughout. Finished with extra Crunchie pieces on top, it delivers the perfect contrast of gooey chocolate and light, crunchy honeycomb in every bite. A must-try for chocolate lovers who love a little crunch. 🍫✨",
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
      "A chocolate lover’s dream. Our Dairy Milk Rocky Road is made with smooth, creamy Cadbury Dairy Milk chocolate, generously mixed with fluffy marshmallows and crunchy biscuit pieces. Rich, sweet, and perfectly indulgent, each bite delivers that unmistakable Dairy Milk creaminess with a satisfying mix of textures. A classic, crowd-pleasing treat that never disappoints. 🍫✨",
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
      "A luxurious twist on a chocolate classic. Our Dubai Brownie features an ultra-fudgy chocolate brownie base filled with a rich, creamy pistachio kunafa filling, bringing a beautifully nutty flavour and subtle crunch. It’s topped with a smooth milk chocolate ganache and finished with a generous sprinkle of chopped pistachio pieces. Decadent, indulgent, and inspired by bold Middle Eastern flavours — this brownie is truly next level. 🍫💚✨",
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

