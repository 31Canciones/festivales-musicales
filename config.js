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
                center: [-3.70985, 40.43866],
                zoom: 14,
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
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'TOLEDO BEAT FESTIVAL (8 y 9 de mayo)',
            image: 'https://elbackstagemag.com/wp-content/uploads/2025/12/CARTEL-TOLEDO-BEAT-2026-COMPLETO.jpeg',
            description: '<strong><a href="https://toledofestival.es/" target="_blank" >TOLEDO BEAT FESTIVAL</a></strong><br><strong>AFORO: 20.000 _ PRECIO: 85€</strong></br>En el corazón de la histórica ciudad de Toledo se enciende cada año una chispa musical que lo convierte en epicentro del indie, el pop y la música alternativa: ese fuego se llama Toledo Beat Festival. Durante dos jornadas vibrantes, el Recinto Ferial de La Peraleda se transforma en un espacio de encuentro donde la emoción, la amistad y los acordes se fusionan. Con tres escenarios (dos dedicados a conciertos en vivo y uno reservado para DJs) la música no se detiene: cada rincón late con melodías y energía.<br><strong><a href="https://www.youtube.com/watch?v=LuzkFOcKcFQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-4.04761, 39.87120],
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
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'TOMAVISTAS (Del 29 al 31 de mayo)',
            image: 'https://img.rtve.es/imagenes/primeras-confirmaciones-tomavistas-2025/01733308192388.jpg',
            description: '<strong><a href="https://www.tomavistasfestival.com/" target="_blank" >TOMAVISTAS</a></strong><br><strong>AFORO: 8.000 _ PRECIO: 150€</strong></br>Un festival perfecto para quienes huyen de las masificaciones y buscan vivir una experiencia reconfortante e irrepetible. Un festival que apuesta por un cartel distinto y atrevido, por el apoyo a las nuevas propuestas musicales del panorama underground acompañadas por artistas y bandas consagradas tanto a nivel internacional como nacional.<br><strong><a href="https://www.youtube.com/watch?v=ceqqi9CXHvs" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.68445, 40.36901],
                zoom: 14,
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
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'VIÑA ROCK (Del 30 de abril al 2 de mayo)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2025/03/cartel-vina-rock-2026.jpg',
            description: '<strong><a href="https://www.vina-rock.com/" target="_blank" >VIÑA ROCK</a></strong><br><strong>AFORO: 65.000 _ PRECIO: 70€</strong></br>Viña Rock inicia una nueva etapa: la empresa gestora cambia de manos y recupera su plena independencia. La empresa gestora del festival pasa a una nueva propiedad totalmente independiente tras la salida de KKR. Con esta operación, Viña Rock queda completamente desvinculado de cualquier fondo de inversión o estructura empresarial asociada, iniciando una etapa centrada exclusivamente en su identidad cultural y en su comunidad. Esta nueva era estará liderada por un equipo con amplia experiencia, dedicado y comprometido, que asume el proyecto con un objetivo claro: devolverlo a su origen, protegerlo y reforzar su independencia. Se fortalecerá la identidad del festival, su vínculo con Villarrobledo y su compromiso cultural y social. Viña Rock redefine su futuro hacia un modelo plenamente independiente. Las decisiones artísticas, culturales y estratégicas responderán exclusivamente a su identidad histórica, a su comunidad y a su compromiso con la música, la libertad de expresión y el respeto.<br><strong><a href="https://www.youtube.com/watch?v=Uaqrjws4BRQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.60979, 39.27324],
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
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'WARM UP (1 Y 2 de mayo)',
            image: 'https://warmupfestival.es/wp-content/uploads/2026/03/Cartel-WARM-UP-Estrella-de-Levante-2026-horizontal-.jpg',
            description: '<strong><a href="https://warmupfestival.es/" target="_blank" >WARM UP</a></strong><br><strong>AFORO: 35.000 _ PRECIO: 55€</strong></br>El WARM UP Estrella de Levante se ha consolidado como uno de los eventos musicales más destacados de España, presentando una experiencia única para los amantes de la música, la cultura y el ocio urbano. Este festival, que se celebra anualmente en La Fica de Murcia, ofrece un cartel impresionante con lo mejor de la música nacional e internacional, en un ambiente lleno de energía. Durante el festival, los asistentes pueden disfrutar de conciertos en directo de artistas de renombre, además de vivir una experiencia única que abarca no solo la música, sino también actividades culturales y de ocio, como rutas gastronómicas, shopping, exposiciones, danza y cine.<br><strong><a href="https://www.youtube.com/watch?v=0726CdYL-Hk" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-1.10998, 37.98410],
                zoom: 14,
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
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'WOMAD (Del 8 al 11 de mayo)',
            image: 'https://mercadeopop.com/wp-content/uploads/2025/04/WM25-Cartel-feed.jpg',
            description: '<strong><a href="https://www.granteatrocc.com/womad/2025/" target="_blank" >WOMAD</a></strong><br><strong>AFORO: Ilimitado _ PRECIO: Gratis</strong></br>El WOMAD (World of Music, Arts and Dance), festival sobre música, artes y danzas del mundo, es un proyecto del cantante británico Peter Gabriel para dar a conocer los distintos ritmos musicales. Se celebra en Cáceres desde 1992, y se trata de un evento intercultural de carácter gratuito. Además de espectáculos musicales de distintas formaciones y solistas, también se organizan otras actividades como talleres, pasacalles, mercadillos artesanales y la fusión de las diferentes culturas.<br><strong><a href="https://www.youtube.com/watch?v=EZrB2kjS210" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-6.37163, 39.47543],
                zoom: 14,
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
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MALLORCA LIVE FESTIVAL (Del 12 al 14 de junio)',
            image: 'https://www.entradas.com/magazine/fileadmin/backstage/mallorca_live_festival_2026_cartel.jpg',
            description: '<strong><a href="https://mallorcalivefestival.com/" target="_blank" >MALLORCA LIVE FESTIVAL</a></strong><br><strong>AFORO: 28.000 _ PRECIO: 120€</strong></br>El evento musical más importante de las Islas Baleares, Mallorca Live Festival, ha completado el cartel de su octava edición, que tendrá lugar en el Recinto Mallorca Live de Calvià los días 12, 13 y 14 de junio. ¿Y cómo lo ha hecho? Pues confirmando una nueva lista de artistas entre los que están no solamente los citados Mercury Rev, Nicola Cruz, Grande Amore o Elyella, sino también Go Cactus, Usted Señálemelo, Maximiliano Calvo, The Family Man, Niños Raros, Jordan Boyd, Flor de Higuera, Aroop Roy, Jane Fitz, Radioactive Man y la joven artista malagueña Anadie, quien actuará en el escenario Radio 3, tras resultar elegida por los oyentes del programa Hoy Empieza Todo.<br><strong><a href="https://www.youtube.com/watch?v=xV5UIkIfsOI" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [2.51929, 39.50713],
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
            id: 'thirteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'FESTIVAL DE LES ARTS (5 y 6 de junio)',
            image: 'https://festivaleswiki-images.s3.amazonaws.com/festival-de-les-arts-2026.jpeg',
            description: '<strong><a href="https://festivaldelesarts.com/" target="_blank" >FESTIVAL DE LES ARTS</a></strong><br><strong>AFORO: 40.000 _ PRECIO: 90€</strong></br>Nace de la conexión entre la música y otras disciplinas artísticas como el diseño, la ilustración o la gastronomía. Un festival con alma, que busca apoyar a la ciudad de Valencia impulsando sus espacios y a sus artistas. Un proyecto con espíritu sostenible para mayores y pequeños donde tienen cabida todas las expresiones artísticas y movimientos culturales. La Ciudad de las Artes y las Ciencias es nuestra casa desde nuestros inicios. Dos escenarios, más de 24 horas de música, una variedad gastronómica en nuestros Foodies Merkat, Zona Kids, diseñadores y marcas emergentes en Les Arts Market, ilustradores en directo, fuegos artificiales y muchas más sorpresas.<br><strong><a href="https://www.youtube.com/watch?v=XX-acCpez_w" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-0.35046, 39.45508],
                zoom: 14,
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
            id: 'fourteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'SÓNAR FESTIVAL (Del 18 al 20 de junio)',
            image: 'https://www.fabfestivals.com/wp-content/uploads/2025/12/sonar-festival-2026-lineup-1-1024x576.jpg',
            description: '<strong><a href="https://sonar.es/es" target="_blank" >SÓNAR FESTIVAL</a></strong><br><strong>AFORO: 15.000 _ PRECIO: 175€</strong></br>El Sónar 2026 se celebrará del 18 al 20 de junio y será la primera vez que tendrá lugar íntegramente en la Fira Gran Via de lHospitalet, de manera que desaparece la separación entre Sónar de Dia y Sónar de Nit. Protagonizada por artistas como The Prodigy, Speedy J, Charlotte de Witte y Amelie Lens, entre muchos otros, esta edición también estrena nueva sede para el Sónar+D, en la Llotja de Mar, y vuelve Sónar Kids, la versión familiar del festival, que tendrá lugar el sábado 20 de junio en el Parc del Fòrum.<br><strong><a href="https://www.youtube.com/watch?v=o1xalhbegGk" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [2.15052, 41.37413],
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
            id: 'fifteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'KALORAMA (20 y 21 de junio)',
            image: 'https://kaloramamadrid.com/wp-content/uploads/2024/04/KALORAMAMADRID_A3_COLOR-1-723x1024.jpg',
            description: '<strong><a href="https://kaloramamadrid.com/" target="_blank" >KALORAMA</a></strong><br><strong>AFORO: 20.000 _ PRECIO: 115€</strong></br>Tras una primera parada en la capital el año pasado, KALORAMA repite en la capital para convertirse en una de las citas musicales imprescindibles en la agenda de los madrileños. El festival regresa con un anuncio de cartel encabezado por Pet Shop Boys, Jorja Smith, Azealia Banks y Father John Misty. La segunda edición de KALORAMA Madrid llega con novedades: se celebrará los días 20 y 21 de junio en la Caja Mágica, a diferencia del año anterior, que tuvo lugar en Ifema. Dos jornadas de música con artistas internacionales y nacionales para celebrar la llegada del verano en la ciudad.<br><strong><a href="https://www.youtube.com/watch?v=sOHyGzNW_v0" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.68482, 40.36911],
                zoom: 14,
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
            id: 'sixteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'AZKENA ROCK (Del 18 al 20 de junio)',
            image: 'https://azkenarockfestival.com/wp-content/uploads/2025/12/ARF26_CARTEL_1920x1120_WEB-1.jpg',
            description: '<strong><a href="https://azkenarockfestival.com/" target="_blank" >AZKENA ROCK</a></strong><br><strong>AFORO: 20.000 _ PRECIO: 150€</strong></br>Para los amantes de la música que ya peinamos canas —si es que acaso peinamos algo— un festival como el Azkena Rock se vuelve un evento totalmente ineludible, ya que año tras año disfrutamos con bandas o artistas que nos encantan, y en el camino es habitual encontrar otras tantas que se descubren allí mismo y, en muchos casos, ya se quedan con nosotros.<br><strong><a href="https://www.youtube.com/watch?v=1f2DXKOrGy8" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.68507, 42.83416],
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
            id: 'seventeenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'O SON DO CAMIÑO (Del 18 al 20 de junio)',
            image: 'https://osondocamino.es/wp-content/uploads/elementor/thumbs/OSDC26-LineupCompleto-Feed-1-rieydb86csny6fh4h06oq5y9n60ic1271zyo7bs83o.jpg',
            description: '<strong><a href="https://osondocamino.es/" target="_blank" >O SON DO CAMIÑO</a></strong><br><strong>AFORO: 37.800 _ PRECIO: 60€</strong></br>O Son do Camiño volvió a alzarse sobre el Monte do Gozo como quien regresa a donde siempre resuena el eco de lo vivido. Lo hizo con una edición cargada de contrastes, de memorias que vuelven al ritmo de canciones que marcaron otras épocas, pero también presentando nuevas voces que reclaman su espacio. Una edición que supo redimirse de uno de los fallos más importantes del 2024: el sonido. Durante tres jornadas, más de 40.000 personas diarias desafiaron a las inclemencias del tiempo para celebrar la música en uno de los recintos naturales más emblemáticos de Galicia.<br><strong><a href="https://www.youtube.com/watch?v=CtX9m2-_uKE" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-8.50051, 42.88574],
                zoom: 14,
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
            id: 'eighteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'PRIMAVERA SOUND (Del 3 al 7 de junio)',
            image: 'https://cdn-acn.watchity.net/acn/images/d5b69cc7-d151-4876-96fa-daa1782d2354/e2fcca1e-0746-46c8-808d-b9817237f820.jpg',
            description: '<strong><a href="https://www.primaverasound.com/es/home" target="_blank" >PRIMAVERA SOUND</a></strong><br><strong>AFORO: 80.000 _ PRECIO: 440€</strong></br>El cartel de Primavera Sound 2026 vuelve a ser fascinante en su envergadura, ofreciendo un océano de artistas increíbles que, en las líneas grandes, representa a los nombres imprescindibles de la música actual (Doja Cat, Gorillaz) y de todos los tiempos (The Cure). Sumada la programación de Primavera a la Ciutat, paralela e igualmente recomendable (ahí están Blood Orange o Mogwai tocando en sala), hoy nos centramos en esos nombres de la línea pequeña que merecen no pasar desapercibidos. Estamos hablando de auténticas innovadoras como New York, de futuras estrellas del rock como Florence Road, y de leyendas como Melt-Banana que merecen ser reconocidas más allá de sus fronteras. Los abonos siguen a la venta, mientras que las entradas individuales de viernes y sábado ya están agotadas.<br><strong><a href="https://www.youtube.com/watch?v=Y43ugPH0IcI" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [2.22466, 41.41155],
                zoom: 14,
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
            id: 'nineteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'PIRINEOS SUR (Del 9 al 26 de julio)',
            image: 'https://pirineos-sur.es/wp-content/uploads/2026/01/PS26_CARTEL_1920x1120_WEB-2048x1195.jpg',
            description: '<strong><a href="https://pirineos-sur.es/" target="_blank" >PIRINEOS SUR</a></strong><br><strong>AFORO: 5.500 _ PRECIO: 130€</strong></br>Lanuza, en Huesca, volverá a acoger la nueva edición –la número treinta y tres– del Pirineos Sur o Festival Internacional de las Culturas. Será entre los días 9 y 26 de julio de 2026, en un enclave natural único. Aunque la mejor noticia es que el cartel vuelve a contar, una vez más, con una excelente selección de artistas tanto nacionales como internacionales de lo más interesante.<br><strong><a href="https://www.youtube.com/watch?v=913inQkv4YE" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-0.31649, 42.75783],
                zoom: 14,
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
            id: 'twentieth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'FESTIVAL PORTAMÉRICA (Del 9 al 11 de julio)',
            image: 'https://esmerarte.com/wp-content/uploads/2025/12/PA26-CARTEL-DIAS-Feed.jpg',
            description: '<strong><a href="https://portamerica.es/" target="_blank" >FESTIVAL PORTAMÉRICA</a></strong><br><strong>AFORO: 65.000 _ PRECIO: 90€</strong></br>La nueva edición del Festival PortAmérica confirma la incorporación de cuatro nuevas bandas y el esperado anuncio de la distribución por días de su cartel. El evento, que se celebrará del 9 al 11 de julio en la Azucreira de Portas (Pontevedra), añade a su programación a Instituto Mexicano del Sonido, Repion, Meridian Brothers y Orkesta Mendoza.<br><strong><a href="https://www.youtube.com/watch?v=a3v4F_1PDSM" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-8.65569, 42.59070],
                zoom: 14,
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
            id: 'twenty-first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FIB (Del 16 al 18 de julio)',
            image: 'https://fanmusicfest.com/sites/default/files/styles/esc_750x/public/fib_2026_cartel.jpg?itok=_70T9WT3',
            description: '<strong><a href="https://fiberfib.com/" target="_blank" >FIB</a></strong><br><strong>AFORO: 53.000 _ PRECIO: 150€</strong></br>El Festival Internacional de Benicàssim ha anunciado la primera tanda de artistas que formarán parte del cartel de la próxima edición, que se celebrará del 16 al 18 de julio en la localidad costera de Benicàssim. Además de The Prodigy, los otros cabezas de cartel anunciados han sido The Kooks, Pendulum (en formato LIVE), Kaiser Chiefs y Lori Meyers.<br><strong><a href="https://www.youtube.com/watch?v=wEkbypmOH-Q" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [0.04900, 40.05000],
                zoom: 14,
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
            id: 'twenty-second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MAD COOL FESTIVAL (Del 8 al 11 de julio)',
            image: 'https://esmerarte.com/wp-content/uploads/2025/12/PA26-CARTEL-DIAS-Feed.jpg',
            description: '<strong><a href="https://madcoolfestival.es/" target="_blank" >MAD COOL FESTIVAL</a></strong><br><strong>AFORO: 60.000 _ PRECIO: 185€</strong></br>Mad Cool Festival alcanza su décimo aniversario consolidado como uno de los grandes eventos musicales de Europa. La edición 2026, que se celebrará del 8 al 11 de julio en el Espacio Iberdrola Music de Villaverde (Madrid), reúne a más de 70 artistas internacionales en un cartel que combina leyendas del rock, iconos contemporáneos y nuevas voces emergentes.<br><strong><a href="https://www.youtube.com/watch?v=tcEVabt4w0I" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.71210, 40.32991],
                zoom: 14,
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
            id: 'twenty-third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SINSAL SAN SIMÓN (Del 16 al 18 de julio)',
            image: 'https://fanmusicfest.com/sites/default/files/styles/esc_750x/public/fib_2026_cartel.jpg?itok=_70T9WT3',
            description: '<strong><a href="https://estrellagalicia.es/son/festivales/festival-sinsal/" target="_blank" >SINSAL SAN SIMÓN</a></strong><br><strong>AFORO: 800 _ PRECIO: 40€</strong></br>Hay festivales que empiezan cuando suena el primer acorde en el escenario. El Sinsal SON Estrella Galicia, en cambio, arranca mucho antes: cuando el barco zarpa del puerto de Vigo y se adentra en la ría para poner rumbo a la Isla de San Simón. En ese tramo de mar, con la brisa en la cara y la expectación en la piel, se empieza a amortizar la entrada del festival. El público habla en voz baja, repasa apuestas sobre quién tocará este año, porque nadie —ni siquiera los más fieles— conoce el cartel hasta poner un pie en la isla. Es parte del ritual. Parte de la confianza ciega que este evento, único, lleva más de dos décadas cultivando.<br><strong><a href="https://www.youtube.com/watch?v=nLEsFm9lHeQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-8.62853, 42.30765],
                zoom: 14,
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
            id: 'twenty-fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'BILBAO BBK LIVE (Del 9 al 11 de julio)',
            image: 'https://bilbaobbklive.com/wp-content/uploads/2026/01/BBL26_CARTEL_1X1-4-1.jpg',
            description: '<strong><a href="https://bilbaobbklive.com/" target="_blank" >BILBAO BBK LIVE</a></strong><br><strong>AFORO: 40.000 _ PRECIO: 150€</strong></br>Son veinte años de uno de los festivales más eclécticos de la península. Y este año, estando de aniversario, no va a ser diferente. Lo demuestra una larga lista de primeras novedades que ya han sido confirmadas en todas las redes sociales del festival de forma oficial. Robbie Williams, David Byrne, Lily Allen, IDLES, Interpol, Charlotte de Witte, Richie Hawtin, Alabama Shakes, La M.O.D.A., Dani Fernández, Belén Aguilera, CMAT, Belle And Sebastian, Paris Paloma, Ralphie Choo, Tomora, ZAZ, Soulwax, Nu Genea live, Fatoumata Diawara, Yerai Cortés y muchos más. Puedes ver la lista completa bajo los vídeos.<br><strong><a href="https://www.youtube.com/watch?v=pfwdIuoWjrg" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.96416, 43.25842],
                zoom: 14,
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
            id: 'twenty-fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'VIDA FESTIVAL (Del 2 al 4 de julio)',
            image: 'https://blog.ticketmaster.es/wp-content/uploads/2026/02/Cartell_2026_1x1-1.png',
            description: '<strong><a href="https://www.vidafestival.com/es/" target="_blank" >VIDA FESTIVAL</a></strong><br><strong>AFORO: 10.000 _ PRECIO: 115€</strong></br>El Vida Festival ha anunciado la primera parte de su programación para su próxima edición, que se celebrará del 2 al 4 de julio en, como siempre, Vilanova i la Geltrú (Barcelona). Fatboy Slim, Guitarricadelafuente, Ralphie Choo, Saint Etienne, Amaia, La Ludwig Band, Maria Arnal y Charlotte Cardin encabezan una edición que aún mantiene en reserva un cabeza de cartel para la noche del viernes, además del concierto inaugural y la programación del Vida Club.<br><strong><a href="https://www.youtube.com/watch?v=B94iXw8ma3w" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [1.71392, 41.23986],
                zoom: 14,
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
            id: 'twenty-sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'CRUÏLLA FESTIVAL (Del 8 al 11 de julio)',
            image: 'https://www.cruillabarcelona.com/wp-content/uploads/2025/12/CE26_CartellDies_WebDesktop_ES-800x528.jpg',
            description: '<strong><a href="https://www.cruillabarcelona.com/es/" target="_blank" >CRUÏLLA FESTIVAL</a></strong><br><strong>AFORO: 25.000 _ PRECIO: 100€</strong></br>Tras la exitosa edición de decimoquinto aniversario, el festival barcelonés Cruïlla anuncia los primeros nombres de su regreso, que será en julio, y como de costumbre en el Parc del Fòrum. Apunta los detalles principales: el Cruïlla se llevará a cabo entre los días 8 y 11 de julio de 2026 en el Parc del Fòrum de Barcelona. Teniendo eso como punto de partida, lo siguiente que querrás saber es qué artistas formarán parte del cartel.<br><strong><a href="https://www.youtube.com/watch?v=swcOE2ze9xs" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [2.22648, 41.41176],
                zoom: 14,
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
            id: 'twenty-seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'DREAMBEACH FESTIVAL (Del 31 de julio al 1 de agosto)',
            image: 'https://www.dreambeach.es/wp-content/themes/yootheme/cache/94/DREAMBEACH_phase2_post_2-1-9498e0d3.webp',
            description: '<strong><a href="https://www.dreambeach.es/" target="_blank" >DREAMBEACH FESTIVAL</a></strong><br><strong>AFORO: 55.000 _ PRECIO: 70€</strong></br>Después de más de una década marcando el pulso de la música electrónica en el sur, Dreambeach Festival anuncia un giro clave en su historia. El festival andaluz se trasladará a la Costa del Sol para celebrar su 12ª edición los días 31 de julio y 1 de agosto en el Recinto Ferial de la Avenida Juan Carlos I de Vélez-Málaga, estrenando además una nueva denominación: Dreambeach Costa del Sol.<br><strong><a href="https://www.youtube.com/watch?v=xf-QzgzR4tI" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-1.79439, 37.23562],
                zoom: 14,
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
            id: 'twenty-eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'BLUES CAZORLA (Del 3 al 5 de julio)',
            image: 'https://www.cazorla.es/bluescazorla06/wp-content/uploads/2025/07/01-Cartel-Blues-Cazorla-2025-724x1024.jpg',
            description: '<strong><a href="https://www.cazorla.es/bluescazorla06/" target="_blank" >BLUES CAZORLA</a></strong><br><strong>AFORO: 7.000 _ PRECIO: 75€</strong></br>BluesCazorla, es un festival dinámico, maduro y con un público fiel, que en las 25 ediciones que lleva transcurridas a sabido mezclar la leyenda y el futuro de un estilo musical que año tras año se abre a todo tipo de públicos, creando una afición innata en lo referente a este estilo musical, convirtiendo al blues, de ser un estilo musical minorista para convertirse en un fenómeno de masas que año tras año supera su cota de público llegando en esta edición a conseguir su record particular, el colgado del cartel de «No hay billetes» con más de 20.000 espectadores entre los cuatro escenarios por los que pasaron más de 30 artistas.<br><strong><a href="https://www.youtube.com/watch?v=fRdwtk7CwfM" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.00378, 37.91257],
                zoom: 14,
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
            id: 'twenty-ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FESTIVAL DE ORTIGUEIRA (Del 8 al 12 de julio)',
            image: 'https://festivaldeortigueira.com/wp-content/uploads/2023/08/FestivaldeOrtigueira_2023_dron-1.jpeg',
            description: '<strong><a href="https://festivaldeortigueira.com/es/" target="_blank" >FESTIVAL DE ORTIGUEIRA</a></strong><br><strong>AFORO: 30.000 _ PRECIO: Gratis</strong></br>Cita ineludible del verano y uno de los referentes mundiales del folk, el Festival Ortigueira se ha convertido por méritos propios en uno de los eventos musicales más multitudinarios de toda España. Su magnitud excede ya lo puramente musical, para consolidarse como un espacio libre donde confluyen gentes de todas las tribus llegadas de los más diversos puntos de la geografía. Poco más que ese espíritu de libertad y el carácter folclórico del evento quedan de aquel festival artesanal que nacía en el año 1978, fruto del esfuerzo de la Escola de Gaitas de Ortigueira, liderada en aquel momento por Xavier Garrote. Una idea visionaria que triunfó gracias a la ayuda de toda la Villa y a pesar del entorno oficial poco favorable -tuvo que interrumpirse durante más de un lustro-.<br><strong><a href="https://www.youtube.com/watch?v=oFCEiEvhZaQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-7.85473, 43.68344],
                zoom: 14,
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
            id: 'thirtieth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ROTOTOM SUNSPLASH (Del 17 al 22 de agosto)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2024/12/cartel-festival-rototom-2025-1200x900.jpg',
            description: '<strong><a href="https://rototomsunsplash.com/" target="_blank" >ROTOTOM SUNSPLASH</a></strong><br><strong>AFORO: 60.000 _ PRECIO: 200€</strong></br>El festival internacional Rototom Sunsplash celebrará su 30ª edición del 16 al 23 de agosto de 2025 en el recinto de conciertos de Benicàssim (Castellón). La formación cubana Orishas actuará el viernes 22 de agosto en el Main Stage, dentro de una programación que reúne más de 200 propuestas repartidas en siete escenarios y actividades complementarias como charlas, talleres, arte en directo, sesiones de yoga, agroecología o reggae en familia. El evento se organiza bajo el lema “Celebrating Life”.<br><strong><a href="https://www.youtube.com/watch?v=r0VYAMQN3to" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [0.04885, 40.05050],
                zoom: 14,
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
            id: 'thirtieth-first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SANTANDER MUSIC FESTIVAL (Del 31 de julio al 1 de agosto)',
            image: 'https://santandermusic.es/wp-content/uploads/2026/01/SM26-Cartel-Bandas-AZ-header1920x1080-2026.jpg',
            description: '<strong><a href="https://santandermusic.es/" target="_blank" >SANTANDER MUSIC FESTIVAL</a></strong><br><strong>AFORO: 15.000 _ PRECIO: 50€</strong></br>El Santander Music volverá este próximo verano, durante los días 31 de julio y 1 de agosto, con una edición que ya ha desvelando un primer avance del cartel. El festival contará con un Guitarricadelafuente en pleno momento creativo, consolidado como una de las voces más personales del panorama nacional, mientras que Rigoberta Bandini volverá a los escenarios con un directo arrollador y una colección de canciones que ya forman parte del imaginario colectivo. Junto a ellos estarán Rusowsky, figura clave del nuevo pop electrónico español, y Siloé, uno de los proyectos más sólidos del actual pop alternativo de guitarras y electrónica.<br><strong><a href="https://www.youtube.com/watch?v=ujXqZ-iL0VU" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.77206, 43.46866],
                zoom: 14,
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
            id: 'thirtieth-second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ARENAL SOUND (Del 30 de julio al 2 de agosto)',
            image: 'https://festivalea.es/wp-content/uploads/2026/01/arenal-sound-2026.jpg',
            description: '<strong><a href="https://www.arenalsound.com/" target="_blank" >ARENAL SOUND</a></strong><br><strong>AFORO: 60.000 _ PRECIO: 40€</strong></br>La organización del Arenal Sound 2026 ha comunicado que regresará a la localidad de Burriana, Castellón, del 30 de julio al 2 de agosto de 2026. El festival Arenal Sound es un festival de música de música independiente, música electrónica y mestizaje, que habitualmente se ha celebrado en la Playa El Arenal, en la localidad de Burriana (provincia de Castellón, Comunidad Valenciana, España) cada verano desde el año 2010. El Arenal Sound, también llamado AS, se caracteriza por su gran afluencia de jóvenes y se diferencia de otros festivales por su cercanía a la playa al tener uno de sus escenarios sobre la misma arena. Por su accesible precio frente a otros festivales, éste se esta convirtiendo en uno de los referentes en la temporada estival nacional.<br><strong><a href="https://www.youtube.com/watch?v=Wh65s-EOv9I" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-0.06700, 39.86440],
                zoom: 14,
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
            id: 'thirtieth-third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'MEDUSA SUNBEACH (Del 13 al 17 de agosto)',
            image: 'https://www.medusasunbeach.com/images/2026/lineup/medusa-line-up-2026.jpg',
            description: '<strong><a href="https://www.medusasunbeach.com/" target="_blank" >MEDUSA SUNBEACH</a></strong><br><strong>AFORO: 70.000 _ PRECIO: 100€</strong></br>La playa de Cullera, en la Comunidad Valenciana, será nuevamente el epicentro de la escena electrónica este verano. Del 13 al 17 de agosto de 2026, el Medusa Sunbeach Festival reunirá a los mejores DJs del mundo para cinco días de música, arte y libertad. Desde su primera edición en 2014, Medusa se ha consolidado como uno de los festivales más importantes de Europa. Cada año atrae a decenas de miles de asistentes con una puesta en escena impresionante y una programación que abarca EDM, techno, house y hardstyle.<br><strong><a href="https://www.youtube.com/watch?v=T5p4YftuI9g" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-0.24470, 39.15407],
                zoom: 14,
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
            id: 'thirtieth-fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'CANELA PARTY (Del 27 al 29 de agosto)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2025/08/canelaparty-2026.jpg',
            description: '<strong><a href="https://canelaparty.com/" target="_blank" >CANELA PARTY</a></strong><br><strong>AFORO: 4.000 _ PRECIO: 65€</strong></br>El Canela Party cierra su programación con más de una docena de nombres. Esta última tanda de confirmaciones cuenta con un gran repertorio de artistas internacionales como Basement, DITZ, Melodys Echo Chamber, Nation of Language, The Beths, Unknown Mortal Orchestra, Upchuck y Weird Nightmare. El cartel lo completan artistas del panorama nacional, con nombres tan variados como Baiuca, FUET!, CERVATANA, Gazelle, Sandré y Speed.<br><strong><a href="https://www.youtube.com/watch?v=pQuDbHoxzjs" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-4.51179, 36.62098],
                zoom: 14,
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
            id: 'thirtieth-fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'GRANADA SOUND (11 y 12 de septiembre)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2024/12/granada-sound-2026.jpg',
            description: '<strong><a href="https://granadasound.com/" target="_blank" >GRANADA SOUND</a></strong><br><strong>AFORO: 25.000 _ PRECIO: 60€</strong></br>Granada Sound es la cita perfecta para despedir el verano por todo lo alto en un festival que se fue consolidando año tras año como una cita ineludible del panorama indie rock, con algunas pinceladas de rap y mestizaje. Un festival urbano de música indie y rock que se celebra en el Cortijo del Conde, ciudad de Granada. Durante dos jornadas se celebra un encuentro musical que une a amigos y familiares. Es definitivamente el encuentro indispensable de los amantes de la música, así como de los aficionados a la gastronomía granadina y del paisaje andaluz.<br><strong><a href="https://www.youtube.com/watch?v=nuOrg4fioqA" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-3.65598, 37.20072],
                zoom: 14,
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
            id: 'thirtieth-sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'EBROVISION (Del 3 al 6 de septiembre)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2025/09/ebrovision-2026.jpg',
            description: '<strong><a href="https://ebrovision.com/" target="_blank" >EBROVISION</a></strong><br><strong>AFORO: 6.500 _ PRECIO: 80€</strong></br>El Festival Ebrovisión es un evento cultural de música indie y alternativa que se celebra anualmente en Miranda de Ebro. Destacado por su ambiente cercano y su oferta artística diversa, este festival combina conciertos de bandas emergentes y consolidadas tanto nacionales como internacionales. Además de su cartel musical, que ha incluido a artistas como Vetusta Morla y Love of Lesbian, el evento ofrece actividades culturales como sesiones gastronómicas, exposiciones y talleres. Ebrovisión es una celebración única que impulsa tanto el turismo local como el talento artístico de la región.<br><strong><a href="https://www.youtube.com/watch?v=8dFLB9i2JWY" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.93218, 42.67934],
                zoom: 14,
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
            id: 'thirtieth-seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'BIME LIVE (Del 26 al 29 de octubre)',
            image: 'https://exileshmagazine.com/wp-content/uploads/2022/10/BIME-Live-Cartel-717x1024.png',
            description: '<strong><a href="https://bime.org/" target="_blank" >BIME LIVE</a></strong><br><strong>AFORO: 26.000 _ PRECIO: 180€</strong></br>BIME, el encuentro de referencia de la industria musical iberoamericana, considerado ya el cuarto evento más importante a nivel internacional del sector, ha dado a conocer hoy los últimos detalles de su programación Pro y Live para la que será su próxima cita en Bilbao, que se celebrará del 28 al 31 de octubre y que anticipa una decimotercera edición muy especial.<br><strong><a href="https://www.youtube.com/watch?v=YhP_YA9nmsQ" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-2.98945, 43.28808],
                zoom: 14,
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
            id: 'thirtieth-eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MONKEY WEEK (Del 20 al 22 de noviembre)',
            image: 'https://www.dodmagazine.es/wp-content/uploads/2025/06/monkey-week-2025.jpg',
            description: '<strong><a href="https://monkeyweek.org/" target="_blank" >MONKEY WEEK</a></strong><br><strong>AFORO: 4.000 _ PRECIO: 65€</strong></br>Es cierto que volver a casa no implica, en muchas ocasiones, un marco concreto, un entorno determinado. Ese sentirse en casa, en gran medida, lo da la gente que nos rodea y abraza… Y eso también lo tuvimos en Sevilla, además de esa maravillosa Alameda y todas sus salas, bares, teatros y rincones mágicos made in Monkey. Estuvimos de lujo a los dos lados del Guadalquivir, pero, me van a perdonar, cuando uno ve la Bahía de Cádiz por la ventanilla del avión y comienza a callejear luego por El Puerto de Santa María… Ay, Sevilla, gracias por todo y volveremos siempre, pero ¡hogar, dulce hogar! Y es que, aunque no faltamos ningún junio a los brazos del Monkey chico, como dice esa ranchera eterna, el lado izquierdo del pecho siempre anda alborotado, quiere más y manda: “le hago caso al corazón, / me muero por volver… / Y volver, volver, volver…”.<br><strong><a href="https://www.youtube.com/watch?v=iOqLQwhUNLY" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-6.22803, 36.59536],
                zoom: 14,
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
            id: 'thirtieth-ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'PURPLE WEEKEND (Del 5 al 8 de diciembre)',
            image: 'https://crazyminds.es/wp-content/uploads/PURPLE-WEEKEND-2022.jpg',
            description: '<strong><a href="http://purpleweekendoficial.com/" target="_blank" >PURPLE WEEKEND</a></strong><br><strong>AFORO: 2.000 _ PRECIO: 80€</strong></br>Decir que, hoy en día, hay un evento musical en España cuya longevidad comienza a acercarse a las cuatro décadas de vida es hablar de casos sumamente concretos como el del Purple Weekend Estrella Galicia. Y es que, tal como quedó demostrado entre el 5 y el 8 de diciembre en León, ‘Purple Weekend’ es ya una marca identificativa para con una forma de sentir la música ajena a los planteamientos clónicos en modo fastfood que condiciona a la mayoría de festivales de nuestro país.<br><strong><a href="https://www.youtube.com/watch?v=CwZzFOlZGxA" target="_blank" >AFTERMOVIE</a></strong></br>',
            location: {
                center: [-5.58301, 42.60712],
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
