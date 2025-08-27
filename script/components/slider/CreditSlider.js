// Фиксированные значения: срок → платёж
const PAYMENT_TABLE = {
    8: { term: "8 лет", payment: 50000 },
    7: { term: "7 лет", payment: 60000 },
    6: { term: "6 лет", payment: 70000 },
    5: { term: "5 лет", payment: 80000 },
    4: { term: "4 года", payment: 90000 },
    3: { term: "3 года", payment: 100000 },
    2: { term: "2 года", payment: 110000 },
    1: { term: "1 год",  payment: 120000 }
};

// Функция расчёта процентной ставки (чем меньше срок — тем выше)
function calculateInterestRate(years) {
    const maxRate = 15.0;
    const minRate = 7.0;
    const rate = maxRate - (years - 1) * ((maxRate - minRate) / 7);
    return Math.max(parseFloat(rate.toFixed(1)), minRate);
}

// Форматирование числа: 50000 → "50 000 ₽"
function formatNumber(num) {
    return num.toLocaleString('ru-RU') + ' ₽';
}

// Обновление прогресса слайдера
function updateSliderFill(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const percent = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--fill-percent', `${percent}%`);
}

// Элементы
const initialSlider = document.getElementById('initialPaymentSlider');
const initialPaymentValue = document.getElementById('initialPaymentValue');
const initialPercentValue = document.getElementById('initialPercentValue');

const loanTermSlider = document.getElementById('loanTermSlider');
const loanTermValue = document.getElementById('loanTermValue');
const monthlyPaymentValue = document.getElementById('monthlyPaymentValue');
const interestRate = document.getElementById('interestRate');

// Обновление всех значений
function updateValues() {
    // --- Первоначальный взнос ---
    const initial = parseInt(initialSlider.value);
    const percent = initial === 0 ? "0%" : `${(initial / 1000000) * 100}%`;
    initialPaymentValue.textContent = formatNumber(initial);
    initialPercentValue.textContent = percent;

    // --- Срок и платёж ---
    const years = parseInt(loanTermSlider.value);
    const data = PAYMENT_TABLE[years] || PAYMENT_TABLE[8];

    loanTermValue.textContent = data.term;
    monthlyPaymentValue.textContent = formatNumber(data.payment);

    // --- Процентная ставка (только если элемент существует) ---
    if (interestRate) {
        const rate = calculateInterestRate(years);
        interestRate.textContent = rate + '%';
    }

    // --- Обновление прогресса слайдеров ---
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