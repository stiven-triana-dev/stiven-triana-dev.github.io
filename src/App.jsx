import { useEffect, useState } from 'react'
import { contacto, clasesDePrueba, cifras, proyectos, principios, trayectoria, habilidades } from './data.js'

const base = import.meta.env.BASE_URL

function prefiereMenosMovimiento() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* Reproduce la corrida real de pruebas de UniGest una sola vez al cargar */
function CorridaDePruebas() {
  const total = clasesDePrueba.length
  const [hechas, setHechas] = useState(() => (prefiereMenosMovimiento() ? total : 0))

  useEffect(() => {
    if (hechas >= total) return
    const t = setTimeout(() => setHechas((n) => n + 1), hechas === 0 ? 700 : 105)
    return () => clearTimeout(t)
  }, [hechas, total])

  const terminado = hechas >= total

  return (
    <figure className="corrida" aria-label="Pruebas automatizadas de UniGest: 92 pruebas, 0 fallos">
      <div className="corrida__barra" aria-hidden="true">
        <span className="corrida__puntos">
          <i />
          <i />
          <i />
        </span>
        <span>unigest — mvn test</span>
      </div>
      <pre className="corrida__salida" aria-hidden="true">
        {clasesDePrueba.slice(0, hechas).map((c) => (
          <span key={c}>
            <span className="c-ok">✓</span> {c}
            {'\n'}
          </span>
        ))}
        {terminado ? (
          <>
            {'\n'}
            <span className="c-res">Tests run: 92, Failures: 0, Errors: 0</span>
            {'\n'}
            <span className="c-build">BUILD SUCCESS</span>
          </>
        ) : (
          <span className="c-cursor">▍</span>
        )}
      </pre>
    </figure>
  )
}

function Tema() {
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem('tema') || null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (tema) document.documentElement.dataset.theme = tema
    else delete document.documentElement.dataset.theme
    try {
      if (tema) localStorage.setItem('tema', tema)
    } catch {
      /* sin almacenamiento: el tema sigue al sistema */
    }
  }, [tema])

  const oscuro =
    tema === 'dark' || (!tema && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <button className="tema" type="button" onClick={() => setTema(oscuro ? 'light' : 'dark')} aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
      {oscuro ? (
        <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor" /><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></g></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" /></svg>
      )}
    </button>
  )
}

function Proyecto({ p, grande }) {
  const imagen = p.imagenes[0]
  return (
    <article className={`tarjeta proyecto ${grande ? 'proyecto--grande' : ''}`} id={p.id}>
      {imagen && (
        <div className="proyecto__imagen">
          <img src={base + imagen.src} alt={imagen.alt} loading="lazy" />
        </div>
      )}
      <div className="proyecto__texto">
        <span className="estado">{p.estado}</span>
        <h3>{p.nombre}</h3>
        <p className="proyecto__tipo">{p.tipo}</p>
        <p>{p.problema}</p>
        <p>{p.solucion}</p>
        {grande && (
          <ul className="decisiones">
            {p.decisiones.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
        <p className="stack">{p.stack.join(' / ')}</p>
        {p.enlaces.length > 0 && (
          <p className="proyecto__enlaces">
            {p.enlaces.map((e) => (
              <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer" title={e.nota}>
                {e.texto}
              </a>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

export default function App() {
  const [principal, ...otros] = proyectos

  return (
    <>
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>

      <header className="nav">
        <a className="marca" href="#inicio" aria-label="Inicio">
          <span className="marca__logo" aria-hidden="true">ST</span>
          <span>Stiven Triana</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#proyectos">Proyectos</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <Tema />
        <a className="boton boton--oscuro nav__cta" href={contacto.whatsapp} target="_blank" rel="noopener noreferrer">
          Escríbeme
        </a>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero__texto">
            <p className="disponible">
              <span className="disponible__punto" aria-hidden="true" />
              Disponible para empleo o prácticas
            </p>
            <p className="hero__nombre">Neider Stiven Triana Neira</p>
            <h1>Backend que se prueba antes de llegar a producción.</h1>
            <p className="hero__intro">
              Desarrollador junior en San Gil, Santander. Construyo con Java, Spring Boot y PostgreSQL, y no doy nada por terminado
              sin pruebas automatizadas y seguridad pensada desde el inicio.
            </p>
          </div>
          <CorridaDePruebas />
        </section>

        <section className="publicos" aria-label="Cómo puedo ayudarte">
          <div className="tarjeta publico">
            <h2>¿Buscas un practicante o un junior?</h2>
            <p>Estudio sexto semestre de Ingeniería de Sistemas y puedo trabajar en remoto, híbrido o presencial.</p>
            <a className="boton boton--acento" href={contacto.whatsapp} target="_blank" rel="noopener noreferrer">
              Escríbeme por WhatsApp
            </a>
          </div>
          <div className="tarjeta publico">
            <h2>¿Revisas candidatos?</h2>
            <p>Backend con Java y Node.js, pruebas con JUnit, integración continua y más de dos años en investigación.</p>
            <div className="publico__acciones">
              <a className="boton" href={base + contacto.cv} download>
                Descargar hoja de vida
              </a>
              <a className="enlace" href="#proyectos">
                Ver proyectos
              </a>
            </div>
          </div>
        </section>

        <section className="cifras" aria-label="En números">
          {cifras.map((c) => (
            <div key={c.texto} className="cifra">
              <strong>{c.valor}</strong>
              <span>{c.texto}</span>
            </div>
          ))}
        </section>

        <section className="seccion" id="proyectos" aria-labelledby="t-proyectos">
          <h2 id="t-proyectos" className="seccion__titulo">Qué he construido</h2>
          <Proyecto p={principal} grande />
          <div className="proyectos__fila">
            {otros.map((p) => (
              <Proyecto key={p.id} p={p} />
            ))}
          </div>
          <p className="seccion__nota">
            El resto de mi código está en{' '}
            <a href={contacto.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>

        <section className="seccion" aria-labelledby="t-principios">
          <h2 id="t-principios" className="seccion__titulo">Cómo trabajo</h2>
          <div className="principios">
            {principios.map((pr) => (
              <div key={pr.titulo} className="principio">
                <h3>{pr.titulo}</h3>
                <p>{pr.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="seccion" id="trayectoria" aria-labelledby="t-trayectoria">
          <h2 id="t-trayectoria" className="seccion__titulo">Trayectoria</h2>
          <ol className="linea">
            {trayectoria.map((t) => (
              <li key={t.titulo}>
                <span className="linea__fecha">{t.fecha}</span>
                <div>
                  <h3>{t.titulo}</h3>
                  <p>{t.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="habilidades">
            {habilidades.map((h) => (
              <div key={h.grupo}>
                <h3>{h.grupo}</h3>
                <p>{h.items.join(', ')}</p>
              </div>
            ))}
            <div>
              <h3>Idiomas</h3>
              <p>Español nativo, inglés A2 en formación</p>
            </div>
          </div>
        </section>

        <section className="contacto" id="contacto" aria-labelledby="t-contacto">
          <h2 id="t-contacto">Construyamos algo que funcione desde el primer día.</h2>
          <p>Escríbeme para una vacante, una práctica o un proyecto.</p>
          <div className="contacto__acciones">
            <a className="boton boton--acento" href={contacto.whatsapp} target="_blank" rel="noopener noreferrer">
              Escríbeme por WhatsApp
            </a>
            <a className="boton" href={`mailto:${contacto.correo}`}>
              {contacto.correo}
            </a>
          </div>
          <p className="contacto__redes">
            <a href={contacto.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={contacto.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={base + contacto.cv} download>Hoja de vida</a>
          </p>
        </section>
      </main>

      <footer className="pie">
        <p>Neider Stiven Triana Neira, San Gil, Colombia</p>
      </footer>
    </>
  )
}
