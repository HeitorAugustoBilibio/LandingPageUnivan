import styles from './Problemas.module.scss'

const problems = [
  {
    icon: '📍',
    title: 'Aluno sem visibilidade',
    body: 'O passageiro não sabe onde a van está, quanto tempo falta para chegar ao ponto de coleta, ou se a viagem saiu no horário. A incerteza gera atrasos e ausências desnecessárias.',
  },
  {
    icon: '📋',
    title: 'Embarque sem controle',
    body: 'Motoristas dependiam de listas em papel ou mensagens de WhatsApp para confirmar quem embarcou. Não havia registro digital de presença, ausências ou horário de check-in.',
  },
  {
    icon: '📊',
    title: 'Gestão às cegas',
    body: 'Administradores não tinham visão centralizada das rotas ativas, ocupação dos veículos, passageiros confirmados nem métricas de pontualidade em tempo real.',
  },
  {
    icon: '🚫',
    title: 'Sem controle de capacidade',
    body: 'Agendamentos eram aceitos sem limite, gerando overbooking. Não havia validação automática contra a capacidade máxima de cada veículo por viagem.',
  },
  {
    icon: '⏱️',
    title: 'Cancelamentos fora de hora',
    body: 'Passageiros cancelavam a última hora, impossibilitando realocação. Não havia janela de corte automática para encerrar reservas antes da saída.',
  },
  {
    icon: '🔄',
    title: 'Fluxo manual e suscetível a erros',
    body: 'Toda a operação — agendamento, confirmação, controle de embarque e finalização de viagem — era feita manualmente, gerando inconsistências e retrabalho.',
  },
]

export default function Problemas() {
  return (
    <section id="problemas" className={styles.section}>
      <div className="section-wrapper">
        <div className="section-header centered">
          <span className="badge badge-blue">O Diagnóstico</span>
          <h2>Problemas que o UniVan resolve</h2>
          <p>
            O transporte universitário terceirizado enfrenta desafios operacionais reais.
            O UniVan foi construído para eliminar cada um deles com automação e rastreamento.
          </p>
        </div>
        <div className={styles.grid}>
          {problems.map(p => (
            <div key={p.title} className={styles.card}>
              <span className={styles.icon}>{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
