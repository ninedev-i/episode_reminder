(function () {
	'use strict';

	class TVshow {

		/**
		* Конструктор класс TVshow
		* @parm {Object} options
		*/
		constructor (options) {
			this.el = options.el;
			this.data = options.data;
			this._initEvents();
			this.render();
		}

		render () {
			this.el.innerHTML = '';

			let img = document.createElement('img');
			img.src = this.data.cover;

			let title = document.createElement('b');
			title.classList.add('show__title');
			title.innerHTML = this.data.title;

			let list = document.createElement('ul');
			list.classList.add('show__list');

			this.data.items.forEach(itemData => {
				let link = document.createElement('a');
				link.classList.add('show__item');
				if (itemData.viewed == true) {
					link.classList.add('show__viewed');
				}
				link.href = itemData.episode;
				link.target = "_blank";
				link.innerHTML = itemData.episode_title;

				list.appendChild(link);
			});

			let deleteButton = document.createElement('div');
			deleteButton.classList.add('button');
			deleteButton.innerHTML = "Удалить сериал";

			this.el.appendChild(img);
			this.el.appendChild(title);
			this.el.appendChild(list);
			this.el.appendChild(deleteButton);
		}

		/**
		* Установка обработчиков событий
		*/
		_initEvents () {
			this.el.addEventListener('click', this._onCLick.bind(this));
		}

		/**
		* Обработчик удаления
		* @param {MouseEvent} event
		*/
		_onCLick (event) {
			event.preventDefault();
			let target = event.target;

			if (target.classList.contains('show__del')) {
				target.parentNode.remove(target.parentNode);
			}
		}
	}

	window.TVshow = TVshow;

})();
