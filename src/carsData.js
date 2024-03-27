// import { useState } from "react";
// const [carsData, setCarsData] = useState([
const carsData =
[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "image": "/img/1.jpg",
    "color": "Silver",
    "description": "The Toyota Corolla is a compact car that is known for its reliability and fuel efficiency."
  },
  {
    "id": 2,
    "brand": "Honda",
    "model": "Civic",
    "year": 2021,
    "image": "/img/2.jpg",
    "color": "Red",
    "description": "The Honda Civic is a popular compact car known for its sporty design and excellent handling."
  },
  {
    "id": 3,
    "brand": "Ford",
    "model": "Fusion",
    "year": 2020,
    "image": "/img/3.jpg",
    "color": "Blue",
    "description": "The Ford Fusion is a midsize sedan that offers a comfortable ride and modern features."
  },
  {
    "id": 4,
    "brand": "Chevrolet",
    "model": "Malibu",
    "year": 2019,
    "image": "/img/4.jpg",
    "color": "White",
    "description": "The Chevrolet Malibu is a stylish midsize sedan with a spacious interior and advanced safety features."
  },
  {
    "id": 5,
    "brand": "Nissan",
    "model": "Altima",
    "year": 2023,
    "image": "/img/5.jpg",
    "color": "Black",
    "description": "The Nissan Altima is a reliable midsize sedan with a comfortable interior and smooth ride."
  },
  {
    "id": 6,
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2018,
    "image": "/img/6.jpg",
    "color": "Gray",
    "description": "The Volkswagen Jetta is a compact sedan known for its upscale interior and responsive handling."
  },
  {
    "id": 7,
    "brand": "BMW",
    "model": "3 Series",
    "year": 2022,
    "image": "/img/7.jpg",
    "color": "Silver",
    "description": "The BMW 3 Series is a luxury compact car that offers a balance of performance and comfort."
  },
  {
    "id": 8,
    "brand": "Mercedes-Benz",
    "model": "C-Class",
    "year": 2020,
    "image": "/img/8.jpg",
    "color": "Black",
    "description": "The Mercedes-Benz C-Class is a luxury sedan with a refined interior and powerful engine options."
  },
  {
    "id": 9,
    "brand": "Audi",
    "model": "A4",
    "year": 2021,
    "image": "/img/9.jpg",
    "color": "Blue",
    "description": "The Audi A4 is a premium compact sedan known for its sophisticated design and advanced technology."
  },
  {
    "id": 10,
    "brand": "Lexus",
    "model": "ES",
    "year": 2019,
    "image": "/img/10.jpg",
    "color": "White",
    "description": "The Lexus ES is a luxury sedan with a spacious cabin, smooth ride, and high-quality materials."
  },
  {
    "id": 11,
    "brand": "Hyundai",
    "model": "Elantra",
    "year": 2023,
    "image": "/img/1.jpg",
    "color": "Red",
    "description": "The Hyundai Elantra is a compact sedan with a comfortable ride and user-friendly infotainment system."
  },
  {
    "id": 12,
    "brand": "Kia",
    "model": "Optima",
    "year": 2018,
    "image": "/img/2.jpg",
    "color": "Black",
    "description": "The Kia Optima is a midsize sedan known for its spacious interior, smooth ride, and long warranty."
  },
  {
    "id": 13,
    "brand": "Subaru",
    "model": "Legacy",
    "year": 2017,
    "image": "/img/3.jpg",
    "color": "Blue",
    "description": "The Subaru Legacy is an all-wheel-drive sedan with a comfortable interior and strong safety scores."
  },
  {
    "id": 14,
    "brand": "Mazda",
    "model": "Mazda6",
    "year": 2020,
    "image": "/img/4.jpg",
    "color": "Silver",
    "description": "The Mazda Mazda6 is a midsize sedan with athletic handling, upscale interior, and fuel-efficient engines."
  },
  {
    "id": 15,
    "brand": "Tesla",
    "model": "Model 3",
    "year": 2022,
    "image": "/img/5.jpg",
    "color": "Red",
    "description": "The Tesla Model 3 is an all-electric sedan with impressive acceleration, long range, and advanced technology."
  },
  {
    "id": 16,
    "brand": "Volvo",
    "model": "S60",
    "year": 2021,
    "image": "/img/6.jpg",
    "color": "White",
    "description": "The Volvo S60 is a luxury sedan known for its safety features, comfortable seats, and elegant design."
  },
  {
    "id": 17,
    "brand": "Chrysler",
    "model": "300",
    "year": 2019,
    "image": "/img/7.jpg",
    "color": "Gray",
    "description": "The Chrysler 300 is a full-size sedan with a spacious interior, powerful engine options, and smooth ride."
  },
  {
    "id": 18,
    "brand": "Buick",
    "model": "Regal",
    "year": 2018,
    "image": "/img/8.jpg",
    "color": "Black",
    "description": "The Buick Regal is a midsize sedan with a comfortable ride, upscale cabin, and generous trunk space."
  },
  {
    "id": 19,
    "brand": "Jaguar",
    "model": "XE",
    "year": 2020,
    "image": "/img/9.jpg",
    "color": "Blue",
    "description": "The Jaguar XE is a luxury compact sedan with sporty handling, upscale interior, and powerful engine options."
  },
  {
    "id": 20,
    "brand": "Lincoln",
    "model": "MKZ",
    "year": 2019,
    "image": "/img/10.jpg",
    "color": "Silver",
    "description": "The Lincoln MKZ is a luxury sedan with a comfortable ride, spacious seats, and a long list of standard features."
  },
  {
    "id": 21,
    "brand": "Cadillac",
    "model": "CTS",
    "year": 2023,
    "image": "/img/1.jpg",
    "color": "White",
    "description": "The Cadillac CTS is a luxury sedan with powerful engines, a spacious interior, and high-tech features."
  },
  {
    "id": 22,
    "brand": "Infiniti",
    "model": "Q50",
    "year": 2022,
    "image": "/img/1.jpg",
    "color": "Black",
    "description": "The Infiniti Q50 is a luxury sedan with a comfortable ride, powerful engines, and high-quality materials."
  },
  {
    "id": 23,
    "brand": "Land Rover",
    "model": "Discovery",
    "year": 2017,
    "image": "/img/1.jpg",
    "color": "Red",
    "description": "The Land Rover Discovery is a luxury SUV with off-road capability, a spacious interior, and advanced technology."
  },
  {
    "id": 24,
    "brand": "Jeep",
    "model": "Grand Cherokee",
    "year": 2020,
    "image": "/img/1.jpg",
    "color": "Gray",
    "description": "The Jeep Grand Cherokee is an SUV with rugged off-road capability, a comfortable interior, and powerful engine options."
  },
  {
    "id": 25,
    "brand": "GMC",
    "model": "Terrain",
    "year": 2018,
    "image": "/img/1.jpg",
    "color": "White",
    "description": "The GMC Terrain is a compact SUV with a spacious interior, comfortable ride, and user-friendly infotainment system."
  },
  {
    "id": 26,
    "brand": "Mitsubishi",
    "model": "Outlander",
    "year": 2019,
    "image": "/img/1.jpg",
    "color": "Blue",
    "description": "The Mitsubishi Outlander is a compact SUV with available third-row seating, good fuel economy, and a long warranty."
  },
  {
    "id": 27,
    "brand": "Porsche",
    "model": "Macan",
    "year": 2021,
    "image": "/img/1.jpg",
    "color": "Black",
    "description": "The Porsche Macan is a luxury compact SUV with thrilling performance, a high-quality interior, and sporty handling."
  },
  {
    "id": 28,
    "brand": "Acura",
    "model": "TLX",
    "year": 2023,
    "image": "/img/1.jpg",
    "color": "Silver",
    "description": "The Acura TLX is a luxury sedan with a comfortable ride, sporty handling, and a long list of standard features."
  },
  {
    "id": 29,
    "brand": "Mini",
    "model": "Cooper",
    "year": 2018,
    "image": "/img/1.jpg",
    "color": "Red",
    "description": "The Mini Cooper is a subcompact car with nimble handling, a retro-inspired design, and a range of customization options."
  },
  {
    "id": 30,
    "brand": "Fiat",
    "model": "500",
    "year": 2022,
    "image": "/img/1.jpg",
    "color": "White",
    "description": "The Fiat 500 is a subcompact car with Italian flair, easy maneuverability, and an efficient engine."
  },
  {
    "id": 31,
    "brand": "Alfa Romeo",
    "model": "Giulia",
    "year": 2021,
    "image": "/img/1.jpg",
    "color": "Black",
    "description": "The Alfa Romeo Giulia is a luxury compact car with exhilarating performance, stylish design, and Italian craftsmanship."
  },
  {
    "id": 32,
    "brand": "Smart",
    "model": "Fortwo",
    "year": 2020,
    "image": "/img/1.jpg",
    "color": "Yellow",
    "description": "The Smart Fortwo is a tiny city car with excellent maneuverability, easy parking, and impressive fuel economy."
  },
  {
    "id": 33,
    "brand": "Suzuki",
    "model": "Swift",
    "year": 2019,
    "image": "/img/1.jpg",
    "color": "Green",
    "description": "The Suzuki Swift is a subcompact car with sporty styling, agile handling, and good fuel efficiency."
  },
  {
    "id": 34,
    "brand": "Citroen",
    "model": "C4",
    "year": 2020,
    "image": "/img/1.jpg",
    "color": "Orange",
    "description": "The Citroen C4 is a compact car with distinctive styling, a comfortable ride, and a range of efficient engines."
  },
  {
    "id": 35,
    "brand": "Dodge",
    "model": "Charger",
    "year": 2018,
    "image": "/img/1.jpg",
    "color": "Purple",
    "description": "The Dodge Charger is a full-size sedan with powerful engine options, a spacious interior, and a muscular design."
  }
]
  
export default carsData;