(function () {
	'use strict';

	class TVshow {

		constructor (options) {
			this.el = options.el;
			this.title = options.title;
			this.link = options.link;
			this.cover = options.cover;
			this.items = options.items;

			this._initEvents();
			this.render();
		}

		render () {
		  let newBlock = document.createElement('div');
			let newShowClass = RusToLat(this.title);
		  newBlock.className = `tvshow `+newShowClass;
		  newBlock.innerHTML = `<img src="`+this.cover+`">
														<b class="show__title">`+this.title+`</b><ul class="show__list">
														<div class="show__del">x</div>`;
      document.querySelector('.app').appendChild(newBlock);

			for (let key in this.items) {
				let episode = this.items[key];
				let episodeBlock = document.createElement('li');
				episodeBlock.innerHTML = `<a class="show__item viewed__`+episode.viewed+`" href="`+episode.episode_link+`" target="_blank">`+episode.episode_title+`</a>`;
				document.querySelector(`.`+newShowClass).appendChild(episodeBlock);
			}
		}

		/**
		* Установка обработчиков событий
		*/
		_initEvents () {
			// this.el.addEventListener('click', this._onCLick.bind(this));
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


	function RusToLat(str) {
		str = str.toLowerCase(); // все в нижний регистр
			let cyr2latChars = new Array( ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'],  ['е', 'e'], ['ё', 'yo'], ['ж', 'zh'], ['з', 'z'], ['и', 'i'], ['й', 'y'], ['к', 'k'], ['л', 'l'], ['м', 'm'],  ['н', 'n'], ['о', 'o'], ['п', 'p'],  ['р', 'r'], ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'],  ['ц', 'c'], ['ч', 'ch'],['ш', 'sh'], ['щ', 'shch'], ['ъ', ''],  ['ы', 'y'], ['ь', ''],  ['э', 'e'], ['ю', 'yu'], ['я', 'ya'], ['А', 'A'], ['Б', 'B'],  ['В', 'V'], ['Г', 'G'], ['Д', 'D'], ['Е', 'E'], ['Ё', 'YO'],  ['Ж', 'ZH'], ['З', 'Z'], ['И', 'I'], ['Й', 'Y'],  ['К', 'K'], ['Л', 'L'], ['М', 'M'], ['Н', 'N'], ['О', 'O'],  ['П', 'P'],  ['Р', 'R'], ['С', 'S'], ['Т', 'T'],  ['У', 'U'], ['Ф', 'F'], ['Х', 'H'], ['Ц', 'C'], ['Ч', 'CH'], ['Ш', 'SH'], ['Щ', 'SHCH'], ['Ъ', ''],  ['Ы', 'Y'], ['Ь', ''], ['Э', 'E'], ['Ю', 'YU'], ['Я', 'YA'], ['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'], ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['o', 'o'], ['p', 'p'], ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'], ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'], ['z', 'z'], ['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],['E', 'E'], ['F', 'F'],['G', 'G'],['H', 'H'],['I', 'I'],['J', 'J'],['K', 'K'], ['L', 'L'], ['M', 'M'], ['N', 'N'], ['O', 'O'],['P', 'P'], ['Q', 'Q'],['R', 'R'],['S', 'S'],['T', 'T'],['U', 'U'],['V', 'V'], ['W', 'W'], ['X', 'X'], ['Y', 'Y'], ['Z', 'Z'], [' ', '_'],['0', '0'],['1', '1'],['2', '2'],['3', '3'], ['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'], ['-', '-'] );

	    let newStr = new String();

	    for (let i = 0; i < str.length; i++) {

	        let ch = str.charAt(i);
	        let newCh = '';

	        for (let j = 0; j < cyr2latChars.length; j++) {
	            if (ch == cyr2latChars[j][0]) {
	                newCh = cyr2latChars[j][1];
	            }
	        }
	        newStr += newCh;
	    }
	    return newStr.replace(/[_]{2,}/gim, '_').replace(/\n/gim, '');
	}

	window.TVshow = TVshow;

})();
