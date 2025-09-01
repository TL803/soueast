export class OrderSelectedCar {
  static getTemplate() {
    /* html */
    return `
<div class="w-full mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 md:gap-8 bg-transparent">
  <!-- Левая часть: форма -->
  <div class="flex-1 space-y-4 md:space-y-6 text-white w-full">
    <h2 class="text-xl md:text-3xl font-bold text-center md:text-left">Получите персональные условия по кредиту</h2>
    
    <p class="text-sm md:text-base text-center md:text-left text-gray-300 leading-relaxed">
      Оставьте заявку, и мы свяжемся с вами в ближайшее время, чтобы подобрать идеальный автомобиль именно для вас!
    </p>

    <form id="credit-application-form" class="space-y-4 md:space-y-6 w-full">
      <div>
        <input 
          type="text" 
          name="full_name" 
          required 
          class="w-full h-12 md:h-[60px] px-4 md:px-6 
                 bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl 
                 text-white placeholder-white placeholder-opacity-70 
                 text-sm md:text-base
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                 focus:border-red-400 transition"
          placeholder="ФИО"
        >
        <div class="error-message text-red-300 text-xs md:text-sm mt-1 hidden"></div>
      </div>

      <div>
        <input 
          type="tel" 
          name="phone" 
          required 
          class="w-full h-12 md:h-[60px] px-4 md:px-6 
                 bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl 
                 text-white placeholder-white placeholder-opacity-70 
                 text-sm md:text-base
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                 focus:border-red-400 transition"
          placeholder="Ваш телефон"
        >
        <div class="error-message text-red-300 text-xs md:text-sm mt-1 hidden"></div>
      </div>

      <div class="flex items-center gap-2">
        <input 
          type="checkbox" 
          id="agree" 
          checked 
          class="custom-checkbox-input w-4 h-4 text-red-400 border-gray-600 rounded"
        >
        <label for="agree" class="text-xs md:text-sm text-gray-400">
          Согласен с <a href="./privacyPolicy.html" class="text-[#FE7600] hover:underline">политикой обработки персональных данных</a>
        </label>
      </div>

      <button 
        type="submit" 
        form="credit-application-form"
        class="w-full h-14 md:h-[84px] 
               bg-[#FE7600] hover:bg-orange-600 
               text-black text-base md:text-[24px] font-semibold 
               rounded-lg md:rounded-2xl 
               transition duration-200 transform hover:scale-[1.01] 
               focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        id="submit-credit-application"
      >
        Получить предложение!
      </button>
    </form>
  </div>

  <!-- Правая часть: изображение автомобиля -->
  <div class="flex-1 flex justify-center mt-4 md:mt-0">
    <img 
      src="../assets/modals/S09_preview 1.png" 
      alt="Автомобиль Tanglun EQ2" 
      class="w-full md:block hidden max-w-[250px] md:max-w-full object-contain rounded-lg md:rounded-xl shadow-lg"
    />
  </div>
</div>
    `;
  }

  static getBackground() {
    return null;
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="w-full max-w-[95vw] md:max-w-[685px] bg-transparent rounded-xl overflow-hidden">
        <div class="text-white space-y-6 md:space-y-8 p-6 md:p-[40px] text-center">
          <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 class="text-2xl md:text-[36px] font-bold leading-tight">Заявка успешно отправлена!</h3>
          <p class="text-sm md:text-[18px] text-gray-300 leading-relaxed">
            Наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      </div>

      <div class="w-full px-6 md:px-8 mt-6">
        <button 
          type="button"
          class="w-full h-14 md:h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-base md:text-[24px] font-semibold 
                 rounded-lg md:rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          id="close-success-modal"
        >
          Закрыть
        </button>
      </div>
    `;
  }

  static initForm(modalElement) {
    const form = modalElement.querySelector('#credit-application-form');
    const submitBtn = modalElement.querySelector('#submit-credit-application');

    if (form && submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.validateAndSubmit(form, modalElement);
      });
    }
  }

  static validateAndSubmit(form, modalElement) {
    let isValid = true;

    form.querySelectorAll('.error-message').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });

    const fullNameInput = form.full_name;
    if (!fullNameInput.value.trim()) {
      this.showError(fullNameInput, 'Введите ваше ФИО');
      isValid = false;
    } else if (fullNameInput.value.trim().split(' ').length < 2) {
      this.showError(fullNameInput, 'Введите как минимум имя и фамилию');
      isValid = false;
    }

    const phoneInput = form.phone;
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneInput.value.trim()) {
      this.showError(phoneInput, 'Введите номер телефона');
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
      this.showError(phoneInput, 'Введите корректный номер телефона');
      isValid = false;
    }

    const agreeCheckbox = form.querySelector('#agree');
    if (!agreeCheckbox.checked) {
      const label = modalElement.querySelector('label[for="agree"]');
      const parent = label.parentElement;
      const errorDiv = parent.querySelector('.error-message');
      if (!errorDiv) {
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'error-message text-red-300 text-xs md:text-sm mt-1';
        newErrorDiv.textContent = 'Необходимо согласие с политикой';
        parent.appendChild(newErrorDiv);
      } else {
        errorDiv.classList.remove('hidden');
        errorDiv.textContent = 'Необходимо согласие с политикой';
      }
      isValid = false;
    }

    if (isValid) {
      setTimeout(() => {
        modalElement.innerHTML = this.getSuccessTemplate();

        const closeBtn = modalElement.querySelector('#close-success-modal');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            const modal = modalElement.closest('.modal');
            if (modal) {
              modal.style.display = 'none';
              document.body.classList.remove('modal-open');
            }
          });
        }
      }, 600);
    }
  }

  static showError(inputElement, message) {
    const parent = inputElement.closest('div');
    const errorDiv = parent.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.classList.remove('hidden');
      errorDiv.textContent = message;
    }
  }
}