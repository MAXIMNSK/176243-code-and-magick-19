'use strict';

(function () {
  var initiatorForMove = document.querySelector('.upload');
  var settingsWindow = document.querySelector('.setup');

  initiatorForMove.addEventListener('mousedown', function (evt) {
    // начальные координаты от которых будем вычитать новые
    var coordinatesStart = {
      startX: evt.clientX,
      startY: evt.clientY,
    };

    // флаг отвечает за статус объекта - было перемещено окно или нет
    var rePosition = false;

    /**
     * Функция отвечает за перемещение элемента-окна
     * @param {*} evtMove событие передаваемое в функцию
     */
    function onMouseMove(evtMove) {
      // новые координаты перемещение на 1 пиксель
      var relocate = {
        x: coordinatesStart.startX - evtMove.clientX,
        y: coordinatesStart.startY - evtMove.clientY,
      };

      // перезаписываем прежние координаты
      coordinatesStart = {
        startX: evtMove.clientX,
        startY: evtMove.clientY,
      };

      // меняем стили для целевого элемента который перемещаем
      settingsWindow.style.top = (settingsWindow.offsetTop - relocate.y) + 'px';
      settingsWindow.style.left = (settingsWindow.offsetLeft - relocate.x) + 'px';

      rePosition = true;
    }

    /**
     * Функция удаляет слушатели событий у document, когда ЛКМ была отпущена
     */
    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      /**
       * Функция изменяет действие по умолчанию (по умолчанию открывается окно с загрузкой файла) и удаляет слушателя событий вызывающего данную функцию по клику на целевой элемент
       * @param {*} evtMouseUp событие передаваемое в функцию, для сброса действия по умолчанию
       */
      function cancelEventDefault(evtMouseUp) {
        evtMouseUp.preventDefault();
        initiatorForMove.removeEventListener('click', cancelEventDefault);
      }

      // если было произведено перемещение окна, то вешаем обработчик событий на инициатор движения целевого окна
      if (rePosition === true) {
        initiatorForMove.addEventListener('click', cancelEventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
