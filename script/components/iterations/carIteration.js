    // Данные об автомобилях
    const cars = [
      {
        name: "S07 Premium 4WD",
        type: "Кроссовер",
        specs: "1.6л (186 л.с.), АКПП - 8, бензин, Полный (4WD)",
        price: "2 809 000 ₽",
        credit: "В кредит от 3 333 ₽/мес",
        discount: "Скидка до 860 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S09 Comfort Plus",
        type: "Кроссовер",
        specs: "1.5л (170 л.с.), АКПП - 7, бензин, Передний",
        price: "2 499 000 ₽",
        credit: "В кредит от 2 999 ₽/мес",
        discount: "Скидка до 600 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S07 Comfort Plus",
        type: "Кроссовер",
        specs: "1.6л (186 л.с.), АКПП - 8, бензин, Полный (4WD)",
        price: "2 809 000 ₽",
        credit: "В кредит от 3 333 ₽/мес",
        discount: "Скидка до 860 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S05 City",
        type: "Хэтчбек",
        specs: "1.4л (120 л.с.), МКПП - 6, бензин, Передний",
        price: "1 800 000 ₽",
        credit: "В кредит от 2 100 ₽/мес",
        discount: "Скидка до 300 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S10 Pro",
        type: "Пикап",
        specs: "2.5л (200 л.с.), АКПП - 6, дизель, Полный",
        price: "3 200 000 ₽",
        credit: "В кредит от 3 800 ₽/мес",
        discount: "Скидка до 750 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S07 Premium 4WD",
        type: "Кроссовер",
        specs: "1.6л (186 л.с.), АКПП - 8, бензин, Полный (4WD)",
        price: "2 809 000 ₽",
        credit: "В кредит от 3 333 ₽/мес",
        discount: "Скидка до 860 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S07 Premium 4WD",
        type: "Кроссовер",
        specs: "1.6л (186 л.с.), АКПП - 8, бензин, Полный (4WD)",
        price: "2 809 000 ₽",
        credit: "В кредит от 3 333 ₽/мес",
        discount: "Скидка до 860 000 ₽",
        image: "../assets/carInCard.png"
      },
      {
        name: "S07 Premium 4WD",
        type: "Кроссовер",
        specs: "1.6л (186 л.с.), АКПП - 8, бензин, Полный (4WD)",
        price: "2 809 000 ₽",
        credit: "В кредит от 3 333 ₽/мес",
        discount: "Скидка до 860 000 ₽",
        image: "../assets/carInCard.png"
      }
    ];

    // Функция создания карточки
    function createCarCard(car) {
      const link = document.createElement('a');
      link.href = './auto.html';
      link.className = 'block card-wrapper';

      link.innerHTML = `
        <div class="bg-[#111214] cursor-pointer rounded-xl overflow-hidden shadow-lg hover-scale">
          <div class="relative">
            <img src="${car.image}" alt="${car.name}" class="w-full h-44 sm:h-52 md:h-60 object-cover">
            <div class="absolute top-0 left-4 sm:left-[32px] bg-[#F2892E80] text-white text-[12px] sm:text-[14px] font-medium px-2 sm:px-3 py-1 rounded-b-[8px]">
              ${car.discount}
            </div>
          </div>
          <div class="p-4 sm:p-5 md:p-[24px] space-y-3 sm:space-y-4">
            <h3 class="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-white">${car.name}</h3>
            <p class="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white">${car.type}</p>
            <p class="text-[#FFFFFF99] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[20px]">
              ${car.specs}
            </p>
            <div class="mt-3 sm:mt-4 text-end">
              <p class="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-white">${car.price}</p>
              <p class="text-white text-[12px] sm:text-[14px] md:text-[16px]">${car.credit}</p>
            </div>
            <button class="w-full bg-orange-500 hover:bg-orange-600 text-black text-[16px] sm:text-[18px] md:text-[20px] font-medium py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-4 rounded-lg transition duration-200">
              Подробнее
            </button>
          </div>
        </div>
      `;

      return link;
    }

    // Инициализация: находим контейнер по data-атрибуту
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('[data-container="cars"]');
      if (container) {
        cars.forEach(car => {
          container.appendChild(createCarCard(car));
        });
      } else {
        console.warn('Контейнер с data-container="cars" не найден.');
      }
    });