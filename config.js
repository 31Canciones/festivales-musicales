var config = {
    style: 'mapbox://styles/djbohemio/cmm1844ci001i01s636s484ii',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGpib2hlbWlvIiwiYSI6ImNtbTE3eG52bTA2bDYycXM2M2dzdmxvZWYifQ.fJXB1ssrHl2WOehAXpTRUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'La burbuja del sonido en directo',
    subtitle: 'Storymaps de los festivales musicales en España',
    byline: 'Armando Marín Ruiz',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Caudal Fest',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-7.568357661686885, 43.00353034558037],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'ACTUAL',
            image: 'https://actualfestival.com/wp-content/uploads/2025/11/actual-2026-web.jpg',
            description: '<strong><a href="https://actualfestival.com" target="_blank" >FESTIVAL ACTUAL</a></strong><br><strong>AFORO: 35.000 _ PRECIO: 45€</strong></br>Actual es un festival de música, cine y artes que se celebra en Logroño (La Rioja, España) la primera semana de cada año, de forma ininterrumpida desde 1991 y organizado por el Gobierno de La Rioja. Es muy conocido por ser el primer festival del año en España. Su programa suele estar encabezado por conciertos de música contemporánea, aunque también ofrece muestras de cine, teatro, danza, pintura o arte contemporáneo.<br><strong><a href="https://www.youtube.com/watch?v=9EblV7SKFaU" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.4307, 42.47187],
                zoom: 15,
                pitch: 30,
                bearing: -10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Minifestival de música independent de Barcelona',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [2.1687, 41.43108],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Madrid Popfest',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, <br>is a dynamic city known for its European-inspired architecture,</br> vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-3.70985, 40.43866],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
