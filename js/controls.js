'use strict';

//AJAX controls

//Pages
$(function ready() {
	$('#main-content-block').load("mapPage.html #map-block");

	$('#l0').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load("loginPage.html #login-block");
	});

	$('#l1').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load("registerPage.html #register-block");
	});

	$('#l2').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load("putNotePage.html #notes-block");
	});

	$('#l3').click(function (eventObject) {
		eventObject.preventDefault();
		$('#main-content-block').load("settingsPage.html #settings-block");
	});
});