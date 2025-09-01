export class CashBack {
  static getTemplate() {
    /* html */
    return `
      <div class="w-full max-w-[95vw] md:max-w-[685px] space-y-6 md:space-y-8 bg-transparent rounded-xl overflow-hidden flex flex-col md:flex-row justify-between">
        <div class="text-white space-y-6 md:space-y-8 p-4 sm:p-5 md:p-[20px] w-full">
            <p class="text-sm sm:text-base md:text-[20px] text-white text-center leading-relaxed md:leading-normal">
              Оставьте свои контакты — и наш менеджер свяжется с Вами для подтверждения и оформления кэшбэка
            </p>

          <form id="order-car-form" data-modal-form="order-car" class="space-y-6 md:space-y-10 mt-2 w-full">
            <div>
              <input 
                type="text" 
                name="full_name" 
                required 
                class="w-full h-10 sm:h-12 md:h-[60px] px-3 sm:px-4 md:px-6 
                       bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl 
                       text-white placeholder-white placeholder-opacity-70 
                       text-xs sm:text-sm md:text-[16px] font-normal 
                       focus:outline-none 
                       focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                       focus:border-red-400"
                placeholder="ФИО"
                minlength="2"
                maxlength="100"
              >
              <div class="error-message text-red-300 text-[10px] xs:text-xs sm:text-sm mt-1 hidden"></div>
            </div>

            <div>
              <input 
                type="tel" 
                name="phone" 
                required 
                class="w-full h-10 sm:h-12 md:h-[60px] px-3 sm:px-4 md:px-6 
                       bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl
                       text-white placeholder-white placeholder-opacity-70 
                       text-xs sm:text-sm md:text-[16px] font-normal 
                       focus:outline-none 
                       focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                       focus:border-red-400"
                placeholder="Ваш телефон"
              >
              <div class="error-message text-red-300 text-[10px] xs:text-xs sm:text-sm mt-1 hidden"></div>
            </div>
            
            <div class="mt-2 flex items-start gap-2">
              <input class="custom-checkbox-input w-3 h-3 sm:w-4 sm:h-4 mt-1" checked type="checkbox" id="agree" name="agree" />
              <label for="agree" class="text-[10px] xs:text-xs sm:text-sm text-gray-400 leading-tight">
                Согласен с &nbsp;
                <a href="./privacyPolicy.html" class="text-[#FE7600] hover:underline">
                  политикой обработки персональных данных
                </a>
              </label>
              <div class="error-message text-red-300 text-[10px] xs:text-xs sm:text-sm mt-1 hidden"></div>
            </div>

            <!-- Кнопка ПЕРЕМЕЩЕНА ВНУТРЬ формы -->
            <div class="w-full mt-4 md:mt-6">
              <button 
                type="submit"
                class="w-full h-12 sm:h-14 md:h-[84px] 
                       bg-[#FE7600] hover:bg-red-700 
                       text-black text-sm sm:text-base md:text-[24px] font-semibold 
                       rounded-lg sm:rounded-xl md:rounded-2xl
                       transition duration-200 
                       transform hover:scale-105 md:hover:scale-[1.01] 
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                id="submit-order-car"
              >
                Оставить заявку на звонок! 
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  static getBackground() {
    return '../assets/modals/Модалка _Кешбек_.png';
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="w-full max-w-[95vw] md:max-w-[685px] bg-transparent rounded-xl overflow-hidden">
        <div class="text-white space-y-4 md:space-y-8 p-4 sm:p-6 md:p-[40px] text-center">
          <svg class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 class="text-xl sm:text-2xl md:text-[36px] font-bold leading-tight">Заявка успешно отправлена!</h3>
          <p class="text-sm sm:text-base md:text-[18px] text-gray-300 leading-relaxed">
            Наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      </div>

      <div class="w-full px-4 sm:px-6 md:px-8 mt-4 md:mt-6">
        <button 
          type="button"
          class="w-full h-12 sm:h-14 md:h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-sm sm:text-base md:text-[24px] font-semibold 
                 rounded-lg sm:rounded-xl md:rounded-2xl
                 transition duration-200 
                 transform hover:scale-105 md:hover:scale-[1.01] 
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

    // Используем событие submit формы вместо click кнопки
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
    });

    // Также оставляем обработчик на кнопке для совместимости
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

    const agreeCheckbox = form.agree; // Теперь доступно через form.agree
    if (!agreeCheckbox.checked) {
      this.showError(agreeCheckbox, 'Необходимо согласие с политикой');
      isValid = false;
    }

    if (isValid) {
      setTimeout(() => {
        // Заменяем весь контент модального окна
        const modalContent = modalElement.closest('.modal-content');
        if (modalContent) {
          modalContent.innerHTML = this.getSuccessTemplate();
          
          modalContent.querySelector('#close-success-modal').addEventListener('click', () => {
            const modal = modalContent.closest('.modal');
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
    } else {
      // Создаем div для ошибки, если его нет
      const newErrorDiv = document.createElement('div');
      newErrorDiv.className = 'error-message text-red-300 text-[10px] xs:text-xs sm:text-sm mt-1';
      newErrorDiv.textContent = message;
      parent.appendChild(newErrorDiv);
    }
  }
}