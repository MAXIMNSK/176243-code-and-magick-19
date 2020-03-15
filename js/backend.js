'use strict';

// получение данных с сервера
(function () {
  var BODY = document.querySelector('body');
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var TIMEOUT = 5000;

  var countWizards = 4;
  var shadowFragment = document.createDocumentFragment();
  var showWizardsList = document.querySelector('.setup-similar-list');
  var errorMessage = document.createElement('div');
  errorMessage.style.position = 'absolute';
  errorMessage.style.zIndex = 1;
  errorMessage.style.width = '100%';
  errorMessage.style.color = 'white';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.backgroundColor = 'red';

  (function () {
    window.load = function (onLoad, onError, onTimeOut) {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.addEventListener('error', function () {
        onError(xhr.status);
      });

      xhr.addEventListener('timeout', function () {
        onTimeOut();
      });

      xhr.responseType = 'json';
      xhr.timeout = TIMEOUT;
      xhr.open('GET', URL);
      xhr.send();
    };
  })();

  window.load(function (xhr) {
    for (var i = 0; i < countWizards; i++) {
      shadowFragment.appendChild(window.renderWizard.render(xhr[i]));
    }

    showWizardsList.appendChild(shadowFragment);
  }, function (code) {
    var REDIRECTION = 300;
    var CLIENT_ERROR = 400;
    var SERVER_ERROR = 500;

    errorMessage.textContent = 'Код ошибки: ' + code;

    switch (true) {
      case code >= REDIRECTION && code < CLIENT_ERROR:
        errorMessage.textContent = 'Перенаправление ' + code;
        BODY.prepend(errorMessage);
        break;

      case code >= CLIENT_ERROR && code < SERVER_ERROR:
        BODY.prepend(errorMessage);
        break;

      case code >= SERVER_ERROR:
        BODY.prepend(errorMessage);
        break;

      default:
        errorMessage.textContent = 'Неизвестная ошибка ' + code;
        BODY.prepend(errorMessage);
        break;
    }
  }, function () {
    errorMessage.textContent = 'Срок жизни запроса истёк';
    BODY.prepend(errorMessage);
  });

  window.backend = {
    error: errorMessage,
  };
})();

// отправка формы на сервер
// составление запроса и отправка информации на сервер
(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.save = function (dataForSend, sendingSuccess, sendingError) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      sendingSuccess();
    });

    xhr.addEventListener('error', function () {
      sendingError(xhr.status);
    });

    xhr.responseType = 'json';
    xhr.open('POST', URL);
    xhr.send(dataForSend);
  };
})();

// инициатор отправки формы на сервер
(function () {
  var BODY = document.querySelector('body');

  var settingsWindow = document.querySelector('.setup');
  var formWizardSettings = document.querySelector('.setup-wizard-form');
  // создаём объект который будет предоставлять данные HTML формы с помощью функции конструктора FormData()
  var targetSendingForm = new FormData(formWizardSettings);

  /**
   * Функция скрывает окно настроек волшебника добавляя класс hidden
   */
  function ifSendingSuccess() {
    settingsWindow.classList.add('hidden');
  }

  function ifSendingError(status) {
    var errorMessage = window.backend.error;
    errorMessage.textContent = 'Произошла ошибка отправки формы на сервер ' + status;
    BODY.prepend(errorMessage);
  }

  // при отправке формы обращаемся к функции save, где первым аргуметом передаём целевую форму отправки, а вторым аргументом передаём функцию к которой будет обращение если отправка в дальнейшем пройдёт успешно
  formWizardSettings.addEventListener('submit', function (evt) {
    window.save(targetSendingForm, ifSendingSuccess, ifSendingError);
    // отменяем действие по умолчанию что бы перезагружалась только часть страницы
    evt.preventDefault();
  });
})();
