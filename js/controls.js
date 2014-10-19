'use strict';

//AJAX controls

//Pages
$(function ready() {
	$('#main-content-block').load('map-page.html #map-block');

	$('#l0').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load('login-page.html #login-block');
	});

	$('#l1').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load('register-page.html #register-block');
	});

	$('#l2').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load('put-note-page.html #notes-block');
	});

	$('#l3').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load('settings-page.html #settings-block');
	});
});