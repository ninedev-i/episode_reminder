(function () {
	'use strict';

	let config = { apiKey: "AIzaSyDAnc6YIEyS_35I1QRa9DpOqwUlrfBVe0Y", databaseURL: "https://episode-reminder.firebaseio.com" };
	firebase.initializeApp(config);
	let rootRef = firebase.database().ref().child('tvShows');
	rootRef.once('value', function (snap) {
		snap.forEach(function(childSnap) {
			let show = new TVshow({
				// el : document.querySelector('.app'),
				title : childSnap.child('title').val(),
				link : childSnap.child('link').val(),
				cover : childSnap.child('cover').val(),
				items : childSnap.child('items').val()
			});
		});
	});

let newShow = new addNewShow({});

})();
