'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var CLOAK_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_SETTINGS = [
  {
    name: getRandomName(WIZARD_NAMES) + ' ' + getRandomSurname(WIZARD_SURNAMES),
    coatColor: getCloakColor(CLOAK_COLOR),
    eyesColor: getEyesColor(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_NAMES) + ' ' + getRandomSurname(WIZARD_SURNAMES),
    coatColor: getCloakColor(CLOAK_COLOR),
    eyesColor: getEyesColor(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_NAMES) + ' ' + getRandomSurname(WIZARD_SURNAMES),
    coatColor: getCloakColor(CLOAK_COLOR),
    eyesColor: getEyesColor(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_NAMES) + ' ' + getRandomSurname(WIZARD_SURNAMES),
    coatColor: getCloakColor(CLOAK_COLOR),
    eyesColor: getEyesColor(WIZARD_EYES_COLOR)
  },
];

var showSettingsWindow = document.querySelector('.setup');
var wizardsListWrapper = document.querySelector('.setup-similar');
var showWizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var shadowFragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_SETTINGS.length; i++) {
  shadowFragment.appendChild(renderWizard(WIZARDS_SETTINGS[i]));
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

/**
 * Функция возвращает рандомное имя
 * @param {[]} arrayNames передаём в функцию массив допустимых имён волшебников
 * @return {string} функция возвращает рандомное имя
 */
function getRandomName(arrayNames) {
  var randomNumber = Math.floor(Math.random() * arrayNames.length);
  return arrayNames[randomNumber];
}

/**
 * Функция возвращает рандомную фамилию
 * @param {[]} arraySurnames передаём в функцию массив допустимых фамилий волшебников
 * @return {string} функция возвращает рандомную фамилию
 */
function getRandomSurname(arraySurnames) {
  var randomNumber = Math.floor(Math.random() * arraySurnames.length);
  return arraySurnames[randomNumber];
}

/**
 * Функция возвращает рандомный цвет плаща
 * @param {[]} arrayCloakColors передаём в функцию массив допустимых цветов плаща для волшебника
 * @return {string} функция возвращает рандомный цвет из массива
 */
function getCloakColor(arrayCloakColors) {
  var randomNumber = Math.floor(Math.random() * arrayCloakColors.length);
  return arrayCloakColors[randomNumber];
}

/**
 * Функция возвращает рандомный цвет глаз волшебника
 * @param {[]} arrayEyesColor передаём в функцию массив допустимых цветов глаз для волшебника
 * @return {string} функция возвращает рандомный цвет глаз из массива
 */
function getEyesColor(arrayEyesColor) {
  var randomNumber = Math.floor(Math.random() * arrayEyesColor.length);
  return arrayEyesColor[randomNumber];
}

showWizardsList.appendChild(shadowFragment);

showHiddenElements();

/**
 * Функция проверяет и удаляет у целевых блоков (окно настроек и список волшебников) класс hidden при его наличии
 */
function showHiddenElements() {
  if (showSettingsWindow.classList.contains('hidden') === true) {
    showSettingsWindow.classList.remove('hidden');
  }

  if (wizardsListWrapper.classList.contains('hidden') === true) {
    wizardsListWrapper.classList.remove('hidden');
  }
}
