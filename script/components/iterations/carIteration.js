// === Данные об автомобилях ===
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
        name: "S10 Pro",
        type: "Пикап",
        specs: "2.5л (200 л.с.), АКПП - 6, дизель, Полный",
        price: "3 200 000 ₽",
        credit: "В кредит от 3 800 ₽/мес",
        discount: "Скидка до 750 000 ₽",
        image: "../assets/carInCard.png"
    }
];

// === Конфигурация карточки (подходит под твой макет) ===
const CAR_CARD_CONFIG = {
    linkHref: './auto.html',
    linkClass: 'block card-wrapper',
    cardClass:
        'bg-[#111214] cursor-pointer rounded-xl overflow-hidden shadow-lg ' +
        'hover:scale-[1.02] duration-300 transform-gpu ' +
        'max-w-xs sm:max-w-md md:max-w-none mx-auto md:mx-0',
    imgClass: 'w-full h-44 sm:h-52 md:h-60 object-cover',
    discountClass:
        'absolute top-0 left-4 sm:left-[32px] bg-[#F2892E80] text-white ' +
        'text-[12px] sm:text-[14px] font-medium px-2 sm:px-3 py-1 rounded-b-[8px]',
    contentPadding: 'p-4 sm:p-5 md:p-6',
    contentSpacing: 'space-y-3 sm:space-y-4',
    priceWrapper: 'mt-3 sm:mt-4 text-end',
    titleClass: 'text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-white',
    typeClass: 'text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white',
    specsClass:
        'text-[#FFFFFF99] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[20px]',
    priceClass: 'text-[24px] sm:text-[28px] md:text-[36px] font-medium text-white',
    creditClass: 'text-white text-[12px] sm:text-[14px] md:text-[16px]',
    buttonClass:
        'w-full bg-orange-500 hover:bg-orange-600 text-black ' +
        'text-[16px] sm:text-[18px] md:text-[20px] font-medium ' +
        'py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-4 rounded-lg ' +
        'transition duration-200',
    buttonText: 'Подробнее'
};

// === Создание карточки ===
function createCarCard(car, config = CAR_CARD_CONFIG) {
    const {
        linkHref,
        linkClass,
        cardClass,
        imgClass,
        discountClass,
        contentPadding,
        contentSpacing,
        priceWrapper,
        titleClass,
        typeClass,
        specsClass,
        priceClass,
        creditClass,
        buttonClass,
        buttonText
    } = config;

    const link = document.createElement('a');
    link.href = linkHref;
    link.className = linkClass;

    link.innerHTML = `
        <div class="${cardClass}">
            <div class="relative">
                <img src="${car.image}" alt="${car.name}" class="${imgClass}">
                <div class="${discountClass}">
                    ${car.discount}
                </div>
            </div>
            <div class="${contentPadding} ${contentSpacing}">
                <h3 class="${titleClass}">${car.name}</h3>
                <p class="${typeClass}">${car.type}</p>
                <p class="${specsClass}">
                    ${car.specs}
                </p>
                <div class="${priceWrapper}">
                    <p class="${priceClass}">${car.price}</p>
                    <p class="${creditClass}">${car.credit}</p>
                </div>
                <button class="${buttonClass}">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;

    return link;
}

// === Рендеринг карточек в контейнеры ===
function renderCars(data, selector = '[data-container="cars"]') {
    const containers = document.querySelectorAll(selector);

    if (containers.length === 0) {
        console.warn(`[Car Iteration] Контейнеры с селектором "${selector}" не найдены.`);
        return;
    }

    containers.forEach(container => {
        // Очистка контейнера (если нужно)
        // container.innerHTML = '';

        data.forEach(car => {
            const card = createCarCard(car);
            container.appendChild(card);
        });
    });
}

// === Запуск после загрузки DOM ===
document.addEventListener('DOMContentLoaded', () => {
    renderCars(cars);
});