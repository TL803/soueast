import { CashBack } from "./templates/CashBack.js"
import { RequestАСall } from "./templates/RequestАСall.js"
import { OrderSelectedCar } from "../modals/templates/OrderSelectedCar.js"
export class PopupFactory {
  static createModal(modalType) {
    const modalConfig = this.getModalConfig(modalType);

    if (!modalConfig) {
      throw new Error(`Не найдена конфигурация для модалки: ${modalType}`);
    }

    const template = modalConfig.getTemplate();
    const background = modalConfig.getBackground();

    return {
      template: template,
      background: background
    };
  }

  static getModalConfig(type) {
    switch (type) {
      case 'order-car':
        return RequestАСall;
      case 'leasing':
        return CashBack;
      case 'order-selected-car':
        return OrderSelectedCar;
      default:
        return null;
    }
  }
}