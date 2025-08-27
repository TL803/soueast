function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.querySelector(`[onclick="toggleAccordion('${id}')"] svg`);

    if (content.classList.contains('max-h-0')) {
        // Если закрыт — открыть
        content.classList.remove('max-h-0', 'opacity-0');
        content.classList.add('max-h-40', 'opacity-100');
        icon.classList.add('rotate-180');
    } else {
        // Если открыт — закрыть
        content.classList.remove('max-h-40', 'opacity-100');
        content.classList.add('max-h-0', 'opacity-0');
        icon.classList.remove('rotate-180');
    }
}