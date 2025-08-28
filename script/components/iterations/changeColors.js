document.addEventListener('DOMContentLoaded', () => {
    const colorSelector = document.getElementById('color-selector');
    const carImage = document.getElementById('car-image');

    // Массив цветов и изображений
    const colors = [
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
            active: true  // начальный активный цвет
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
    ];

    // Найти активный цвет (или первый)
    const activeColor = colors.find(c => c.active) || colors[0];

    // Установить начальное изображение
    carImage.src = activeColor.image;

    // Генерация кнопок цветов
    colors.forEach(color => {
        const button = document.createElement('div');
        button.className = `
            w-[40px] 
            h-[40px] 
            rounded 
            cursor-pointer 
            ${color.bg} 
            border-2 
            ${color.active ? 'border-orange-accent' : 'border-' + color.border}
        `.trim();

        button.dataset.value = color.value;
        button.title = color.name;

        button.addEventListener('click', () => {
            // Обновить изображение
            carImage.src = color.image;

            // Обновить активный стиль
            document.querySelectorAll('#color-selector > div').forEach(btn => {
                btn.classList.remove('border-2', 'border-orange-accent');
                const borderColor = colors.find(c => c.value === btn.dataset.value)?.border;
                btn.classList.add('border', `border-${borderColor}`);
            });

            button.classList.remove('border', `border-${color.border}`);
            button.classList.add('border-2', 'border-orange-accent');
        });

        colorSelector.appendChild(button);
    });
});