import styles from './ComoFunciona.module.scss'

const actors = [
  {
    accent: 'blue',
    role: 'ADMINISTRADOR',
    icon: '⚙️',
    title: 'Gerencia tudo',
    desc: 'Configura rotas, cadastra motoristas e alunos, acompanha viagens em tempo real e acessa relatórios financeiros e de frequência.',
    features: [
      'Dashboard com métricas consolidadas',
      'Gestão de empresas e rotas',
      'Controle financeiro e pagamentos',
      'Relatórios de pontualidade',
    ],
  },
  {
    accent: 'orange',
    role: 'MOTORISTA',
    icon: '🚌',
    title: 'Conduz com controle',
    desc: 'Visualiza a rota do dia, confirma embarques pelo painel web, monitora alunos pendentes e transmite localização em tempo real.',
    features: [
      'Lista de passageiros por viagem',
      'Check-in de embarque (Confirmado → Embarcado)',
      'Mapa com rota ao vivo (Google Maps)',
      'Histórico de viagens',
    ],
  },
  {
    accent: 'green',
    role: 'ALUNO',
    icon: '🎓',
    title: 'Viaja com segurança',
    desc: 'Agenda viagens, acompanha a van no mapa em tempo real pelo painel web, gerencia pagamentos e visualiza histórico.',
    features: [
      'Rastreamento da van ao vivo',
      'Agendamento de viagens',
      'Histórico de viagens',
      'Controle de pagamentos',
    ],
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="section-wrapper">
        <div className="section-header centered">
          <span className="badge badge-solid-blue">Como Funciona</span>
          <h2>Três perfis, uma plataforma</h2>
          <p>Cada ator tem sua interface dedicada, otimizada para suas responsabilidades.</p>
        </div>
        <div className={styles.grid}>
          {actors.map(a => (
            <div key={a.role} className={`${styles.card} ${styles[a.accent]}`}>
              <div className={styles.accentBar} />
              <div className={styles.cardBody}>
                <div className={styles.iconBadge}>{a.icon}</div>
                <span className={styles.role}>{a.role}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <hr className={styles.divider} />
                <ul className={styles.features}>
                  {a.features.map(f => (
                    <li key={f}>
                      <span className={styles.dot} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
