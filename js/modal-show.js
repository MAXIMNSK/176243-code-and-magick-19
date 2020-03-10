'use strict';

// modal-show module
(function () {
  var settingsCaller = document.querySelector('.setup-open');
  var avatar = document.querySelector('.setup-open-icon');
  var settingsWindow = document.querySelector('.setup');
  var defaultCoordinates = {
    x: null,
    y: null,
  };

  /**
   * Функция проверяет на null и назначнает координаты по умолчанию (значения записывается из положения при первом вызове окна). Так же функция сбрасывает положение окна при следующем вызове, если ранее окно было смещено относительно положения по умолчанию.
   */
  function setDefaultCoordinates() {
    if (defaultCoordinates.x === null || defaultCoordinates.y === null) {
      defaultCoordinates.x = settingsWindow.offsetLeft + 'px';
      defaultCoordinates.y = settingsWindow.offsetTop + 'px';
    }

    if (window.utility.positionChange === true) {
      settingsWindow.style.left = defaultCoordinates.x;
      settingsWindow.style.top = defaultCoordinates.y;
    }
  }

  /**
   * Функция показывает окно настроек персонажа при клике на инициатор
   */
  function onBtnClick() {
    settingsWindow.classList.toggle('hidden');
    setDefaultCoordinates();
  }

  /**
   * Функция-обработчик показывает окно настроек персонажа при фокусе инициатора и нажатии enter
   * @param {*} evt событие передаваемое в функцию по умолчанию JSом
   */
  function onAvatarKeypress(evt) {
    if (evt.keyCode === window.utility.pressEnter) {
      settingsWindow.classList.toggle('hidden');
    }
    setDefaultCoordinates();
  }

  settingsCaller.addEventListener('click', onBtnClick);
  avatar.addEventListener('keydown', onAvatarKeypress);
})();
