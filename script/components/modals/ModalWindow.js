import { DomUtils } from './utils/DomUtils.js';

export class ModalWindow {
  constructor(modalContent, backgroundImage = null) {
    let template;
    let background;
    
    if (typeof modalContent === 'object' && modalContent !== null) {
      template = modalContent.template;
      background = modalContent.background || backgroundImage;
    } else if (typeof modalContent === 'string') {
      template = modalContent;
      background = backgroundImage;
    } else {
      console.error('Invalid modalContent:', modalContent);
      template = '<div>Ошибка загрузки контента</div>';
      background = backgroundImage;
    }
    
    const bgStyle = background 
      ? `background-image: url('${background}'); background-position: 100% center; background-size: cover;` 
      : `background: #170D08;`;

    this.element = DomUtils.createElement('div', `
      relative 
      w-full max-w-[95vw] md:max-w-[1440px]
      h-[600px] md:h-[800px] 
      max-h-[90vh] md:max-h-none
      overflow-y-auto
      rounded-lg md:rounded-xl 
      shadow-2xl
      p-4 md:p-6
      bg-cover bg-center bg-no-repeat
      before:content-[''] 
      before:absolute 
      before:inset-0 
      before:bg-black 
      before:bg-opacity-70 
      before:rounded-lg md:before:rounded-xl 
      before:-z-10
      bg-bottom
      mx-auto
      mt-4 md:mt-0
    `, {
      style: bgStyle
    });

    const closeBtn = DomUtils.createElement('button', `
      absolute top-2 right-2 md:top-4 md:right-4
      w-10 h-10 md:w-12 md:h-12
      flex items-center justify-center
      rounded-full
      bg-transparent
      hover:bg-black
      hover:bg-opacity-10
      transition-all duration-200
      transform hover:scale-110
      z-10
      focus:outline-none
      focus:ring-2 focus:ring-white focus:ring-opacity-30
      cursor-pointer

      /* Увеличиваем кликабельную зону */
      after:content-['']
      after:absolute
      after:inset-[-12px] md:after:inset-[-16px]
      after:w-[46px] md:after:w-[60px]
      after:h-[46px] md:after:h-[60px]
      after:-z-10
    `, { 
      'aria-label': 'Закрыть' 
    });

    const closeIcon = DomUtils.createElement('img', '', {
      src: '../assets/cross.svg',
      alt: 'Закрыть',
      width: '24',
      height: '24',
      style: 'pointer-events: none; z-index: 20;'
    });

    // Адаптивные размеры для иконки
    closeIcon.classList.add('w-6', 'h-6', 'md:w-8', 'md:h-8');
    
    closeBtn.appendChild(closeIcon);

    // Обработчик закрытия
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    });

    const contentWrapper = DomUtils.createElement('div', `
      relative z-1 text-white h-full flex flex-col justify-center
      px-2 md:px-0
      overflow-auto
    `);
    
    if (template) {
      contentWrapper.innerHTML = template;
    } else {
      contentWrapper.innerHTML = '<div>Контент не загружен</div>';
      console.error('Template is undefined:', modalContent);
    }

    DomUtils.appendChildren(this.element, [closeBtn, contentWrapper]);

    this.closeBtn = closeBtn;
  }

  setOnClose(callback) {
    this.onClose = callback;
  }
}