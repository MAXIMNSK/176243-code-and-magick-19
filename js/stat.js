'use strict';

/**
 * @constant
 * @type {number} задаёт номинальное значение для окна статистики
 */
var TOTAL_WIDTH = 420;
/**
 * @constant
 * @type {number} задаёт номинальное значение для окна статистики
 */
var TOTAL_HEIGHT = 270;
/**
 * @constant
 * @type {number} задаёт номинальное значение ширины свечи
 */
var GISTAGRAMM_BAR_WIDTH = 40;
/**
 * @constant
 * @type {number} задаёт номинальное значение высоты свечи
 */
var GISTAGRAMM_BAR_HEIGHT = -1;
/**
 * @constant
 * @type {number} задаёт начальное положение свечи по оси X
 */
var GISTAGRAMM_BAR_POSITION_X = 155;
/**
 * @constant
 * @type {number} задаёт начальное положение свечи по оси Y
 */
var GISTAGRAMM_BAR_POSITION_Y = 230;
/**
 * @constant
 * @type {number} задаёт начальное положение текста по оси X
 */
var START_TEXT_POSITION_X = 155;
/**
 * @constant
 * @type {number} задаёт начальное положение текста по оси Y
 */
var START_TEXT_POSITION_Y = 250;
/**
 * @constant
 * @type {number} задаёт отступы между текстом и свечами
 */
var STEP_BETWEEN_ELEMENTS = 50;
/**
 * @constant
 * @type {number} разрыв для выравнивания элементов, а так же используется как коэффициент деления при рендере результатов и баров
 */
var GAP = 10;

/**
 * Функция рендерит окно статистики и/или тень
 * @param {object} ctx - API для отрисовки графических элементов и заливки цветом методами canvas
 * @param {number} x - позиционирование элемента по оси x
 * @param {number} y - позиционирование элемента по оси y
 * @param {string} color - указываем цвет заливки элемента
 */
function getRectBanner(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, TOTAL_WIDTH, TOTAL_HEIGHT);
}

/**
 * Функция возвращает сообщение-поздравление для победителя в окне статистики. Сообщению задаётся цвет, размер и шрифт.
 * @param {object} ctx - API для отрисовки графических элементов и заливки цветом методами canvas
 * @param {number} x - позиционирование элемента по оси x
 * @param {number} y - позиционирование элемента по оси y
 */
function getMessageForWinnver(ctx, x, y) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + (GAP * 2));
}

/**
 * Функция возвращает рандомный оттенок синего цвета
 * @return {number} возвращаем рандомное число от 1 до 100 округлённое до "нижней границы"
 */
function getRandomSaturation() {
  return Math.floor(Math.random() * 100 + 1);
}

/**
 * Функция для отрисовки окна статистики
 * @param {object} ctx - API для отрисовки графических элементов и заливки цветом методами canvas
 * @param {number} names - функция получает массив с именами участников
 * @param {number} times - функция получает массив со временем игры участников
 */
window.renderStatistics = function (ctx, names, times) {
  getRectBanner(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  getRectBanner(ctx, 100, 10, '#ffffff');
  getMessageForWinnver(ctx, 120, 40);

  /*
    цикл рендерит имя участника текстом, количество игрового времени участника текстом, бар/свечку
    бар отвечающий за наше время в игре окрашивается в красный цвет, другие свечки в синий (и его оттенки)
  */
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], (START_TEXT_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), START_TEXT_POSITION_Y);
      ctx.fillText(Math.round(times[i]), (GISTAGRAMM_BAR_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), GISTAGRAMM_BAR_POSITION_Y + (GISTAGRAMM_BAR_HEIGHT * times[i]) / (GAP * 2) - GAP);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect((GISTAGRAMM_BAR_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), GISTAGRAMM_BAR_POSITION_Y, GISTAGRAMM_BAR_WIDTH, (GISTAGRAMM_BAR_HEIGHT * times[i]) / (GAP * 2));
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], (START_TEXT_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), START_TEXT_POSITION_Y);
      ctx.fillText(Math.round(times[i]), (GISTAGRAMM_BAR_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), GISTAGRAMM_BAR_POSITION_Y + (GISTAGRAMM_BAR_HEIGHT * times[i]) / (GAP * 2) - GAP);
      ctx.fillStyle = 'hsl(240, 100%, ' + getRandomSaturation() + '%)';
      ctx.fillRect((GISTAGRAMM_BAR_POSITION_X + STEP_BETWEEN_ELEMENTS * i) + (i * GISTAGRAMM_BAR_WIDTH), GISTAGRAMM_BAR_POSITION_Y, GISTAGRAMM_BAR_WIDTH, (GISTAGRAMM_BAR_HEIGHT * times[i]) / (GAP * 2));
    }
  }
};
