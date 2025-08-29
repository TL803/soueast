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

    function createCarCard(car) {
        const link = document.createElement('a');
        link.href = './auto.html';
        link.className = 'block card-wrapper';

        link.innerHTML = `
            <div class="bg-[#111214] cursor-pointer rounded-xl overflow-hidden shadow-lg hover-scale">
                <div class="relative">
                    <img src="${car.image}" alt="${car.name}" class="w-full h-44  md:h-60 object-cover">
                    <div class="absolute top-0 left-4  bg-[#F2892E80] text-white text-[12px] font-medium px-2  py-1 rounded-b-[8px]">
                        ${car.discount}
                    </div>
                </div>
                <div class="p-4  md:p-[24px] space-y-3 ">
                    <h3 class="text-[20px]  md:text-[24px] font-semibold text-white">${car.name}</h3>
                    <p class="text-[14px]  md:text-[16px] font-medium text-white">${car.type}</p>
                    <p class="text-[#FFFFFF99] text-[12px]  md:text-[16px] leading-[16px]  md:leading-[20px]">
                        ${car.specs}
                    </p>
                    <div class="mt-3  text-end">
                        <p class="text-[24px]  md:text-[36px] font-medium text-white">${car.price}</p>
                        <p class="text-white text-[12px]  md:text-[16px]">${car.credit}</p>
                    </div>
                    <button class="w-full bg-orange-500 hover:bg-orange-600 text-black text-[16px]  md:text-[20px] font-medium py-2  md:py-3 px-3  md:px-4 rounded-lg transition duration-200">
                        Подробнее
                    </button>
                </div>
            </div>
        `;

        return link;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const containers = document.querySelectorAll('[data-container="cars"]');
        if (containers.length > 0) {
            containers.forEach(container => {
                cars.forEach(car => {
                    container.appendChild(createCarCard(car));
                });
            });
        } else {
            console.warn('Контейнеры с data-container="cars" не найдены.');
        }
    });