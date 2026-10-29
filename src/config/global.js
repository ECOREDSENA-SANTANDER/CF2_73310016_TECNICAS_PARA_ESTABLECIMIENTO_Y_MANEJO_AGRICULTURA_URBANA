export default {
  global: {
    Name:
      'Mantenimiento, control y evaluación de cultivos en agricultura urbana',
    Description:
      'El mantenimiento, control y evaluación de cultivos constituyen procesos fundamentales para garantizar el éxito en agricultura urbana. Este componente desarrolla competencias para el mantenimiento, control y evaluación de cultivos en agricultura urbana mediante la aplicación de técnicas de riego, manejo de normativa, seguimiento productivo y uso de registros, con el fin de garantizar sistemas sostenibles, eficientes y acordes a criterios técnicos y ambientales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mantenimiento del cultivo en agricultura urbana ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Riego',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo normativo (seguridad, ambiental, fitosanitaria)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Labores culturales y fertilización',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Control y evaluación del proceso productivo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Registros y seguimiento ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis e identificación de problemas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mejora continua e implementación de acciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación del sistema productivo',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/73310016_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Análisis del cultivo',
      significado:
        'Evaluación del estado general del cultivo considerando crecimiento, sanidad y productividad.',
    },
    {
      termino: 'Buenas Prácticas Agrícolas (BPA)',
      significado:
        'Conjunto de normas y recomendaciones para garantizar producción segura, sostenible y de calidad.',
    },
    {
      termino: 'Clasificación de residuos',
      significado:
        'Proceso de separación de desechos según su tipo (orgánicos, reciclables, peligrosos).',
    },
    {
      termino: 'Control del proceso productivo',
      significado:
        'Seguimiento continuo de las actividades del cultivo para asegurar el cumplimiento del plan establecido.',
    },
    {
      termino: 'Desempeño productivo',
      significado:
        'Nivel de eficiencia y resultados obtenidos en la producción agrícola.',
    },
    {
      termino: 'Disposición de residuos',
      significado:
        'Manejo adecuado de los desechos generados para minimizar impactos ambientales.',
    },
    {
      termino: 'Evaluación de indicadores',
      significado:
        'Proceso de medición y análisis de variables clave del cultivo.',
    },
    {
      termino: 'Frecuencia de riego',
      significado:
        'Intervalo de tiempo con el que se aplica agua al cultivo según sus necesidades.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Efecto que generan las actividades agrícolas sobre el entorno natural.',
    },
    {
      termino: 'Inspección del cultivo',
      significado:
        'Revisión periódica para detectar plagas, enfermedades o deficiencias.',
    },
    {
      termino: 'Manejo integrado de plagas (MIP)',
      significado:
        'Estrategia que combina métodos biológicos, culturales y químicos para el control de plagas.',
    },
    {
      termino: 'Plan de producción',
      significado:
        'Documento que organiza y programa las actividades agrícolas a realizar.',
    },
    {
      termino: 'Prevención de riesgos laborales',
      significado:
        'Acciones orientadas a evitar accidentes y enfermedades en el trabajo agrícola.',
    },
    {
      termino: 'Rendimiento del cultivo',
      significado:
        'Cantidad de producción obtenida en un área o sistema determinado.',
    },
    {
      termino: 'Trazabilidad agrícola',
      significado:
        'Registro detallado del proceso productivo que permite hacer seguimiento a cada etapa del cultivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldana Pulido, D. A. (2022). Diseño de un sistema de riego automatizado para huertas caseras con IoT. Revista Sennova: Revista del Sistema de Ciencia, Tecnología e Innovación.',
      link: '',
    },
    {
      referencia:
        'Decreto 948 de 1995. Por el cual se reglamentan, parcialmente, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la prevención y control de la contaminación atmosférica y la protección de la calidad del aire. 5 de junio de 1995.',
      link: '',
    },
    {
      referencia:
        'Decreto 4741 de 2005. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. 30 de diciembre de 2005.',
      link: '',
    },
    {
      referencia:
        'Decreto 3930 de 2010. Por el cual se reglamenta parcialmente el Título I de la Ley 9 de 1979, así como el Capítulo II del Título VI, Parte III, Libro II del Decreto Ley 2811 de 1974 en cuanto a usos del agua y residuos líquidos y se dictan otras disposiciones. 25 de octubre de 2010.',
      link: '',
    },
    {
      referencia:
        'Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. 26 de mayo de 2015.',
      link: '',
    },
    {
      referencia:
        'Huertos Urbanos Benimaclet. (2025, 5 de agosto). Sistemas de riego para huertos urbanos: opciones, instalación y eficiencia.',
      link: '',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental (SINA) y se dictan otras disposiciones. 22 de diciembre de 1993.',
      link: '',
    },
    {
      referencia:
        'Ley 373 de 1997. Por la cual se establece el programa para el uso eficiente y ahorro del agua. 6 de junio de 1997.',
      link: '',
    },
    {
      referencia:
        'Observatorio Ambiental de Bogotá. (2015, 11 de septiembre). Se establecen lineamientos para el programa de agricultura urbana y periurbana agroecológica.',
      link: '',
    },
    {
      referencia:
        'Ochoa Sánchez, J. A., Riaño García, K. D., & Reyes Rincón, L. D. (2024). Prototipo de riego para un sistema de agricultura urbana controlado por electrónica programable. CON-CIENCIA Y TÉCNICA, 8(1), 13–15.',
      link: '',
    },
    {
      referencia:
        'Osorio Cárdenas, M. (2025). Sistemas de riego inteligente para agricultura urbana. Universidad Pontificia Bolivariana.',
      link: '',
    },
    {
      referencia:
        'Resolución 30021 de 2017 [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para la certificación en buenas prácticas agrícolas en producción primaria de vegetales y otras especies para consumo humano. 28 de abril de 2017.',
      link: '',
    },
    {
      referencia:
        'Resolución 2184 de 2019 [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se modifica la Resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones. 26 de diciembre de 2019.',
      link: '',
    },
    {
      referencia:
        'Resolución 082394 de 2020 [Instituto Colombiano Agropecuario]. Por medio de la cual se modifican los artículos 2, 3, 4, 12 y 14 de la Resolución 30021 de 2017. 29 de diciembre de 2020.',
      link: '',
    },
    {
      referencia:
        'SafetYA. (2025, 4 de junio). Normas técnicas colombianas en SST.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
