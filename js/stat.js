'use strict';
// номинальная ширина и высота окна статистики
var TOTAL_WIDTH = 500;
var TOTAL_HEIGHT = 250;
// номинальная ширина и высота свечи
var GISTAGRAMM_BAR_WIDTH = 60;
var GISTAGRAMM_BAR_HEIGHT = -1;
// начальное положение свечи в окне статистики по оси X и Y
var GISTAGRAMM_BAR_POSITION_X = 140;
var GISTAGRAMM_BAR_POSITION_Y = 239;
// начальное положение имени участника в окне статистики по оси X и Y
var START_TEXT_POSITION_X = 150;
var START_TEXT_POSITION_Y = 50;
// шаг между элементами (расстановка между именами по горизонтали и свечами по горизонтали)
var STEP_BETWEEN_ELEMENTS = 120;

/* eslint-disable valid-jsdoc */
/**
 * Функция рендерит окно статистики и тень (опционально)
 *
 * @param ctx - API для отрисовки графических элементов и заливки цветом методами canvas
 * x {number} position x - позиционирование элемента по оси x
 * y {number} position y - позиционирование элемента по оси y
 * color {string} - указываем цвет заливки элемента
 */
function getRectBanner(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, TOTAL_WIDTH, TOTAL_HEIGHT);
}

/**
 * Функция возвращает рандомный цвет для перекраски элемента
 *
 * @return {string} color - возвращает цвет выбранный из массива с помощью генератора случайных чисел
 */
function getRandomColor() {
  var colorPlayers = ['red', 'darkorange', 'yellow', 'green', 'skyblue', 'blue', 'darkviolet'];
  var random = Math.floor(Math.random() * colorPlayers.length);
  return colorPlayers[random];
}

/**
 * Функция возвращает максимальное значение времени
 *
 * @param timesArray {array} - массив передаваемый в функцию для вычисления максимального временного значения
 * @return {number} time - возвращаем максимальное значение времени найденное в передаваемом массиве
function getMaxTimeResult(timesArray) {
  var orderedArray = timesArray.sort().reverse();
  var maxTimeIndexContent = orderedArray[0];
  return maxTimeIndexContent;
}
 */

window.renderStatistics = function (ctx, players, times) {
  // var maxTime = getMaxTimeResult(times);
  // вызываем функция для отрисовки тени (нижний слой)
  getRectBanner(ctx, 105, 5, 'rgba(0, 0, 0, 0.5)');

  // вызываем функцию для отрисовки элемента (окна статистики)
  getRectBanner(ctx, 100, 0, '#2a2a2e');

  // отрисовываем декоративную внутреннюю рамку (опционально)
  ctx.strokeStyle = '#ffffff';
  ctx.strokeRect(110, 10, 480, 230);

  // цикл создаёт пару: имя + свечку, красит в рандомно прилетающий цвет по запросу к функции
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.fillText(players[i], START_TEXT_POSITION_X + STEP_BETWEEN_ELEMENTS * i, START_TEXT_POSITION_Y);
    ctx.fillRect(GISTAGRAMM_BAR_POSITION_X + STEP_BETWEEN_ELEMENTS * i, GISTAGRAMM_BAR_POSITION_Y, GISTAGRAMM_BAR_WIDTH, (GISTAGRAMM_BAR_HEIGHT * times[i]) / 17);
  }
};
