// car-data.js

// Данные автомобилей: модели, характеристики, цвета и т.д.
window.carData = {
  modelX: {
    name: "S09 Comfort Plus",
    discount: "860 000 ₽",
    oldPrice: "1 408 000 ₽",
    newPrice: "552 000 ₽",
    credit: "3 333 ₽/мес",
    maxSpeed: "210 км/ч",
    acceleration: "7.9 сек.",
    fuelConsumption: "9.9 л/100 км",
    horsepower: "210 л.с.",
    promos: [
      "500 000 ₽ выгоды при покупке в кредит",
      "350 000 ₽ выгода по трейд-ин",
      "Кредит от 0.01%"
    ],
    colors: [
      {
        name: 'Серебристый',
        value: 'silver',
        image: '../assets/auto/car_silver.jpg',
        bg: 'bg-gray-200',
        border: 'border-gray-400'
      },
      {
        name: 'Бирюзовый',
        value: 'teal',
        image: '../assets/auto/car_teal.jpg',
        bg: 'bg-teal-600',
        border: 'border-orange-accent',
        active: true
      },
      {
        name: 'Белый',
        value: 'white',
        image: '../assets/auto/car_white.jpg',
        bg: 'bg-white',
        border: 'border-gray-400'
      },
      {
        name: 'Серый',
        value: 'gray',
        image: '../assets/auto/car_gray.jpg',
        bg: 'bg-gray-400',
        border: 'border-gray-400'
      },
      {
        name: 'Синий',
        value: 'blue',
        image: '../assets/auto/car_blue.jpg',
        bg: 'bg-blue-600',
        border: 'border-gray-400'
      },
      {
        name: 'Прозрачный',
        value: 'custom',
        image: '../assets/auto/car_custom.jpg',
        bg: 'bg-transparent',
        border: 'border-gray-400'
      }
    ]
  },
  modelY: {
    name: "S09 Sport Pro",
    discount: "900 000 ₽",
    oldPrice: "1 500 000 ₽",
    newPrice: "620 000 ₽",
    credit: "4 100 ₽/мес",
    maxSpeed: "230 км/ч",
    acceleration: "6.5 сек.",
    fuelConsumption: "9.5 л/100 км",
    horsepower: "250 л.с.",
    promos: [
      "600 000 ₽ выгоды при покупке в кредит",
      "400 000 ₽ выгода по трейд-ин",
      "Кредит от 0.05%"
    ],
    colors: [
      {
        name: 'Серебристый',
        value: 'silver',
        image: '../assets/auto/car_silver.jpg',
        bg: 'bg-gray-200',
        border: 'border-gray-400'
      },
      {
        name: 'Белый',
        value: 'white',
        image: '../assets/auto/car_white.jpg',
        bg: 'bg-white',
        border: 'border-gray-400',
        active: true
      },
      {
        name: 'Синий',
        value: 'blue',
        image: '../assets/auto/car_blue.jpg',
        bg: 'bg-blue-600',
        border: 'border-gray-400'
      },
      {
        name: 'Прозрачный',
        value: 'custom',
        image: '../assets/auto/car_custom.jpg',
        bg: 'bg-transparent',
        border: 'border-gray-400'
      }
    ]
  }
};

// Доступные комплектации для каждой модели
window.carTrims = {
  modelX: ["Comfort", "Luxury"],
  modelY: ["Sport", "Premium"]
};