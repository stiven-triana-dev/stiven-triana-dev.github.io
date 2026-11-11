export const contacto = {
  correo: 'stivenxtriana.dev@gmail.com',
  whatsapp: 'https://wa.me/573052770372?text=Hola%20Stiven%2C%20vi%20tu%20portafolio',
  linkedin: 'https://www.linkedin.com/in/stiven-triana-dev',
  github: 'https://github.com/stiven-triana-dev',
  cv: 'HV_Neider_Stiven_Triana_Neira.pdf',
}

// Clases de prueba reales de UniGest (src/test)
export const clasesDePrueba = [
  'CalculadoraNotasTest',
  'CalificacionServiceTest',
  'CuentaAccesoServiceTest',
  'DocenteAutorizacionTest',
  'DocenteServiceTest',
  'EstudianteAutorizacionTest',
  'EstudianteServiceTest',
  'EvaluacionServiceTest',
  'GrupoServiceTest',
  'MatriculaIntegracionTest',
  'MatriculaServiceTest',
  'MiEspacioAutorizacionTest',
  'MiEspacioServiceTest',
  'ReporteAcademicoServiceTest',
  'SecurityConfigTest',
  'SesionSeguridadTest',
]

export const cifras = [
  { valor: '92', texto: 'pruebas automatizadas en UniGest, 0 fallos' },
  { valor: '3', texto: 'proyectos propios, uno publicado en línea' },
  { valor: '+2', texto: 'años en un semillero de investigación' },
  { valor: '2', texto: 'ponencias en encuentros de semilleros' },
]

export const proyectos = [
  {
    id: 'unigest',
    estado: 'Código + CI',
    nombre: 'UniGest',
    tipo: 'Sistema de gestión académica',
    problema:
      'Una universidad necesita manejar matrículas, grupos, evaluaciones y boletines sin que un estudiante vea lo que solo le corresponde a un docente o a la administración.',
    solucion:
      'Una aplicación web con tres espacios de trabajo —administración, docencia y estudiantes— donde cada rol solo accede a lo suyo.',
    decisiones: [
      'Control de acceso por roles con Spring Security, contraseñas cifradas con BCrypt y protección CSRF.',
      '92 pruebas automatizadas con JUnit, incluidas pruebas de autorización por rol, que corren en GitHub Actions contra PostgreSQL en cada cambio.',
      'Esquema de base de datos versionado con migraciones Flyway, para que cualquier entorno quede igual.',
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'JUnit', 'GitHub Actions'],
    imagenes: [
      { src: 'img/unigest-panel.png', alt: 'Panel de administración de UniGest con el menú de estudiantes, docentes, grupos y matrículas' },
      { src: 'img/unigest-portal-docente.png', alt: 'Portal docente de UniGest' },
      { src: 'img/unigest-boletin.png', alt: 'Boletín de calificaciones del estudiante en UniGest' },
    ],
    enlaces: [{ texto: 'Ver el código en GitHub', url: 'https://github.com/stiven-triana-dev/UniGest' }],
  },
  {
    id: 'visagshop',
    estado: 'En línea',
    nombre: 'VisagShop',
    tipo: 'Tienda virtual de moda urbana',
    problema:
      'Proyecto integrador para una tienda de ropa urbana de Lebrija que vende por WhatsApp: el cliente necesitaba ver precios y tallas y armar su pedido, y la tienda necesitaba registrar y seguir esos pedidos.',
    solucion:
      'Una tienda en línea con 108 productos, buscador, carrito y cuentas de cliente. Cada pedido se guarda con un número (VS-1001) antes de enviarse por WhatsApp, y un panel permite administrar productos, cambiar el estado de los pedidos y exportarlos a Excel.',
    decisiones: [
      'Pasé la persistencia de archivos JSON a PostgreSQL con Sequelize (12 tablas relacionadas) y migré los datos que ya estaban en producción sin perder clientes, sesiones ni fotos.',
      'Validación con las mismas reglas en el servidor (express-validator) y en el navegador; el total del pedido se calcula siempre en el servidor con los precios de la base.',
      '28 pruebas automatizadas, incluidas pruebas contra PostgreSQL real de la migración, los scripts SQL y el CRUD, que corren en GitHub Actions en cada cambio.',
    ],
    stack: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'Sequelize', 'express-validator', 'GitHub Actions', 'Render'],
    imagenes: [
      { src: 'img/visagshop-home.png', alt: 'Página de inicio de VisagShop con el título Viste a tu manera, un jean y una gorra' },
    ],
    enlaces: [
      { texto: 'Abrir la tienda', url: 'https://visagshop.onrender.com', nota: 'Puede tardar unos segundos en despertar' },
      { texto: 'Ver el código en GitHub', url: 'https://github.com/stiven-triana-dev/VisagShop' },
    ],
  },
  {
    id: 'muelitas',
    estado: 'Investigación',
    nombre: 'Mundo Muelitas',
    tipo: 'Videojuego educativo del semillero GIBD-SI',
    problema:
      'Según el Estudio Nacional de Salud Bucal (ENSAB IV), cerca de un tercio de los niños de 1 a 5 años en Colombia ha tenido caries. El semillero propuso enseñar hábitos de higiene oral jugando.',
    solucion:
      'Un serious game tipo arcade en Unity para niños de 5 a 8 años. Mi parte, en un equipo de tres estudiantes: los sprites, las animaciones de movimiento de los personajes y el escenario del nivel 1.',
    decisiones: ['Desarrollo por iteraciones con la metodología SUM y presentación del proyecto como ponente en 2 encuentros de semilleros.'],
    stack: ['Unity', 'Inkscape', 'Blender', 'Metodología SUM'],
    imagenes: [],
    enlaces: [],
  },
]

export const principios = [
  {
    titulo: 'Prevenir antes que corregir',
    texto:
      'Fui salvavidas un año: el trabajo era ver el riesgo antes de que pasara algo. En el código hago lo mismo con pruebas automatizadas e integración continua.',
  },
  {
    titulo: 'Seguridad desde el diseño',
    texto:
      'Roles, contraseñas cifradas, protección CSRF y validación de entradas se piensan desde el principio, no al final.',
  },
  {
    titulo: 'IA con criterio',
    texto:
      'Uso IA para aprender, depurar y documentar más rápido. Reviso y entiendo cada línea que entra a mis proyectos.',
  },
]

// Línea de tiempo: es una secuencia real, por eso va con fechas
export const trayectoria = [
  { fecha: 'Feb. 2024 – hoy', titulo: 'Ingeniería de Sistemas · UNISANGIL', texto: 'Sexto semestre. Grado previsto: diciembre de 2027.' },
  { fecha: 'May. 2024 – hoy', titulo: 'Semillero de investigación GIBD-SI', texto: 'Grupo HYDRA. Proyecto Mundo Muelitas y 2 ponencias en encuentros de semilleros.' },
  { fecha: 'Ene. 2025 – Ene. 2026', titulo: 'Salvavidas · El Castillo Resort', texto: 'Supervisión de la seguridad de los usuarios, prevención de riesgos y respuesta ante emergencias.' },
  { fecha: 'Ene. 2026 – Nov. 2026', titulo: 'Mesero · MonteMalva y Hype Market', texto: 'Atención al cliente en alta demanda, coordinando pedidos con cocina y el resto del equipo.' },
]

export const habilidades = [
  { grupo: 'Lenguajes', items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { grupo: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Node.js', 'Express', 'API REST'] },
  { grupo: 'Datos', items: ['PostgreSQL', 'Modelado relacional', 'Flyway'] },
  { grupo: 'Calidad', items: ['JUnit', 'Pruebas automatizadas', 'GitHub Actions'] },
  { grupo: 'Herramientas', items: ['Git', 'GitHub', 'Maven', 'VS Code', 'Render', 'Unity'] },
]
