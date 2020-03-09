'use strict';

// color change module
(function () {
  var wizardRobe = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  /**
   * Функция-обработчик изменяет цвет робы при клике на оную (свойство fill получает рандомный элемент из константы window.utility.colorCloak)
   */
  function onRobeClick() {
    wizardRobe.style.fill = window.utility.colorCloak[window.utility.getRandomNumber(window.utility.colorCloak.length)];
  }

  /**
   * Функция-обработчик изменяет цвет глаз при клике на них (свойство fill получает рандомный элемент из константы window.utility.colorEyes)
   */
  function onEyesClick() {
    wizardEyes.style.fill = window.utility.colorEyes[window.utility.getRandomNumber(window.utility.colorEyes.length)];
  }

  /**
   * Функция-обработчик изменяет цвет файрболла при клике на него (свойство backgroundColor получает рандомный цвет из константы window.utility.colorFireball)
   */
  function onFireballClick() {
    fireball.style.backgroundColor = window.utility.colorFireball[window.utility.getRandomNumber(window.utility.colorFireball.length)];
  }

  wizardRobe.addEventListener('click', onRobeClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
