(function () {
	'use strict';

	class addNewShow {

		/**
		* Конструктор класс addNewShow
		* @parm {Object} options
		*/
		constructor (options) {
      this.parent = document.querySelector('.app');
			this._initEvents();
			this.render();
		}

		render () {

      let div = document.createElement('div');
      div.classList.add('tvshow', 'add');
      div.innerHTML = `<input type="text" id="title" placeholder="Название">
                      <input type="url" id="title" placeholder="Обложка">
                      <div class="button">Добавить новый сериал</div>`;

      this.parent.appendChild(div);
		}

		/**
		* Установка обработчиков событий
		*/
		_initEvents () {
			//this.el.addEventListener('click', this._onCLick.bind(this));
		}

		/**
		* Обработчик удаления
		* @param {MouseEvent} event
		*/
		_onCLick (event) {
			event.preventDefault();
			let target = event.target;

			if (target.classList.contains('button')) {
				target.parentNode.remove(target.parentNode);
			}
		}
	}

	window.addNewShow = addNewShow;

})();
