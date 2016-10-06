(function () {
	'use strict';

	let TVshow = window.TVshow;

	let show1 = new TVshow({
		el: document.querySelector('.show1'),
		data: {
			title: 'Очень странные дела ',
			link: 'http://fanserials.tv/stranger-things/',
			cover: 'http://www.kino-teatr.ru/art/4455/60106.jpg',
			items: [
				{
					episode_title: 'Серия 1',
					episode: 'http://fanserials.tv/18841-ochen-strannye-dela-zagadochnye-sobytiya-1-sezon-1-seriya-chast-pervaya-ischeznovenie-uilla-bayersa.html',
					viewed: true
				},
				{
					episode_title : 'Серия 2',
					episode: 'http://fanserials.tv/18847-ochen-strannye-dela-zagadochnye-sobytiya-1-sezon-2-seriya-the-weirdo-on-maple-street.html',
					viewed: true
				},
				{
					episode_title : 'Серия 3',
					episode: 'http://fanserials.tv/18848-ochen-strannye-dela-zagadochnye-sobytiya-1-sezon-3-seriya-holly-jolly.html',
					viewed: false
				}
			]
		}
	});

	let show2 = new TVshow({
		el: document.querySelector('.show2'),
		data: {
			title: 'Мир дикого запада',
			link: 'http://fanserials.tv/westworld/',
			cover: 'http://www.izhevskinfo.ru/pictures_v2/concurs/westworld.jpg',
			items: [
				{
					episode_title: 'Серия 1',
					episode: 'http://fanserials.tv/21538-mir-dikogo-zapada-1-sezon-1-seriya-original.html#Кравец',
					viewed: false
				}
			]
		}
	});

})();
