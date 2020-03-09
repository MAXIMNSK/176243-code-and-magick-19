'use strict';

// utility module
(function () {
  var BTN_ESC_CODE = 27;
  var BTN_ENTER_CODE = 13;
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var CLOAK_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  /**
   * Функция возвращает рандомное число в зависимости от длины передаваемого в неё массива
   * @param {number} transferNumber передаём в функцию длину массива
   * @return {number} функция возвращает рандомное число (в дальнейшем индекс массива)
   */

  function randomNumber(transferNumber) {
    return Math.floor(Math.random() * transferNumber);
  }

  window.utility = {
    getRandomNumber: randomNumber,
    pressEnter: BTN_ENTER_CODE,
    pressEsc: BTN_ESC_CODE,
    colorEyes: WIZARD_EYES_COLOR,
    colorCloak: CLOAK_COLOR,
    colorFireball: FIREBALL_COLORS,
  };
})();
