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
        download: 'downloads/dist.pdf',
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
        'Aldana Pulido, D. A. (2022). Diseño de un sistema de riego automatizado para huertas caseras con IoT. Revista Sennova: Revista Del Sistema De Ciencia, Tecnología E Innovación.',
      link: '',
    },
    {
      referencia:
        'Huertos Urbanos Benimaclet. (2025). Sistemas de riego para huertos urbanos: opciones, instalación y eficiencia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Normativa ambiental en agricultura.',
      link: '',
    },
    {
      referencia:
        'Observatorio Ambiental de Bogotá. (s. f.). Lineamientos para el programa de agricultura urbana y periurbana agroecológica.',
      link: '',
    },
    {
      referencia:
        'Ochoa Sanchez, J. A., Riaño García, K. D., & Reyes Rincón, L. D. (2024). Prototipo de Riego para un Sistema de Agricultura Urbana Controlado por Electrónica Programable. CON-CIENCIA Y TÉCNICA, 8(1), 13–15.',
      link: '',
    },
    {
      referencia:
        'Osorio Cardenas, M. (2025). Sistemas de Riego Inteligente para Agricultura Urbana.',
      link: '',
    },
    {
      referencia:
        'Resolución 30021 de 2017 [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para la Certificación en Buenas Prácticas Agrícolas en producción primaria de vegetales y otras especies para consumo humano. 28 de abril de 2017.',
      link: '',
    },
    {
      referencia:
        'Resolución 082394 de 2020 [Instituto Colombiano Agropecuario]. Por medio de la cual se Modifica los artículos 2, 3, 4, 12, y 14 de la Resolución 30021 de 2017. 29 de diciembre de 2020.',
      link: '',
    },
    {
      referencia: 'SafetyYA. (2025). Normas técnicas colombianas en SST.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
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
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
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
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
