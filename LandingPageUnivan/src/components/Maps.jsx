import { useState } from 'react'
import styles from './Maps.module.scss'

const endpoints = [
  {
    method: 'POST',
    path: '/api/viagens/{id}/localizacao',
    desc: 'Motorista envia posição atual (latitude + longitude)',
    who: 'Motorista',
    request: `{
  "latitude": -27.1007,
  "longitude": -52.6155
}`,
    response: `{
  "viagemId": 11,
  "latitude": -27.1007,
  "longitude": -52.6155,
  "atualizadoEm": "2026-07-02T08:17:42Z"
}`,
  },
  {
    method: 'GET',
    path: '/api/viagens/{id}/localizacao',
    desc: 'Passageiro consulta posição da van em tempo real',
    who: 'Aluno',
    request: null,
    response: `{
  "viagemId": 11,
  "latitude": -27.1007,
  "longitude": -52.6155,
  "atualizadoEm": "2026-07-02T08:17:42Z"
}`,
  },
  {
    method: 'GET',
    path: '/api/viagens/{id}/rota',
    desc: 'Retorna todos os pontos de coleta e paradas com coordenadas GPS',
    who: 'Aluno / Motorista',
    request: null,
    response: `{
  "viagemId": 11,
  "pontosColeta": [
    { "id": 1, "nome": "Trevo de Chapecó", "latitude": -27.1050, "longitude": -52.6200 },
    { "id": 2, "nome": "Xaxim - Terminal",  "latitude": -26.9612, "longitude": -52.5391 }
  ],
  "pontosParada": [
    { "id": 3, "nome": "UFFS Chapecó", "latitude": -27.0843, "longitude": -52.6247 }
  ]
}`,
  },
]

function SwaggerEndpoints() {
  const [open, setOpen] = useState(null)

  const toggle = (path) => setOpen(prev => prev === path ? null : path)

  return (
    <div className={styles.swagger}>
      <h3 className={styles.swaggerTitle}>Endpoints de localização</h3>
      <div className={styles.swaggerList}>
        {endpoints.map(e => {
          const isOpen = open === e.path
          return (
            <div key={e.path} className={`${styles.swaggerItem} ${isOpen ? styles.swaggerOpen : ''}`}>
              {/* header clicável */}
              <button className={styles.swaggerHeader} onClick={() => toggle(e.path)}>
                <span className={`${styles.swaggerMethod} ${styles[e.method.toLowerCase()]}`}>{e.method}</span>
                <code className={styles.swaggerPath}>{e.path}</code>
                <span className={styles.swaggerDesc}>{e.desc}</span>
                <span className={styles.swaggerWho}>{e.who}</span>
                <span className={styles.swaggerChevron}>{isOpen ? '▲' : '▼'}</span>
              </button>

              {/* body expandido */}
              {isOpen && (
                <div className={styles.swaggerBody}>
                  {e.request && (
                    <div className={styles.swaggerBlock}>
                      <span className={styles.swaggerBlockLabel}>Request Body</span>
                      <pre className={styles.swaggerJson}>{e.request}</pre>
                    </div>
                  )}
                  <div className={styles.swaggerBlock}>
                    <span className={styles.swaggerBlockLabel}>
                      <span className={styles.status200}>200</span> Response
                    </span>
                    <pre className={styles.swaggerJson}>{e.response}</pre>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const steps = [
  {
    n: '01',
    title: 'Motorista transmite a posição',
    body: 'Durante a viagem (status Em Curso), o app do motorista chama periodicamente POST /api/viagens/{id}/localizacao, enviando latitude e longitude atuais. O backend faz um upsert na tabela LocalizacaoViagem — um único registro por viagem, sempre sobrescrito com a posição mais recente.',
  },
  {
    n: '02',
    title: 'Passageiro consulta em tempo real',
    body: 'O app do aluno faz polling em GET /api/viagens/{id}/localizacao e recebe latitude, longitude e o timestamp da última atualização. Essas coordenadas são plotadas no Google Maps, exibindo o ícone da van em movimento sobre o mapa.',
  },
  {
    n: '03',
    title: 'Rota dinâmica com pontos de embarque',
    body: 'O endpoint GET /api/viagens/{id}/rota retorna todos os PontosColeta (pontos de embarque dos passageiros) e PontosParada (paradas intermediárias) com suas coordenadas GPS. O app usa esses dados para desenhar a rota completa no mapa e indicar onde cada aluno será coletado.',
  },
  {
    n: '04',
    title: 'Filtro pós-lock na rota',
    body: 'Antes do lock, a rota mostra pontos de todos os agendamentos (Pendente + Confirmado + Embarcado). Após o lock, apenas passageiros Confirmado + Embarcado aparecem — quem não confirmou a tempo é removido automaticamente da rota ativa, otimizando o trajeto do motorista.',
  },
]

export default function Maps() {
  return (
    <section id="maps" className={styles.section}>
      <div className="section-wrapper">
        <div className={styles.twoCol}>
          {/* Left: text content */}
          <div className={styles.content}>
            <div className={styles.header}>
              <span className="badge badge-blue">Rastreamento em Tempo Real</span>
              <h2>Integração com Google Maps</h2>
              <p>
                A localização da van é transmitida pelo motorista e consumida pelo
                passageiro em tempo real. O sistema combina GPS, pontos de embarque
                georreferenciados e filtros de lock para montar uma rota sempre atualizada.
              </p>
            </div>
            <div className={styles.steps}>
              {steps.map(s => (
                <div key={s.n} className={styles.step}>
                  <div className={styles.stepNumber}>{s.n}</div>
                  <div className={styles.stepBody}>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual map mockup */}
          <div className={styles.mapMockup}>
            <div className={styles.mapHeader}>
              <span className={styles.mapTitle}>🗺️ Rota ao Vivo</span>
              <span className={styles.mapLive}>AO VIVO</span>
            </div>
            <div className={styles.mapArea}>
              {/* SVG map illustration */}
              <svg viewBox="0 0 380 320" className={styles.mapSvg}>
                {/* Map background */}
                <rect width="380" height="320" fill="#1B2E45" rx="8" />

                {/* Streets */}
                <line x1="30" y1="80" x2="350" y2="80" stroke="#243550" strokeWidth="18" strokeLinecap="round" />
                <line x1="30" y1="160" x2="350" y2="160" stroke="#243550" strokeWidth="18" strokeLinecap="round" />
                <line x1="30" y1="240" x2="350" y2="240" stroke="#243550" strokeWidth="18" strokeLinecap="round" />
                <line x1="80" y1="20" x2="80" y2="300" stroke="#243550" strokeWidth="14" strokeLinecap="round" />
                <line x1="190" y1="20" x2="190" y2="300" stroke="#243550" strokeWidth="14" strokeLinecap="round" />
                <line x1="300" y1="20" x2="300" y2="300" stroke="#243550" strokeWidth="14" strokeLinecap="round" />

                {/* Active route */}
                <polyline
                  points="80,240 80,160 190,160 190,80 300,80"
                  fill="none"
                  stroke="#2D52E0"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                />

                {/* Pickup points (blue circles) */}
                <circle cx="80" cy="240" r="9" fill="#2D52E0" />
                <text x="94" y="244" fill="white" fontSize="9" fontWeight="600">P1</text>

                <circle cx="190" cy="160" r="9" fill="#2D52E0" />
                <text x="204" y="164" fill="white" fontSize="9" fontWeight="600">P2</text>

                <circle cx="190" cy="80" r="9" fill="#2D52E0" />
                <text x="204" y="84" fill="white" fontSize="9" fontWeight="600">P3</text>

                {/* Destination (navy) */}
                <rect x="286" y="66" width="28" height="28" rx="5" fill="#0D1B2E" stroke="#2D52E0" strokeWidth="1.5" />
                <text x="300" y="84" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">🏫</text>

                {/* Van (orange) */}
                <circle cx="190" cy="120" r="13" fill="#F59E0B" />
                <text x="190" y="125" fill="white" fontSize="14" textAnchor="middle">🚌</text>

                {/* Legend */}
                <rect x="14" y="276" width="220" height="32" rx="6" fill="rgba(13,27,46,0.85)" />
                <circle cx="28" cy="292" r="5" fill="#2D52E0" />
                <text x="38" y="296" fill="#94A3B8" fontSize="9">Pontos de coleta</text>
                <circle cx="100" cy="292" r="7" fill="#F59E0B" />
                <text x="112" y="296" fill="#94A3B8" fontSize="9">Van (tempo real)</text>
              </svg>
            </div>
            <div className={styles.mapFooter}>
              <div className={styles.mapStat}>
                <span className={styles.mapStatLabel}>Próxima parada</span>
                <span className={styles.mapStatVal}>Ponto P3 · ~3 min</span>
              </div>
              <div className={styles.mapStat}>
                <span className={styles.mapStatLabel}>Passageiros a bordo</span>
                <span className={styles.mapStatVal}>14 / 20</span>
              </div>
            </div>
          </div>
        </div>

        {/* API endpoints estilo Swagger */}
        <SwaggerEndpoints />
      </div>
    </section>
  )
}
