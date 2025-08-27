// Фиксированные значения: срок → платёж
const PAYMENT_TABLE = {
    8: { term: "8 лет", payment: 50000 },
    7: { term: "7 лет", payment: 55000 },
    6: { term: "6 лет", payment: 60000 },
    5: { term: "5 лет", payment: 70000 },
    4: { term: "4 года", payment: 80000 },
    3: { term: "3 года", payment: 90000 },
    2: { term: "2 года", payment: 100000 },
    1: { term: "1 год",  payment: 110000 }
};

// Форматирование числа: 50000 → "50 000 ₽"
function formatNumber(num) {
    return num.toLocaleString('ru-RU') + ' ₽';
}

// Обновление заполнения слайдера
function updateSliderFill(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const percent = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--fill-percent', `${percent}%`);
}

// Элементы
const initialSlider = document.getElementById('initialPaymentSlider');
const initialValue = document.getElementById('initialPaymentValue');

const loanTermSlider = document.getElementById('loanTermSlider');
const loanTermValue = document.getElementById('loanTermValue');
const monthlyPaymentValue = document.getElementById('monthlyPaymentValue');

// Обновление всех значений
function updateValues() {
    // Обновляем первоначальный взнос
    const initial = parseInt(initialSlider.value);
    initialValue.textContent = formatNumber(initial);

    // Обновляем срок и платёж
    const years = parseInt(loanTermSlider.value);
    const data = PAYMENT_TABLE[years] || PAYMENT_TABLE[8];

    loanTermValue.textContent = data.term;
    monthlyPaymentValue.textContent = formatNumber(data.payment);

    // Обновляем заполнение слайдеров
    updateSliderFill(initialSlider);
    updateSliderFill(loanTermSlider);
}

// Слушатели
initialSlider.addEventListener('input', updateValues);
loanTermSlider.addEventListener('input', updateValues);

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateValues(); // Устанавливаем начальные значения
});