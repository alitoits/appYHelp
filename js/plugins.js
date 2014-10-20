'use strict';

//contextPath


//Ajax Loader
var bodyLoading = $('body');

$(document).on({
	ajaxStart: function () {
		bodyLoading.addClass('loading');
	},
	ajaxStop: function () {
		bodyLoading.removeClass('loading');
	}
});


// Yandex Maps Api Controls
ymaps.ready(init);

function init() {
	var appYHelpMap = new ymaps.Map('map', {
		center: [53.90000000, 27.56666670],
		zoom: 11,
		behaviors: ['default', 'scrollZoom'],
		controls: ['searchControl', 'zoomControl', 'geolocationControl', 'typeSelector', 'fullscreenControl']
	});

	var clusterer = new ymaps.Clusterer({
		preset: 'islands#invertedVioletClusterIcons',
		clusterHideIconOnBalloonOpen: false,
		geoObjectHideIconOnBalloonOpen: false
	});

	$('.ymaps-2-1-16-map').width('auto');
	/**
	 * Кластеризатор расширяет коллекцию, что позволяет использовать один обработчик
	 * для обработки событий всех геообъектов.
	 * Будем менять цвет иконок и кластеров при наведении.
	 */
	clusterer.events
		// Можно слушать сразу несколько событий, указывая их имена в массиве.
			.add(['mouseenter', 'mouseleave'], function (e) {
				var target = e.get('target'),
						type = e.get('type');
				if (typeof target.getGeoObjects != 'undefined') {
					// Событие произошло на кластере.
					if (type == 'mouseenter') {
						target.options.set('preset', 'islands#invertedPinkClusterIcons');
					} else {
						target.options.set('preset', 'islands#invertedVioletClusterIcons');
					}
				} else {
					// Событие произошло на геообъекте.
					if (type == 'mouseenter') {
						target.options.set('preset', 'islands#pinkIcon');
					} else {
						target.options.set('preset', 'islands#violetIcon');
					}
				}
			});

	var getPointData = function (index) {
				return {
					balloonContentBody: 'балун <strong>метки ' + index + '</strong>',
					clusterCaption: 'метка <strong>' + index + '</strong>'
				};
			},
			getPointOptions = function () {
				return {
					preset: 'islands#blueIcon'
				};
			},
			points = [
				[53.831903, 27.411961],
				[53.763338, 27.565466],
				[53.763338, 27.565466],
				[53.744522, 27.616278],
				[53.780898, 27.642889],
				[53.793539, 27.435983],
				[53.800584, 27.675638],
				[53.716733, 27.589988],
				[53.775724, 27.560840],
				[53.822144, 27.432781],
				[53.874170, 27.669838],
				[53.716770, 27.482338],
				[53.780850, 27.750210],
				[53.810906, 27.654142],
				[53.865386, 27.713329],
				[53.847121, 27.525797],
				[53.778653, 27.710743],
				[53.623415, 27.717934],
				[53.863193, 27.727000],
				[53.866770, 27.760113],
				[53.698261, 27.730838],
				[53.633800, 27.564769],
				[53.639996, 27.539400],
				[53.690230, 27.405853],
				[53.775970, 27.512900],
				[53.775777, 27.442180],
				[53.811814, 27.440448]
			],
			geoObjects = [];

	for (var i = 0, len = points.length; i < len; i++) {
		geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
	}

	clusterer.add(geoObjects);
	appYHelpMap.geoObjects.add(clusterer);

	appYHelpMap.setBounds(clusterer.getBounds(), {
		checkZoomRange: true
	});

}

//Custom file uploader
