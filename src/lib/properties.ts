import { IProperty } from "@/entities/property";

const properties: IProperty[] = [
  {
    id: "3298b608-77ff-11ee-b962-0242ac120001",
    location: "Midtown Manhattan, New York",
    price_per_night: 190,
    slug: "luxury-house-in-times-square",
    picture_url:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    description:
      "A luxurious house in the heart of Times Square with breathtaking views.",
    title: "Luxury house in Times Square",
    bedrooms: 4,
    bathrooms: 2,
    max_guests: 8,
    square_area: "7x9m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120002",
    location: "Paris, France",
    price_per_night: 250,
    slug: "elegant-flat-in-le-marais",
    picture_url:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    description:
      "An elegant flat located in the historic district of Le Marais, Paris.",
    title: "Elegant Flat in Le Marais",
    bedrooms: 3,
    bathrooms: 2,
    max_guests: 6,
    square_area: "6x8m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120003",
    location: "London, England",
    price_per_night: 180,
    slug: "modern-house-in-covent-garden",
    picture_url:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    description:
      "A modern house situated in the vibrant area of Covent Garden, London.",
    title: "Modern house in Covent Garden",
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    square_area: "5x7m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120004",
    location: "Tokyo, Japan",
    price_per_night: 220,
    slug: "traditional-ryokan-in-asakusa",
    picture_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "Experience Japanese hospitality in this traditional ryokan located in Asakusa, Tokyo.",
    title: "Traditional Ryokan in Asakusa",
    bedrooms: 5,
    bathrooms: 3,
    max_guests: 10,
    square_area: "8x10m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120005",
    location: "Barcelona, Spain",
    price_per_night: 200,
    slug: "stylish-house-in-gracia",
    picture_url:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "A stylish house in the trendy neighborhood of Gracia, Barcelona.",
    title: "Stylish house in Gracia",
    bedrooms: 3,
    bathrooms: 2,
    max_guests: 6,
    square_area: "6x8m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120016",
    location: "Sydney, Australia",
    price_per_night: 280,
    slug: "ocean-view-penthouse-in-sydney",
    picture_url:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "A luxurious penthouse with breathtaking ocean views in the heart of Sydney.",
    title: "Ocean View Penthouse in Sydney",
    bedrooms: 4,
    bathrooms: 3,
    max_guests: 8,
    square_area: "7x9m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120017",
    location: "United Arab Emirates, Dubai",
    price_per_night: 350,
    slug: "luxury-suite-in-burj-khalifa",
    picture_url:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "Experience unparalleled luxury in this exclusive suite located in the iconic Burj Khalifa, Dubai.",
    title: "Luxury Suite in Burj Khalifa",
    bedrooms: 3,
    bathrooms: 2.5,
    max_guests: 6,
    square_area: "6x8m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120018",
    location: "Rio de Janeiro, Brazil",
    price_per_night: 230,
    slug: "beachfront-villa-in-ipanema",
    picture_url:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "A stunning beachfront villa with private access to the famous Ipanema Beach in Rio de Janeiro.",
    title: "Beachfront Villa in Ipanema",
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    square_area: "5x7m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120019",
    location: "Cape Town, South Africa",
    price_per_night: 300,
    slug: "modern-house-in-waterfront",
    picture_url:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "A modern house with panoramic views of Table Mountain, located in the V&A Waterfront, Cape Town.",
    title: "Modern house in Waterfront",
    bedrooms: 3,
    bathrooms: 2,
    max_guests: 6,
    square_area: "6x8m²",
  },
  {
    id: "3298b608-77ff-11ee-b962-0242ac120020",
    location: "Amsterdam, Netherlands",
    price_per_night: 210,
    slug: "canal-side-house-in-jordaan",
    picture_url:
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlfGVufDB8fDB8fHww",
    description:
      "A charming canal-side house in the picturesque neighborhood of Jordaan, Amsterdam.",
    title: "Canal-Side House in Jordaan",
    bedrooms: 5,
    bathrooms: 3,
    max_guests: 10,
    square_area: "8x10m²",
  },
];

export default properties;
