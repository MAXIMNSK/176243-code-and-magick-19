'use strict';

(function () {
  var sendFormBtn = document.querySelector('.setup-submit');
  var formWizardSettings = document.querySelector('.setup-wizard-form');

  /**
   * Функция-обработчик отправляет форму на сервер при клике на кнопку "сохранить" (отсутствует атрибут submit в разметке у кнопки)
   */
  function onSendFormClick() {
    formWizardSettings.submit();
  }

  /**
   * Функция-обработчик отправляет форму на сервер если кнопка "сохранить" в фокусе и была нажата кнопка enter
   * @param {*} evt событие передаваемое в функцию по умолчанию JSом
   */
  function onSendFormKeypress(evt) {
    if (document.activeElement === sendFormBtn && evt.keyCode === window.utility.pressEnter) {
      formWizardSettings.submit();
    }
  }

  sendFormBtn.addEventListener('click', onSendFormClick);
  sendFormBtn.addEventListener('keydown', onSendFormKeypress);
})();
