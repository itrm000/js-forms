$(document).ready(function(){
	var commentFormCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');
		var _commentTextarea = $('#commentText');
		var _commentErrorEmpty = $('#commentErrorEmpty');
		// var _commentTextareaTrim = _commentTextarea.val().trim();
		// var _commentTextareaSubstring = _commentTextareaTrim.substring(0, 10);
	
			// Метод инициализации (запуска) модуля
		var init = function(){
                             // Запускаем модули которые должны стартовать при запуске модуля
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}

		// Приватные методы
    	var _formValidate = function (event) {
    		// event.preventDefault();
    		// console.log(_commentTextareaSubstring.val());
    		// console.log(_commentTextarea.val().trim());
    		console.log('Hello from _formValidation()');
    		if ( _commentTextarea.val().trim() == '' ){
    			_commentErrorEmpty.fadeIn(500);
    			event.preventDefault();
    		} else {
    			_commentErrorEmpty.fadeOut(500);
    			// $('form').unbind('submit').submit();
    		}
    		if (_commentTextarea.val().trim().length>10) {
    			_commentTextarea.val().trim().substring(0, 20);
    			console.log(_commentTextarea.val().trim().substring(0, 20));
    		}
    		
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentFormCheck.init();

});