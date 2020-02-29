'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var CLOAK_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var BTN_ESC_CODE = 27;
var BTN_ENTER_CODE = 13;

var countWizards = 4;
var wizardsSettings = [];
var settingsWindow = document.querySelector('.setup');
var wizardsListWrapper = document.querySelector('.setup-similar');
var showWizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var shadowFragment = document.createDocumentFragment();
var settingsCaller = document.querySelector('.setup-open');
var avatar = document.querySelector('.setup-open-icon');
var closerSettings = document.querySelector('.setup-close');
var sendFormBtn = document.querySelector('.setup-submit');
var formWizardSettings = document.querySelector('.setup-wizard-form');
var formWizardNameArea = document.querySelector('.setup-user-name');
var wizardRobe = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

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
  settingsWindow.classList.toggle('hidden');
  wizardsListWrapper.classList.toggle('hidden');
}

/**
 * Функция-обработчик показывает окно настроек персонажа
 */
function onBtnClick() {
  settingsWindow.classList.remove('hidden');
}

/**
 * Функция-обработчик показывает окно настроек персонажа при фокусе инициатора и нажатии enter
 * @param {*} evt событие передаваемое в функцию по умолчанию JSом
 */
function onAvatarKeypress(evt) {
  if (evt.keyCode === BTN_ENTER_CODE) {
    settingsWindow.classList.remove('hidden');
  }
}

/**
 * Функция-обработчик скрывает окно настроек персонажа при клике на кнопку закрытия
 */
function onSettingsCloserClick() {
  settingsWindow.classList.add('hidden');
}

/**
 * Функция-обработчик скрывает окно настроек персонажа при условии: нажата кнопка esc когда на поле ввода имени персонажа не было фокуса. Или: при кнопке закрытия окна настроек находящейся в фокусе мы нажимаем enter
 * @param {*} evt событие передаваемое в функцию по умолчанию JSом
 */
function onDocumentKeypress(evt) {
  if (evt.keyCode === BTN_ESC_CODE && document.activeElement !== formWizardNameArea) {
    settingsWindow.classList.add('hidden');
  }

  if (document.activeElement === closerSettings && evt.keyCode === BTN_ENTER_CODE) {
    settingsWindow.classList.add('hidden');
  }
}

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
  if (document.activeElement === sendFormBtn && evt.keyCode === BTN_ENTER_CODE) {
    formWizardSettings.submit();
  }
}

/**
 * Функция-обработчик изменяет цвет робы при клике на оную (свойство fill получает рандомный элемент из константы CLOAK_COLOR)
 */
function onRobeClick() {
  wizardRobe.style.fill = CLOAK_COLOR[getRandomNumber(CLOAK_COLOR.length)];
}

/**
 * Функция-обработчик изменяет цвет глаз при клике на них (свойство fill получает рандомный элемент из константы WIZARD_EYES_COLOR)
 */
function onEyesClick() {
  wizardEyes.style.fill = WIZARD_EYES_COLOR[getRandomNumber(WIZARD_EYES_COLOR.length)];
}

/**
 * Функция-обработчик изменяет цвет файрболла при клике на него (свойство backgroundColor получает рандомный цвет из константы FIREBALL_COLORS)
 */
function onFireballClick() {
  fireball.style.backgroundColor = FIREBALL_COLORS[getRandomNumber(FIREBALL_COLORS.length)];
}

settingsCaller.addEventListener('click', onBtnClick);
avatar.addEventListener('keydown', onAvatarKeypress);
closerSettings.addEventListener('click', onSettingsCloserClick);
document.addEventListener('keydown', onDocumentKeypress);
sendFormBtn.addEventListener('click', onSendFormClick);
sendFormBtn.addEventListener('keydown', onSendFormKeypress);
wizardRobe.addEventListener('click', onRobeClick);
wizardEyes.addEventListener('click', onEyesClick);
fireball.addEventListener('click', onFireballClick);
