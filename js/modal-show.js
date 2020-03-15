'use strict';

// modal-show module
(function () {
  var settingsCaller = document.querySelector('.setup-open');
  var avatar = document.querySelector('.setup-open-icon');
  var settingsWindow = document.querySelector('.setup');

  /**
   * Функция показывает окно настроек персонажа при клике на инициатор. Так же задаёт координаты по умолчанию для оного
   */
  function onBtnClick() {
    settingsWindow.classList.toggle('hidden');
    setDefaultCoordinates();
  }

  /**
   * Функция-обработчик показывает окно настроек персонажа при фокусе инициатора и нажатии enter. Так же задаёт координаты по умолчанию для оного
   * @param {*} evt событие передаваемое в функцию по умолчанию JSом
   */
  function onAvatarKeypress(evt) {
    if (evt.keyCode === window.utility.pressEnter) {
      settingsWindow.classList.toggle('hidden');
    }

    setDefaultCoordinates();
  }

  /**
   * Функция сбрасывает координаты на значение по умолчанию при открытии модального окна, и экспортирует значение в модуль utility в случае если это первое открытие модалки
   */
  function setDefaultCoordinates() {
    if (window.utility.coordinates.x === null || window.utility.coordinates.y === null) {
      window.utility.coordinates.x = settingsWindow.offsetLeft + 'px';
      window.utility.coordinates.y = settingsWindow.offsetTop + 'px';
    }

    settingsWindow.style.left = window.utility.coordinates.x;
    settingsWindow.style.top = window.utility.coordinates.y;
  }

  settingsCaller.addEventListener('click', onBtnClick);
  avatar.addEventListener('keydown', onAvatarKeypress);
})();
