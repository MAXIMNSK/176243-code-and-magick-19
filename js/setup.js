'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var CLOAK_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var countWizards = 4;
var wizardsSettings = [];

var showSettingsWindow = document.querySelector('.setup');
var wizardsListWrapper = document.querySelector('.setup-similar');
var showWizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var shadowFragment = document.createDocumentFragment();

for (var i = 0; i < countWizards; i++) {
  wizardsSettings.push(getNewWizard());
}

for (var x = 0; x < wizardsSettings.length; x++) {
  shadowFragment.appendChild(renderWizard(wizardsSettings[x]));
}

/**
 * Функция возвращает объект, с присвоенными значениями свойствам
 * @return {Object} функция возвращает объект
 */
function getNewWizard() {
  return {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES.length)],
    coatColor: CLOAK_COLOR[getRandomNumber(CLOAK_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomNumber(WIZARD_EYES_COLOR.length)]
  };
}

/**
 * Функция возвращает рандомное число в зависимости от длины передаваемого в неё массива
 * @param {number} arrLength передаём в функцию длину массива
 * @return {number} функция возвращает рандомное число (в дальнейшем индекс массива)
 */
function getRandomNumber(arrLength) {
  var randomNumber = Math.floor(Math.random() * arrLength);
  return randomNumber;
}

/**
 * Функция клонирует шаблон мага со всем содержимым, и задаёт свойства этому клону (текст, заливка)
 * @param {Object} wizardParameters передаём в функцию объект с настройками мага
 * @return {*} возвращает узел-клон с добавленными настройками мага
 */
function renderWizard(wizardParameters) {
  var wizardItemClone = wizardTemplate.cloneNode(true);
  wizardItemClone.querySelector('.setup-similar-label').textContent = wizardParameters.name;
  wizardItemClone.querySelector('.wizard-eyes').style.fill = wizardParameters.eyesColor;
  wizardItemClone.querySelector('.wizard-coat').style.fill = wizardParameters.coatColor;
  return wizardItemClone;
}

showWizardsList.appendChild(shadowFragment);

showHiddenElements();

/**
 * Функция проверяет и удаляет у целевых блоков (окно настроек и список волшебников) класс hidden при его наличии
 */
function showHiddenElements() {
  showSettingsWindow.classList.toggle('hidden');
  wizardsListWrapper.classList.toggle('hidden');
}
