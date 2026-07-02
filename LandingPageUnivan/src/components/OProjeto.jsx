import styles from './OProjeto.module.scss'

const cards = [
  {
    icon: '🎓',
    label: 'CONTEXTO',
    title: 'Trabalho Acadêmico',
    body: 'Desenvolvido como Projeto Aplicado, o UniVan é uma solução real para o problema de transporte universitário — indo além de um exercício teórico.',
  },
  {
    icon: '🚌',
    label: 'PROBLEMA',
    title: 'Transporte Descoordenado',
    body: 'Alunos sem rastreamento em tempo real, motoristas sem controle de embarque e administradores sem visibilidade das rotas ativas.',
  },
  {
    icon: '📱',
    label: 'SOLUÇÃO',
    title: 'Plataforma Integrada',
    body: 'Três interfaces dedicadas — Admin, Motorista e Aluno — sincronizadas em tempo real com controle de embarque, rotas e pagamentos.',
  },
]

export default function OProjeto() {
  return (
    <section id="projeto" className={styles.section}>
      <div className="section-wrapper">
        <div className="section-header centered">
          <span className="badge badge-blue">Projeto Aplicado — Desenvolvimento de Software</span>
          <h2>Sobre o UniVan</h2>
          <p>
            Sistema de gerenciamento de transporte universitário desenvolvido
            como Trabalho de Projeto Aplicado na Faculdade.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map(c => (
            <div key={c.label} className={styles.card}>
              <div className={styles.iconBox}>{c.icon}</div>
              <span className={styles.label}>{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
