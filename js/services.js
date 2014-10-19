'use strict';

//AJAX services
$(document).ready(function () {
//login

//logout

//post new note
	$('#put-note-form').submit(function (event) {
		if ($('#descr-head').val() === 'correct') {
			$('#div1').text('Validated...').show();
			return;
		}

		event.preventDefault();
	});

	var newNote = {'advertisement': {
		'publishedUpTo': 1234567890,
		'subject': $('#descr-head').val(),
		'text': $('#descr-note').val(),
		'latitude': 12.34,
		'longitude': 45.56
	}, 'user': {
		'login': 'alex',
		'password': 'eewq1111'
	}
	};

	$.support.cors = true;

	$.ajax({
		type: 'POST',
		url: 'http://localhost/api/ad/',

		data: JSON.stringify({ Notes: newNote }),
		contentType: 'application/json; charset=utf-8',

		xhrFields: {
			// The 'xhrFields' property sets additional fields on the XMLHttpRequest.
			// This can be used to set the 'withCredentials' property.
			// Set the value to 'true' if you'd like to pass cookies to the server.
			// If this is enabled, your server must respond with the header
			// 'Access-Control-Allow-Credentials: true'.
			withCredentials: false
		},

		dataType: 'json',
		success: function (data) {
			console.log(data);
		},
		error: function () {
			console.log('not loading..');
		}
	});
});