'use strict';

// modal-show module
(function () {
  var settingsCaller = document.querySelector('.setup-open');
  var avatar = document.querySelector('.setup-open-icon');
  var settingsWindow = document.querySelector('.setup');

  /**
   * Функция-обработчик показывает окно настроек персонажа
   */
  function onBtnClick() {
    settingsWindow.classList.toggle('hidden');
  }

  /**
   * Функция-обработчик показывает окно настроек персонажа при фокусе инициатора и нажатии enter
   * @param {*} evt событие передаваемое в функцию по умолчанию JSом
   */
  function onAvatarKeypress(evt) {
    if (evt.keyCode === window.utility.pressEnter) {
      settingsWindow.classList.toggle('hidden');
    }
  }

  settingsCaller.addEventListener('click', onBtnClick);
  avatar.addEventListener('keydown', onAvatarKeypress);
})();
