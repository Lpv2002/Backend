import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  
  products: [
    {
      //_id: '1', 
      name: 'HUGO BOSS BOTTLE EDT',
      slug: 'HUGO BOSS BOTTLE EDT',
      category: 'fragancia-masculina',
      image: '/images/masculina/Hugo1.jpg', // 679px × 829px
      price: 64.68,
      countInStock: 10,
      brand: 'Hugo Boss',
      rating: 4.5,
      numReviews: 10,
      description: 'Seguro y contemporáneo: las líneas limpias convierten BOSS Bottled en un clásico legendario. Se ha diseñado pensando en el hombre moderno, en una fusión de elegancia y estilo.',
    },
    {
      //_id: '2',
      name: 'CAROLINA HERRERA HERRERA MEN EDT',
      slug: 'CAROLINA HERRERA HERRERA MEN EDT',
      category: 'Shirts',
      image: '/images/masculina/CH1.jpg',
      price: 98.81,
      countInStock: 0,
      brand: 'Carolina Herrera',
      rating: 4.0,
      numReviews: 10,
      description: 'high Herrera for Men es en Eau de Toilette cuna fragancia para hombres, diseñada por una mujer, lo que implica que toda la elegancia que caracteriza a Carolina Herrera está impregnada en este producto. product',
    },
    {
      //_id: '3',
      name: 'HUGO BOSS THE SCENT EDT',
      slug: 'HUGO BOSS THE SCENT EDT',
      category: 'fragancia-masculina',
      image: '/images/masculina/Hugo3.jpg',
      price: 69.58,
      countInStock: 15,
      brand: 'Hugo Boss',
      rating: 4.5,
      numReviews: 14,
      description: 'Descubra la fuerza de BOSS The Scent Intense for Him, el nuevo perfume seductor para hombre. Notas especiadas de jengibre y cardamomo, exótica fruta de maninka y cuero se entremezclan para desvelar la fuerza magnética de esta fragancia.igh quality product',
    },
    {
      //_id: '4',
      name: 'CAROLINA HERRERA 212 VIP MEN EDT',
      slug: 'CAROLINA HERRERA 212 VIP MEN EDT',
      category: 'fragancia-masculina',
      image: '/images/masculina/CH2.jpg',
      price: 101.33,
      countInStock: 5,
      brand: 'Carolina Herrera',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '5',
      name: 'VERSACE BRIGHT CRYSTAL Eau de Toilette',
      slug: 'VERSACE BRIGHT CRYSTAL Eau de Toilette',
      category: 'fragancia-femenina',
      image: '/images/femenina/Versa1.jpg',
      price: 107.57,
      countInStock: 5,
      brand: 'Versace',
      rating: 4.5,
      numReviews: 10,
      description: 'Una mezcla de sensualidad, de la transparencia del cristal y del brillo de la luminosidad. ',
    },
    {
      //_id: '6',
      name: 'DIOR J ADORE Eau de Parfum',
      slug: 'DIOR J ADORE Eau de Parfum',
      category: 'fragancia-masculina',
      image: '/images/femenina/dior1.jpg',
      price: 168.80,
      countInStock: 5,
      brand: 'Dior',
      rating: 4.5,
      numReviews: 5,
      description: 'J’adore Eau de Parfum es el gran floral femenino de Dior.',
    },
    {
      //_id: '7',
      name: 'CAROLINA HERRERA CH EDT',
      slug: 'CAROLINA HERRERA CH EDT',
      category: 'fragancia-femenina',
      image: '/images/femenina/CHF1.jpg',
      price: 139.33,
      countInStock: 5,
      brand: 'Carolina Herrera',
      rating: 4.5,
      numReviews: 8,
      description: 'La fragancia CH Carolina Herrera es un accesorio invisible, el toque final, el último detalle, el equilibrio perfecto entre confort y frescura.',
    },
    {
      //_id: '8',
      name: 'DIOR MISS DIOR BLOOMING BOUQUET',
      slug: 'DIOR MISS DIOR BLOOMING BOUQUET',
      category: 'fragancia-femenina',
      image: '/images/femenina/dior2.jpg',
      price: 153,
      countInStock: 5,
      brand: 'Dior',
      rating: 4.5,
      numReviews: 8,
      description: 'Miss Dior Blooming Bouquet es una composición fresca y chispeante imaginada como un vestido bordado con miles de flores. Este ramillete floral rinde homenaje al amor',
    },




  ],
};
export default data;