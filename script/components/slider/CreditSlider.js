function updateSliderFill(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const percent = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--fill-percent', `${percent}%`);
}

const initialSlider = document.getElementById('initialPaymentSlider');
const initialPercentValue = document.getElementById('initialPercentValue');

const loanTermSlider = document.getElementById('loanTermSlider');
const loanTermValue = document.getElementById('loanTermValue');

function formatYears(years) {
    if (years === 1) return '1 год';
    if (years >= 2 && years <= 4) return `${years} года`;
    return `${years} лет`;
}

function updateValues() {
    const initial = parseInt(initialSlider.value);
    const percent = initial === 0 ? "0%" : `${(initial / 1000000) * 100}%`;
    initialPercentValue.textContent = percent;

    const years = parseInt(loanTermSlider.value);
    loanTermValue.textContent = formatYears(years);

    updateSliderFill(initialSlider);
    updateSliderFill(loanTermSlider);
}

initialSlider.addEventListener('input', updateValues);
loanTermSlider.addEventListener('input', updateValues);

document.addEventListener('DOMContentLoaded', () => {
    updateValues();
});