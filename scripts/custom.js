ymaps.ready(function() {
    document.getElementById('loading').style.display = 'none';

    function addmap(params) {
        var newLayer = function() {
            var layer = new ymaps.Layer(params.tileURL, {
                projection: params.projection || ymaps.projection.sphericalMercator,
                tileTransparent: params.transparent || true
            });
            if ('zoomRange' in params) {
                layer.getZoomRange = function() {
                    return ymaps.vow.resolve(params.zoomRange);
                };
            }
            if ('copyrights' in params) {
                layer.getCopyrights = function() {
                    return ymaps.vow.resolve(params.copyrights);
                };
            }
            return layer;
        };
        ymaps.layer.storage.add(params.hash + 'L', newLayer);

        var layers = [params.hash + 'L'];
        if ('extraLayers' in params) {
            layers = params.extraLayers.concat(layers);
        }
        ymaps.mapType.storage.add(params.hash, new ymaps.MapType(params.title, layers));
    }

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/shubert/Z%z/%y/%x.jpg',
        hash: 'shubert',
        title: 'Карта Шуберта (1860)',
        zoomRange: [8, 13]
    });

    //    var shubertL = function() {
    //        var layer =  new ymaps.Layer('http://vnr.github.io/aprmaps/img/shubert/Z%z/%y/%x.jpg', {
    //            projection: ymaps.projection.sphericalMercator,
    //            tileTransparent: true
    //        });
    //        layer.getZoomRange = function () {
    //            return ymaps.vow.resolve([8, 13]);
    //        };
    //        return layer;
    //    };
    //    ymaps.layer.storage.add('shubertL', shubertL);
    //    ymaps.mapType.storage.add('shubert', new ymaps.MapType('Карта Шуберта (1860)', ['shubertL']));

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/1970/Z%z/%y/%x.png',
        hash: '1970',
        title: 'Спутниковый снимок 1970',
        extraLayers: ['yasatL'],
        zoomRange: [11, 16]
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/1971/Z%z/%y/%x.png',
        hash: '1971',
        title: 'Спутниковый снимок 1971',
        extraLayers: ['yasatL'],
        zoomRange: [11, 16]
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/1979/Z%z/%y/%x.png',
        hash: '1979',
        title: 'Спутниковый снимок 1979',
        extraLayers: ['yasatL'],
        zoomRange: [10, 15]
    });

    addmap({
        tileURL: 'http://b.tile.openstreetmap.org/%z/%x/%y.png',
        hash: 'osm',
        title: 'Openstreetmap',
        copyrights: '© OpenStreetMap contributors, CC-BY-SA | '
    });

    addmap({
        tileURL: 'http://khm%d|2.googleapis.com/kh?v=702&hl=ru-RU&%c',
        hash: 'google#sat',
        title: 'Google спутник'
    });

    /////////////////////////////////////////////////////

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/osob/Z%z/%y/%x.png',
        hash: 'osob',
        title: 'Генплан: особые зоны',
        zoomRange: [12, 16]
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/kultura/Z%z/%y/%x.png',
        hash: 'kult',
        title: 'Генплан: культурные объекты',
        zoomRange: [12, 16]
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/inzh/Z%z/%y/%x.png',
        hash: 'inzh',
        title: 'Генплан: инженерные сети',
        zoomRange: [12, 16]
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/gp2012/Z%z/%y/%x.png',
        hash: 'gp2012',
        title: 'Генплан 2012',
        extraLayers: ['yasatL'],
        zoomRange: [9, 16],
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/gp2013/Z%z/%y/%x.png',
        hash: 'gp2013',
        title: 'Генплан 2013',
        extraLayers: ['yasatL'],
        zoomRange: [9, 16],
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/gp2014/Z%z/%y/%x.png',
        hash: 'gp2014',
        title: 'Генплан 2014 (проект)',
        extraLayers: ['yasatL'],
        zoomRange: [12, 16],
    });

    addmap({
        tileURL: 'http://vnr.github.io/aprmaps/img/gp2015/Z%z/%y/%x.png',
        hash: 'gp2015',
        title: 'Генплан 2015 (проект)',
        extraLayers: ['yasatL'],
        zoomRange: [9, 16],
    });

    addmap({
        //tileURL: 'http://vnr.github.io/aprmaps/img/wwii-burzevo/Z%z/%y/%x.png',
        tileURL: 'http://vnr.github.io/wwii-maps/maps/burcevo/Z%z/%y/%x.png',
        hash: 'wwii#proryv',
        title: 'ВОВ: Бурцевский прорыв 01.12.1941',
        zoomRange: [8, 13],
    });

    addmap({
        tileURL: 'http://vnr.github.io/wwii-maps/maps/1941-11-ukr/z%z/%y/%x.png',
        hash: 'wwii#ukrep',
        title: 'ВОВ: Инженерные заграждения 11.1941',
        zoomRange: [7, 13],
    });


    var yaskeleton = function() {
        return new ymaps.Layer('http://vec0%d.maps.yandex.net/tiles?l=skl&%c&lang=ru_RU', {
            zIndex: 1000,
            tileTransparent: true
        });
    };
    ymaps.layer.storage.add('my#skeleton', yaskeleton);


    var yasat = function() {
        return new ymaps.Layer('https://sat0%d.maps.yandex.net/tiles?l=sat&%c&lang=ru_RU', {
            tileTransparent: true
        });
    };
    ymaps.layer.storage.add('yasatL', yasat);

    /////////////////////////////////////////////////////////////////////////

    var initialState = MapLocationState.fromString(document.location.hash);
    if (!ymaps.mapType.storage.get(initialState.get('type'))) { // если в хранилище нет карты с таким типом
        initialState.set('type', 'gp2015');
    }
    history.replaceState(initialState.getData(), undefined, "#" + initialState);

    var params = initialState.getData();
    params.controls = ["rulerControl", "zoomControl", "routeEditor"];
    var map = window.map = new ymaps.Map('ymap', params, {
        maxZoom: 17,
        minZoom: 9,
        suppressMapOpenBlock: true,
        adjustZoomOnTypeChange: true
    });
    //map.controls.get('fullscreenControl').enterFullscreen();

    map.typeBounds = {
        'wwii#proryv': [
            [55.17327, 36.48573],
            [55.68167, 37.5157]
        ],
        'wwii#ukrep': [
            [54.31783, 35.49147],
            [56.69261, 37.96339]
        ],
        'gp2015': [
            [55.46411, 36.99898],
            [55.59497, 37.14523]
        ],
        'gp2014': [
            [55.46411, 36.99898],
            [55.59497, 37.14523]
        ],
        'gp2013': [
            [55.46411, 36.99898],
            [55.59497, 37.14523]
        ],
        'gp2012': [
            [55.46274, 36.99863],
            [55.59653, 37.14386]
        ],
        '1970': [
            [55.51245, 36.9739],
            [55.60352, 37.10369]
        ],
        '1971': [
            [55.50836, 36.964],
            [55.60411, 37.1085]
        ],
        '1979': [
            [55.49667, 36.87366],
            [55.6449, 37.29595]
        ]
    };
    map.events.add('typechange', function(e) {
        var eMap = e.get('target');
        var currentType = eMap.getType();
        var newBounds = eMap.getBounds();
        console.log('typechange: ', currentType);
        if (currentType in eMap.typeBounds) {
            if (!ymaps.util.bounds.areIntersecting(newBounds, eMap.typeBounds[currentType])) {
                console.log('setting new bounds...');
                newBounds = eMap.typeBounds[currentType];
            }
        }
        eMap.setBounds(newBounds, { checkZoomRange: true });
        //e.get('target').events.fire('correctZoom');
    });

    var mapLocation = window.mapLocation = new MapLocation(map, initialState);
    mapLocation.events.add('statechange', function(e) {
        var state = e.get('newState'),
            hash = '#' + state;

        if ('pushState' in window.history) {
            //window.history.pushState(state.getData(), null, hash);
            history.replaceState(state.getData(), undefined, hash)
        } else {
            //document.location.hash = hash;
            document.location.replace(hash);
        }
    });

    window.onpopstate = function(e) {
        //var state = e.originalEvent.state;
        var state = e.state;

        if (state) {
            mapLocation.setState(state);
        } else {
            mapLocation.setState(initialState.getData());
        }
    };


    var button = new ymaps.control.Button({
        data: {
            content: 'Гибрид',
            title: 'Включить гибридный слой'
        },
        options: {
            //           maxWidth: [150, 200, 300],
            floatIndex: 2,
            float: 'right'
        }
    });
    button.events.add('click', function(e) {
        //   this.setType('osob');
        if (button.state.get('selected') == true) {
            this.layers.remove('my#skeleton');
        } else {
            this.layers.add('my#skeleton');
        }
    }, map)
    map.controls.add(button);


    var button2 = new ymaps.control.Button({
        data: {
            content: 'Спутник',
            title: 'Яндекс Спутник'
        },
        options: {
            selectOnClick: true
        }
    });
    button2.events
        .add('deselect', function(e) {
            this.layers.remove('yasatL');
        }, map)
        .add('select', function(e) {
            this.layers.add('yasatL');
        }, map);
    map.controls.add(button2, {
        floatIndex: 1,
        float: 'right'
    });

    var button3 = new ymaps.control.Button({
        data: {
            content: 'Генплан',
            title: 'Генплан 2013'
        },
        options: {
            selectOnClick: true,
            float: 'right',
            floatIndex: 3
        }
    });
    button3.events
        .add('deselect', function(e) {
            this.layers.remove('gp2013L');
        }, map)
        .add('select', function(e) {
            this.layers.add('gp2013L');
        }, map);
    map.controls.add(button3);

    map.controls.add(
        new ymaps.control.SearchControl({
            options: {
                //provider: 'yandex#publicMap',
                float: 'left',
                floatIndex: 10,
                //size: 'medium',
                useMapBounds: true
            }
        })
    );

    typeSelector = new ymaps.control.TypeSelector({
        data: {
            content: 'Карты'
        },
        mapTypes: ['gp2015', 'gp2014', 'gp2013', 'gp2012', 'osob', 'inzh', 'kult', '1970', '1971', '1979', 'wwii#proryv', 'wwii#ukrep', 'shubert', 'yandex#map', 'yandex#hybrid', 'google#sat', 'osm'],
        options: {
            size: 'large'
        }
    });
    map.controls.add(typeSelector);

    //     map.copyrights.add('&copy; Vasya');
});
