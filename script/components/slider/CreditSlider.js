        const CAR_PRICE = 1000000; // 1 миллион рублей

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

        // Форматирование процента: 500000 → "50%"
        function formatPercent(value) {
            const percent = Math.round((value / CAR_PRICE) * 100);
            return `${percent}%`;
        }

        // Обновление заполнения слайдера (визуальный прогресс)
        function updateSliderFill(slider) {
            const min = parseFloat(slider.min);
            const max = parseFloat(slider.max);
            const val = parseFloat(slider.value);
            const percent = ((val - min) / (max - min)) * 100;
            slider.style.setProperty('--fill-percent', `${percent}%`);
        }

        // Элементы
        const initialSlider = document.getElementById('initialPaymentSlider');
        const initialPaymentValue = document.getElementById('initialPaymentValue');   // сумма
        const initialPercentValue = document.getElementById('initialPercentValue');   // процент

        const loanTermSlider = document.getElementById('loanTermSlider');
        const loanTermValue = document.getElementById('loanTermValue');
        const monthlyPaymentValue = document.getElementById('monthlyPaymentValue');

        // Обновление всех значений
        function updateValues() {
            // 1. Первоначальный взнос
            const initial = parseInt(initialSlider.value);
            initialPaymentValue.textContent = formatNumber(initial);
            initialPercentValue.textContent = formatPercent(initial);

            // 2. Срок кредита → платёж
            const years = parseInt(loanTermSlider.value);
            const data = PAYMENT_TABLE[years] || PAYMENT_TABLE[8];
            loanTermValue.textContent = data.term;
            monthlyPaymentValue.textContent = formatNumber(data.payment);

            // 3. Визуальное заполнение слайдеров
            updateSliderFill(initialSlider);
            updateSliderFill(loanTermSlider);
        }

        // Слушатели событий
        initialSlider.addEventListener('input', updateValues);
        loanTermSlider.addEventListener('input', updateValues);

        // Инициализация при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            updateValues();
        });