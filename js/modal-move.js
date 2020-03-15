'use strict';

(function () {
  var initiatorForMove = document.querySelector('.upload');
  var settingsWindow = document.querySelector('.setup');
  // начальные координаты из которых будем вычитать новые
  var coordinatesStart = {
    startX: window.utility.coordinates.x,
    startY: window.utility.coordinates.y,
  };

  /**
   * При событии mouseDown мы обновляем значения объекта coordinatesStart и вешаем события на document
   * @param {*} evt событие передаваемое в функцию
   */
  function onMouseDown(evt) {
    // обновляем начальные координаты после нажатия кнопки лкм на элемент
    coordinatesStart = {
      startX: evt.clientX,
      startY: evt.clientY,
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  /**
   * Функция отвечает за перемещение элемента-окна
   * @param {*} evt событие передаваемое в функцию
   */
  function onMouseMove(evt) {
    // новые координаты смещенные на 1 пиксель
    var relocate = {
      x: coordinatesStart.startX - evt.clientX,
      y: coordinatesStart.startY - evt.clientY,
    };

    // перезаписываем прежние координаты при каждом изменении позиции окна, для дальнейшего перерасчёта
    coordinatesStart = {
      startX: evt.clientX,
      startY: evt.clientY,
    };

    // меняем стили для целевого элемента который перемещаем
    settingsWindow.style.top = (settingsWindow.offsetTop - relocate.y) + 'px';
    settingsWindow.style.left = (settingsWindow.offsetLeft - relocate.x) + 'px';
    // флаг отвечает за статус изменения положения окна
    window.utility.positionChange = true;
  }

  /**
   * Функция удаляет слушатели событий у document, когда ЛКМ была отпущена
   */
  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    // если до того как мы отпустили лкм, мы двигали окно, то вешаем обработчик событий на инициатор движения окна
    if (window.utility.positionChange === true) {
      initiatorForMove.addEventListener('click', cancelEventDefault);
    }
  }

  /**
   * Функция отменяет действие по умолчанию (что бы не открывалось окно с загрузкой файла) после изменения положения окна, и удаляет слушателя событий вызывающего данную функцию по клику на целевой элемент. Так же изменяем значение флага на false.
   * @param {*} evt событие передаваемое в функцию, для сброса действия по умолчанию
   */
  function cancelEventDefault(evt) {
    evt.preventDefault();
    initiatorForMove.removeEventListener('click', cancelEventDefault);
    window.utility.positionChange = false;
  }

  initiatorForMove.addEventListener('mousedown', onMouseDown);
})();
