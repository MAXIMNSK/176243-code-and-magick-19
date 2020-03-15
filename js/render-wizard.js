// 'use strict';

// // render wizard module
// (function () {
//   var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
//   var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

//   var countWizards = 4;
//   var wizardsSettings = [];
//   var shadowFragment = document.createDocumentFragment();
//   var showWizardsList = document.querySelector('.setup-similar-list');
//   var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//   for (var i = 0; i < countWizards; i++) {
//     wizardsSettings.push(getNewWizard());
//   }

//   for (var x = 0; x < wizardsSettings.length; x++) {
//     shadowFragment.appendChild(renderWizard(wizardsSettings[x]));
//   }

//   /**
//    * Функция возвращает объект, с присвоенными значениями свойствам
//    * @return {Object} функция возвращает объект
//    */
//   function getNewWizard() {
//     return {
//       name: WIZARD_NAMES[window.utility.getRandomNumber(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[window.utility.getRandomNumber(WIZARD_SURNAMES.length)],
//       coatColor: window.utility.colorCloak[window.utility.getRandomNumber(window.utility.colorCloak.length)],
//       eyesColor: window.utility.colorEyes[window.utility.getRandomNumber(window.utility.colorEyes.length)]
//     };
//   }

//   /**
//    * Функция клонирует шаблон мага со всем содержимым, и задаёт свойства этому клону (текст, заливка)
//    * @param {Object} wizardParameters передаём в функцию объект с настройками мага
//    * @return {*} возвращает узел-клон с добавленными настройками мага
//    */
//   function renderWizard(wizardParameters) {
//     var wizardItemClone = wizardTemplate.cloneNode(true);
//     wizardItemClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
//     wizardItemClone.querySelector('.wizard-eyes').style.fill = wizardParameters.eyesColor;
//     wizardItemClone.querySelector('.wizard-coat').style.fill = wizardParameters.coatColor;
//     return wizardItemClone;
//   }

//   showWizardsList.appendChild(shadowFragment);
// })();

'use strict';

// render wizard module
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /**
   * Функция клонирует шаблон мага со всем содержимым, и задаёт свойства этому клону (текст, заливка)
   * @param {Object} wizardParameters передаём в функцию объект с настройками мага
   * @return {*} возвращает узел-клон с добавленными настройками мага
   */
  function renderWizard(wizardParameters) {
    var wizardItemClone = wizardTemplate.cloneNode(true);
    wizardItemClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
    wizardItemClone.querySelector('.wizard-eyes').style.fill = wizardParameters.colorEyes;
    wizardItemClone.querySelector('.wizard-coat').style.fill = wizardParameters.colorCoat;
    return wizardItemClone;
  }

  window.renderWizard = {
    render: renderWizard,
  };
})();
