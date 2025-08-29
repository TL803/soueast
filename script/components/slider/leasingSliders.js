const CAR_PRICE = 1000000; // 1 миллион рублей

// Форматирование числа: 500000 → "500 000 ₽"
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
const initialPaymentValue = document.getElementById('initialPaymentValue');

const loanTermSlider = document.getElementById('loanTermSlider');
const loanTermValue = document.getElementById('loanTermValue');

// Функция склонения "год", "года", "лет"
function getYearText(year) {
  if (year % 10 === 1 && year !== 11) return 'год';
  if ([2, 3, 4].includes(year % 10) && ![12, 13, 14].includes(year)) return 'года';
  return 'лет';
}

// Обновление значений
function updateValues() {
  // Первоначальный взнос
  const initial = parseInt(initialSlider.value);
  if (initialPaymentValue) {
    initialPaymentValue.textContent = formatNumber(initial);
  }

  // Срок лизинга
  const years = parseInt(loanTermSlider.value);
  if (loanTermValue) {
    loanTermValue.textContent = `${years} ${getYearText(years)}`;
  }

  // Визуальное заполнение
  updateSliderFill(initialSlider);
  updateSliderFill(loanTermSlider);
}

// Слушатели
initialSlider?.addEventListener('input', updateValues);
loanTermSlider?.addEventListener('input', updateValues);

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  updateValues();
});