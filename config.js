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
            title: 'FESTIVALES DE MÚSICA EN ESPAÑA',
            image: 'https://elordenmundial.com/wp-content/uploads/2023/07/mapa-festivales-espana-con-islas.png',
            description: '<strong><a href="https://elordenmundial.com/mapas-y-graficos/mapa-festivales-musica-espana/" target="_blank" >¿Era dorada o burbuja a punto de explotar?</a></strong><br>La burbuja de festivales de música en nuestro país muestra signos de agotamiento y posible estallido debido a la saturación de eventos, aumento de costes de producción, altos cachés y fatiga del público. A pesar de los récords de asistencia en 2024, más de 100 festivales han cancelado o enfrentan serias dificultades financieras, obligando a reestructurar el modelo hacia experiencias de mayor calidad y sostenibilidad.</br> <br>En los últimos años, se han duplicado el número de macrofestivales y, en la actualidad, contamos con uno en cada provincia. Incluso en cada ciudad. A menudo, esto se ha relacionado con un efecto rebote tras la pandemia, pero también en algo difícil de mantener en el medio y largo plazo.</br> <br>En el presente estudio nos acercaremos a los datos de Aforo, Precio y Ubicación Geográfica para intentar dilucidar si realmente estamos ante una burbuja en el sector de la industria musical en directo.</br>',
            location: {
                center: [-7.48996, 40.14493],
                zoom: 5.3,
                pitch: 0,
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
            title: 'ACTUAL (Del 2 al 7 de enero)',
            image: 'https://actualfestival.com/wp-content/uploads/2025/11/actual-2026-web.jpg',
            description: '<strong><a href="https://actualfestival.com" target="_blank" >FESTIVAL ACTUAL</a></strong><br><strong>AFORO: 35.000 _ PRECIO: 45€</strong></br>Actual es un festival de música, cine y artes que se celebra en Logroño (La Rioja, España) la primera semana de cada año, de forma ininterrumpida desde 1991 y organizado por el Gobierno de La Rioja. Es muy conocido por ser el primer festival del año en España. Su programa suele estar encabezado por conciertos de música contemporánea, aunque también ofrece muestras de cine, teatro, danza, pintura o arte contemporáneo.<br><strong><a href="https://www.youtube.com/watch?v=9EblV7SKFaU" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.45, 42.469999],
                zoom: 13,
                pitch: 0,
                bearing: 0,
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
            title: 'MADRID POPFEST (13 y 14 de marzo)',
            image: 'https://www.madridpopfest.com/CARTEL2026.png',
            description: '<strong><a href="https://www.madridpopfest.com/" target="_blank" >MADRID POPFEST</a></strong><br><strong>AFORO: 300 _ PRECIO: 35€</strong></br>¡Madrid Popfest no defrauda! ¿Eres un auténtico fanático de la música independiente? Entonces, no puedes perderte el festival musical indie más especial de Madrid. Este evento musical no podría celebrarse en un espacio más cultural y creativo en pleno centro de la capital, la Sala Galileo Galileo. En sus ediciones anteriores, emergentes artistas internacionales visitaron el escenario de este evento musical alternativo. The Ballet, Luces Negras o Rusos Blancos son solo algunos de los nombres que han liderado su cartel en los últimos años. Un festival que se celebra por todo el globo, desde Nueva York hasta Roma, organizado por pequeñas células independientes entre sí. La comunidad de Madrid Popfest es uno de los colectivos más creativos de la ciudad. No te pierdas las actuaciones en directo de cantantes y grupos que abarcan la avanzadilla cultural y musical de nuestros tiempos. Una cita perfecta para descubrir nuevos paradigmas musicales.<br><strong><a href="https://www.youtube.com/watch?v=K9IlvSif_s0" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [2.1687, 41.43108],
                zoom: 13,
                pitch: 0,
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
            alignment: 'right',
            hidden: false,
            title: 'SANSAN FESTIVAL (Del 2 al 4 de abril)',
            image: 'https://sansanfestival.com/2026/wp-content/uploads/2025/09/SS26-Cartel-completo-feed-scaled.jpg',
            description: '<strong><a href="https://sansanfestival.com/2026/" target="_blank" >SANSAN FESTIVAL</a></strong><br><strong>AFORO: 45.000 _ PRECIO: 60€</strong></br>El SanSan Festival vuelve a Benicàssim con un cartel lleno de estrellas nacionales e internacionales. Entre los cabezas de cartel destacan Of Monsters and Men, que traerán sus himnos folk-pop, y Rigoberta Bandini, que presentará su nuevo disco. También actuarán Love of Lesbian, Guitarricadelafuente y La M.O.D.A., junto a otras propuestas como León Benavente, Biznaga o La Casa Azul. El festival apuesta también por talento emergente, con artistas como Leo Rizzi, Maria Arnal y Ultraligera, además de DJ sets como el de Alizzz. Una cita imprescindible para disfrutar de música indie y alternativa bajo el clima mediterráneo de Benicàssim.<br><strong><a href="https://www.youtube.com/watch?v=UvlCKiYGlGU" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [0.04939, 40.05017],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'INTERESTELAR (15 y 16 de mayo)',
            image: 'https://www.agendadesevilla.com/wp-content/uploads/2026/05/cartel-Interestelar-Sevilla-2026.jpg',
            description: '<strong><a href="https://www.interestelarsevilla.com/" target="_blank" >INTERESTELAR FESTIVAL</a></strong><br><strong>AFORO: 40.000 _ PRECIO: 75€</strong></br>La quinta edición del Festival Interestelar Sevilla tendrá lugar en el Centro Andaluz de Arte Contemporáneo (CAAC), después de reunir a más de 40.000 personas en este año y haberse pospuesto por la crisis del Coronavirus. El Festival Interestelar Sevilla 2026 ofrecerá la mejor música indie del momento distribuida en tres escenarios, además de eventos de gastronomía, exposiciones, talleres, artes en directo, diseño e ilustración y naturaleza para dar vida a este nuevo concepto de festival diseñado para toda la familia.<br><strong><a href="https://www.youtube.com/watch?v=IsFuav0cCeQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-6.00755, 37.39837],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'LEV FESTIVAL (Del 30 de abril al 3 de mayo)',
            image: 'https://beatburguer.com/wp-content/uploads/2026/02/Avance-CARTEL-1080x1350_LEV_2026-819x1024.jpg',
            description: '<strong><a href="https://levfestival.com/26-gijon/" target="_blank" >LEV FESTIVAL</a></strong><br><strong>AFORO: 1.200 _ PRECIO: 50€</strong></br>LEV (Laboratorio de Electrónica Visual) es una plataforma de producción, divulgación y experimentación en torno a la creación sonora electrónica, la creación audiovisual y el arte digital. Un espacio abierto de investigación que se nutre de las últimas herramientas tecnológicas para explorar la creatividad contemporánea junto a artistas nacionales e internacionales de vanguardia y nuevos talentos pioneros, y la traslada a los escenarios y espacios públicos mediante diferentes acciones.<br><strong><a href="https://www.youtube.com/watch?v=AOonCh49V6Q" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-5.61171, 43.52477],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
