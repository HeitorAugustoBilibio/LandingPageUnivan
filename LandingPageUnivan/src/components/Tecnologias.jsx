import styles from './Tecnologias.module.scss'

const groups = [
  {
    label: 'Back-end',
    accent: 'blue',
    items: [
      { icon: '⚙️', name: 'C# / .NET', desc: 'API REST' },
      { icon: '📄', name: 'Swagger', desc: 'Documentação da API' },
      { icon: '🗄️', name: 'PostgreSQL', desc: 'Banco de dados' },
      { icon: '🔐', name: 'JWT', desc: 'Autenticação' },
    ],
  },
  {
    label: 'Front-end',
    accent: 'green',
    items: [
      { icon: '🅰️', name: 'Angular 21', desc: 'Painel Web (Admin / Aluno / Motorista)' },
      { icon: '🗺️', name: 'Angular Google Maps', desc: 'Rastreamento ao vivo' },
      { icon: '🎨', name: 'SCSS', desc: 'Design System' },
      { icon: '🔄', name: 'HTTP Polling', desc: 'Localização em tempo real' },
    ],
  },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" className={styles.section}>
      <div className="section-wrapper">
        <div className="section-header centered">
          <span className="badge badge-blue">Stack Tecnológico</span>
          <h2>Tecnologias utilizadas</h2>
          <p>Arquitetura moderna e escalável, inteiramente web — sem app mobile.</p>
        </div>
        <div className={styles.groups}>
          {groups.map(g => (
            <div key={g.label} className={styles.group}>
              <span className={`${styles.groupLabel} ${styles[g.accent]}`}>{g.label}</span>
              <div className={styles.grid}>
                {g.items.map(item => (
                  <div key={item.name} className={styles.card}>
                    <div className={`${styles.iconBox} ${styles[g.accent + 'Bg']}`}>
                      {item.icon}
                    </div>
                    <div className={styles.info}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.desc}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
