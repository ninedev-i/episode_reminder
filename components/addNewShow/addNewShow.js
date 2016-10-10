(function () {
	'use strict';

	class addNewShow {
		/**
		* Конструктор класс addNewShow
		* @parm {Object} options
		*/
		constructor (options) {
			this.el = document.querySelector('.app');
			this._initEvents();
			this.render();
		}

		render () {
      let addBlock = document.createElement('div');
      addBlock.className = 'tvshow add';
      addBlock.innerHTML = `<form class='addNewShow'>
															<input type='text' name='title' placeholder='Название сериала' />
	                            <input type='text' name='link' placeholder='Ссылка' />
	                            <input type='text' name='cover' placeholder='Обложка' />
	                            <button type='submit' class='addBlock' name='submit' />Добавить сериал</button>
														</form>`;

      this.el.appendChild(addBlock);
		}

		/**
		* Установка обработчиков событий
		*/
		_initEvents () {
			this.el.addEventListener('click', this._onCLick.bind(this));
		}

		/**
		* Обработчик добавления нового сериала
		* @param {MouseEvent} event
		*/
		_onCLick (event) {

			let addTarget = event.target;

			if (addTarget.classList.contains('addBlock')) {
				event.preventDefault();
				let show3 = new TVshow({
					data: {
						title: document.getElementsByName('title')[0].value || 'Название сериала',
						link: document.getElementsByName('link')[0].value,
						cover: document.getElementsByName('cover')[0].value || 'https://st.kp.yandex.net/images/movies/poster_none.png',
						items: [ ]
					}
				});

				document.querySelector('.addNewShow').reset();
			}
		}
	}

	window.addNewShow = addNewShow;

})();
