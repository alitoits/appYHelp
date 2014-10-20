'use strict';

//AJAX services
$(function ready() {

	var mainContainer = $('#main-content-block');
	var mainNavContainer = $('#main-nav-bar');

	$.ajaxSetup({
		cache: false
	});

//login
	mainContainer.on('click', '#login-button', function () {
		var username = $('#username').val();
		var password = $('#password').val();

		function baseAuth(user, password) {
			var tok = user + ':' + password;
			var hash = Base64.encode(tok);
			return 'Basic ' + hash;
		}

		console.log('login service start');

		$.ajax({
			type: 'GET',
			url: 'http://localhost:63342/appYHelp/json/login.json',
			dataType: 'json',
			async: false,
			data: '{"username": "' + username + '", "password" : "' + password + '"}',
			success: function (data) {
				console.log(data);
			},
			error: function () {
				console.log('Login service not working');
			}
		});
	});

//register
	mainContainer.on('click', '#register-button', function () {

		console.log('register service start');

		$.ajax({
			type: 'POST',
			url: 'http://localhost:63342/appYHelp/json/register.json',
			dataType: 'json',
			success: function (data) {
				console.log(data);
			},
			error: function () {
				console.log('Register service not working');
			}
		});
	});

//logout
	mainNavContainer.on('click', '#logout-link', function () {
		console.log('logout service start');
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: 'http://localhost:63342/appYHelp/json/logout.json',
			success: function (data) {
				console.log(data);
			},
			error: function () {
				console.log('Logout service not working');
			}
		});
	});

//all Ads
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'http://localhost:63342/appYHelp/json/allAds.json',
		success: function (data) {
			console.log(data);
		},
		error: function () {
			console.log('All Ads not working');
		}
	});

//	Obj for POST

//	var newAd = {'advertisement': {
//		'publishedUpTo': 1234567890,
//		'subject': $('#descr-head').val(),
//		'text': $('#descr-note').val(),
//		'latitude': 12.34,
//		'longitude': 45.56
//	}, 'user': {
//		'login': 'alex',
//		'password': 'eewq1111'
//	}
//	};

//post new Ad
	mainContainer.on('click', '#saveNoteButton', function () {
		console.log('post newAd service start');
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: 'http://localhost:63342/appYHelp/json/postnote.json',
			success: function (data) {
				console.log(data);
			},
			error: function () {
				console.log('Post New Ad not working');
			}
		});
	});
});

