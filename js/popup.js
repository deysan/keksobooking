'use strict';

(function () {

  // Вывод всплывающего окна

  var mainElement = document.querySelector('main');
  var successTemplate = document.querySelector('#success');
  var errorTemplate = document.querySelector('#error');

  var onSuccess = function () {
    var fragment = document.createDocumentFragment();
    var successElement = successTemplate.content.querySelector('.success');

    fragment.appendChild(successElement);
    mainElement.appendChild(fragment);

    document.addEventListener('keydown', removePopup);
    document.addEventListener('mousedown', removePopup);
  };

  var onError = function () {
    var fragment = document.createDocumentFragment();
    var errorElement = errorTemplate.content.querySelector('.error');

    fragment.appendChild(errorElement);
    mainElement.appendChild(fragment);

    errorButtonHandler();

    window.form.element.reset();

    document.addEventListener('keydown', removePopup);
    document.addEventListener('mousedown', removePopup);
  };

  var removePopup = function () {
    var popupSuccess = document.querySelector('.success');
    var popupError = document.querySelector('.error');

    if (popupSuccess) {
      popupSuccess.remove();
    } else if (popupError) {
      popupError.remove();
    }

    window.map.dectivate();
    window.form.element.reset();

    document.removeEventListener('keydown', removePopup);
    document.removeEventListener('mousedown', removePopup);
  };

  var errorButtonHandler = function () {
    var buttonError = document.querySelector('.error__button');

    buttonError.addEventListener('click', function (evt) {
      evt.preventDefault();
      removePopup();
    });

    buttonError.addEventListener('keydown', function (evt) {
      evt.preventDefault();

      if (evt.keyCode === window.util.ENTER_KEYCODE) {
        removePopup();
      }
    });

    window.pin.resetMapPosition();
  };

  window.popup = {
    onSuccess: onSuccess,
    onError: onError
  };

})();
