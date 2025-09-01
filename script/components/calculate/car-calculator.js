// Данные для моделей — УБРАЛИ name!
const carData = {
  modelX: {
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

const trims = {
  modelX: ["Comfort", "Luxury"],
  modelY: ["Sport", "Premium"]
};

function updateTrims() {
  const modelSelect = document.getElementById("modelSelect");
  const trimSelect = document.getElementById("trimSelect");
  trimSelect.innerHTML = '<option value="">Комплектация</option>';
  trimSelect.disabled = true;

  const selectedModel = modelSelect.value;
  if (selectedModel && trims[selectedModel]) {
    trims[selectedModel].forEach(trim => {
      const option = document.createElement("option");
      option.value = trim.toLowerCase();
      option.textContent = trim;
      trimSelect.appendChild(option);
    });
    trimSelect.disabled = false;
  }

  document.getElementById("carDetails").style.display = "none";
}

function updateCarInfo() {
  const modelSelect = document.getElementById("modelSelect");
  const trimSelect = document.getElementById("trimSelect");
  const selectedModel = modelSelect.value;
  const selectedTrim = trimSelect.value;

  if (selectedModel && selectedTrim) {
    const data = carData[selectedModel];
    const carImage = document.getElementById("car-image");
    const colorSelector = document.getElementById("color-selector");

    const modelLabel = modelSelect.options[modelSelect.selectedIndex].text;

    document.getElementById("modelName").textContent = modelLabel;

    document.getElementById("discountAmount").textContent = data.discount;
    document.getElementById("oldPrice").textContent = data.oldPrice;
    document.getElementById("newPrice").textContent = data.newPrice;
    document.getElementById("creditPrice").textContent = `В кредит от ${data.credit}`;
    document.getElementById("maxSpeed").textContent = data.maxSpeed;
    document.getElementById("acceleration").textContent = data.acceleration;
    document.getElementById("fuelConsumption").textContent = data.fuelConsumption;
    document.getElementById("horsepower").textContent = data.horsepower;
    document.getElementById("promo1").textContent = data.promos[0];
    document.getElementById("promo2").textContent = data.promos[1];
    document.getElementById("promo3").textContent = data.promos[2];

    colorSelector.innerHTML = '';

    const activeColor = data.colors.find(c => c.active) || data.colors[0];
    carImage.src = activeColor.image;

    data.colors.forEach(color => {
      const button = document.createElement('div');
      button.className = `
        w-[40px] h-[40px] rounded cursor-pointer ${color.bg} border-2 
        ${color.active ? 'border-2 border-orange-accent' : `border ${color.border}`}
      `.trim();
      button.dataset.value = color.value;
      button.title = color.name;

      button.addEventListener('click', () => {
        carImage.src = color.image;
        document.querySelectorAll('#color-selector > div').forEach(btn => {
          const c = data.colors.find(col => col.value === btn.dataset.value);
          btn.className = `w-[40px] h-[40px] rounded cursor-pointer ${c.bg} border ${c.border}`.trim();
        });
        button.className = `w-[40px] h-[40px] rounded cursor-pointer ${color.bg} border-2 border-orange-accent`.trim();
      });

      colorSelector.appendChild(button);
    });

    document.getElementById("carDetails").style.display = "block";
  }
}

function updateInitialPayment() {
  const value = parseInt(document.getElementById("initialPaymentSlider").value);
  const percent = Math.round((value / 1000000) * 100);
  document.getElementById("initialPercentValue").textContent = `${percent}%`;
  document.getElementById("initialPaymentValue").textContent = `${value.toLocaleString()} ₽`;
}

function updateLoanTerm() {
  const years = document.getElementById("loanTermSlider").value;
  document.getElementById("loanTermValue").textContent = `${years} лет`;
  const monthly = Math.max(80000 - years * 5000, 10000).toLocaleString();
  document.getElementById("monthlyPaymentValue").textContent = `${monthly} ₽`;
}

// Подключаем события
document.getElementById("trimSelect").addEventListener("change", updateCarInfo);
document.getElementById("initialPaymentSlider").addEventListener("input", updateInitialPayment);
document.getElementById("loanTermSlider").addEventListener("input", updateLoanTerm);

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  updateInitialPayment();
  updateLoanTerm();
});