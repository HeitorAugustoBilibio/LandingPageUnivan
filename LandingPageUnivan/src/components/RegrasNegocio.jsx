import styles from './RegrasNegocio.module.scss'

const tripStates = [
  { state: 'Agendada', color: 'blue', desc: 'Viagem criada. Reservas abertas até o HorarioLock.' },
  { state: 'Em Curso', color: 'orange', desc: 'Motorista iniciou a viagem. Check-ins liberados.' },
  { state: 'Finalizada', color: 'green', desc: 'Viagem encerrada. Ausentes marcados automaticamente.' },
  { state: 'Cancelada', color: 'red', desc: 'Cancelada antes do lock. Sem possibilidade de reversão.' },
]

const boardingStates = [
  { state: 'Pendente', color: 'gray', desc: 'Reserva feita pelo aluno. Aguardando confirmação.' },
  { state: 'Confirmado', color: 'blue', desc: 'Bloqueio automático ativado. Vaga garantida na van.' },
  { state: 'Embarcado', color: 'green', desc: 'Check-in realizado pelo motorista. Aluno a bordo.' },
  { state: 'Ausente', color: 'red', desc: 'Não compareceu após o início da viagem.' },
]

const rules = [
  {
    icon: '⏱️',
    title: 'Janela de Lock (10 minutos)',
    body: 'Exatamente 10 minutos antes do horário de saída, o sistema encerra automaticamente as reservas. Um serviço em background (executado a cada 30 segundos) converte todos os agendamentos Pendente para Confirmado, garantindo que a van saia com a lista definitiva de passageiros.',
    code: 'HorarioLock = HorarioSaida − 10min',
  },
  {
    icon: '🚌',
    title: 'Controle de Capacidade',
    body: 'O sistema valida, em tempo real, se há vagas disponíveis antes de aceitar um agendamento. A contagem considera apenas reservas Pendente + Confirmado, impedindo overbooking mesmo com múltiplos usuários simultâneos.',
    code: 'Ocupação = Pendente + Confirmado ≤ CapacidadeMax',
  },
  {
    icon: '✅',
    title: 'Fluxo de Check-in',
    body: 'O check-in só é possível enquanto a viagem está Em Curso e o passageiro está Confirmado. O motorista confirma o embarque via app, registrando o horário exato. Ao final da viagem, passageiros ainda Confirmados são marcados automaticamente como Ausente.',
    code: 'Confirmado → [Motorista confirma] → Embarcado',
  },
  {
    icon: '🗑️',
    title: 'Soft Delete',
    body: 'Nenhum registro é deletado fisicamente do banco. Todos os cadastros — usuários, viagens, agendamentos — utilizam o campo Ativo = false para inativação, preservando o histórico completo para auditoria e relatórios.',
    code: 'DELETE → Ativo = false (registro preservado)',
  },
]

export default function RegrasNegocio() {
  return (
    <section id="regras" className={styles.section}>
      <div className="section-wrapper">
        <div className="section-header centered">
          <span className="badge badge-blue">Regras de Negócio</span>
          <h2>Como o sistema funciona por dentro</h2>
          <p>
            Automações, validações e fluxos de estado que garantem a confiabilidade
            da operação de ponta a ponta.
          </p>
        </div>

        {/* State machines */}
        <div className={styles.machines}>
          <div className={styles.machine}>
            <h3 className={styles.machineTitle}>Ciclo de vida da Viagem</h3>
            <div className={styles.states}>
              {tripStates.map((s, i) => (
                <div key={s.state} className={styles.stateItem}>
                  <div className={`${styles.stateBadge} ${styles[s.color]}`}>{s.state}</div>
                  <p className={styles.stateDesc}>{s.desc}</p>
                  {i < tripStates.length - 1 && (
                    <div className={styles.arrow}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.machine}>
            <h3 className={styles.machineTitle}>Ciclo de vida do Embarque</h3>
            <div className={styles.states}>
              {boardingStates.map((s, i) => (
                <div key={s.state} className={styles.stateItem}>
                  <div className={`${styles.stateBadge} ${styles[s.color]}`}>{s.state}</div>
                  <p className={styles.stateDesc}>{s.desc}</p>
                  {i < boardingStates.length - 1 && (
                    <div className={styles.arrow}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rules grid */}
        <div className={styles.rulesGrid}>
          {rules.map(r => (
            <div key={r.title} className={styles.ruleCard}>
              <span className={styles.ruleIcon}>{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <code className={styles.ruleCode}>{r.code}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
