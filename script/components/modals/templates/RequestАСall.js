export class RequestАСall {
  static getTemplate() {
    /* html */
    return `
      <div class="w-[685px] space-y-8 bg-transparent rounded-xl overflow-hidden flex justify-between">
        <div class="text-white space-y-8 p-[20px] ">
            <p class="text-[20px] text-white text-center leading-relaxed">
              Оставьте свои контакты — и наш менеджер перезвонит Вам в ближайшее время, чтобы ответить на все вопросы
            </p>

          <form id="order-car-form" data-modal-form="order-car" class="space-y-10 mt-2 w-full">
            <div>
              <input 
                type="text" 
                name="full_name" 
                required 
                class="w-full h-[60px] px-6 
                       bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl 
                       text-white placeholder-white placeholder-opacity-70 
                       text-[16px] font-normal 
                       focus:outline-none 
                       focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                       focus:border-red-400"
                placeholder="ФИО"
                minlength="2"
                maxlength="100"
              >
              <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
            </div>

            <div>
              <input 
                type="tel" 
                name="phone" 
                required 
                class="w-full h-[60px] px-6 
                       bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl
                       text-white placeholder-white placeholder-opacity-70 
                       text-[16px] font-normal 
                       focus:outline-none 
                       focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                       focus:border-red-400"
                placeholder="Ваш телефон"
              >
              <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
            </div>
             <div class="mt-2 flex items-center gap-2">
                <input class="custom-checkbox-input w-4 h-4" checked type="checkbox" id="agree" />
                <label for="agree" class="text-xs text-gray-400">
                    Согласен с &nbsp;<a href="./privacyPolicy.html" class="text-[#FE7600] hover:underline">политикой обработки
                        персональных
                        данных</a>
                </label>
            </div>
          </form>
        </div>
      </div>

      <div class="w-full px-8 mt-6">
        <button 
          type="submit"
          form="order-car-form"
          class="w-full h-[84px] 
                 bg-[#FE7600] hover:bg-red-700 
                 text-black text-[24px] font-semibold 
                 rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          id="submit-order-car"
        >
          Оставить заявку на звонок! 
        </button>
      </div>
    `;
  }

  static getBackground() {
    return null;
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="w-[685px] bg-transparent rounded-xl overflow-hidden">
        <div class="text-white space-y-8 p-[40px] text-center">
          <svg class="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 class="text-[36px] font-bold leading-tight">Заявка успешно отправлена!</h3>
          <p class="text-[18px] text-gray-300 leading-relaxed">
            Наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      </div>

      <div class="w-full px-8 mt-6">
        <button 
          type="button"
          class="w-full h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-[24px] font-semibold 
                 rounded-2xl
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
    const form = modalElement.querySelector('#order-car-form');
    const submitBtn = modalElement.querySelector('#submit-order-car');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
    });
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

    const brandSelect = form.car_brand;
    if (!brandSelect.value) {
      this.showError(brandSelect, 'Выберите марку машины');
      isValid = false;
    }

    const modelSelect = form.car_model;
    if (!modelSelect.value) {
      this.showError(modelSelect, 'Выберите модель машины');
      isValid = false;
    }

    const privacyCheckbox = form.privacy_policy;
    if (!privacyCheckbox.checked) {
      const label = modalElement.querySelector('label[for="privacy-policy"]');
      const parent = label.parentElement;
      const errorDiv = parent.querySelector('.error-message');
      errorDiv.classList.remove('hidden');
      errorDiv.textContent = 'Необходимо согласие с политикой';
      isValid = false;
    }

    if (isValid) {
      setTimeout(() => {
        modalElement.innerHTML = this.getSuccessTemplate();

        modalElement.querySelector('#close-success-modal').addEventListener('click', () => {
          const modal = modalElement.closest('.modal');
          if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
          }
        });
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