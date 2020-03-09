'use strict';

// modal-hide module
(function () {
  var settingsWindow = document.querySelector('.setup');
  var closerSettings = document.querySelector('.setup-close');
  var formWizardNameArea = document.querySelector('.setup-user-name');

  /**
   * Функция-обработчик скрывает окно настроек персонажа при клике на кнопку закрытия
   */
  function onSettingsCloserClick() {
    settingsWindow.classList.toggle('hidden');
  }

  /**
   * Функция-обработчик скрывает окно настроек персонажа при условии: нажата кнопка esc когда на поле ввода имени персонажа не было фокуса. Или: при кнопке закрытия окна настроек находящейся в фокусе мы нажимаем enter
   * @param {*} evt событие передаваемое в функцию по умолчанию JSом
   */
  function onDocumentKeypress(evt) {
    if (evt.keyCode === window.utility.pressEsc && document.activeElement !== formWizardNameArea) {
      settingsWindow.classList.toggle('hidden');
    }

    if (document.activeElement === closerSettings && evt.keyCode === window.utility.pressEnter) {
      settingsWindow.classList.toggle('hidden');
    }
  }

  closerSettings.addEventListener('click', onSettingsCloserClick);
  document.addEventListener('keydown', onDocumentKeypress);
})();
