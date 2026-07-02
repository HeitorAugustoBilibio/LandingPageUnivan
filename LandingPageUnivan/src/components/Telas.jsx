import styles from './Telas.module.scss'

function Screen({ src, alt, dark = false, wide = false }) {
  return (
    <div className={`${styles.screen} ${dark ? styles.dark : styles.light} ${wide ? styles.wide : ''}`}>
      <div className={styles.screenChrome} />
      <div className={styles.screenImg}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default function Telas() {
  return (
    <div id="telas">
      {/* Admin */}
      <section className={styles.sectionLight}>
        <div className="section-wrapper">
          <div className="section-header">
            <span className="badge badge-blue">Interface — Administrador</span>
            <h2>Visão do Administrador</h2>
            <p>Dashboard centralizado com métricas, gestão de rotas, usuários e relatórios financeiros.</p>
          </div>
          <div className={styles.adminLayout}>
            <Screen src="/screenshots/admin-dashboard.png" alt="Dashboard Admin" wide />
            <div className={styles.stackCol}>
              <Screen src="/screenshots/admin-rotas.png" alt="Gestão de Rotas" />
              <Screen src="/screenshots/admin-relatorios.png" alt="Relatório Financeiro" />
              <Screen src="/screenshots/admin-pagamentos.png" alt="Financeiro" />
            </div>
          </div>
        </div>
      </section>

      {/* Motorista */}
      <section className={styles.sectionDark}>
        <div className="section-wrapper">
          <div className="section-header">
            <span className="badge badge-solid-orange">Interface — Motorista</span>
            <h2 className={styles.titleWhite}>Visão do Motorista</h2>
            <p className={styles.subWhite}>
              Interface dark, otimizada para uso durante a condução — lista de passageiros,
              check-in de embarque e GPS ao vivo.
            </p>
          </div>
          <div className={styles.motoristaLayout}>
            <Screen src="/screenshots/motorista-passageiros.png" alt="Lista de Passageiros" dark />
            <Screen src="/screenshots/motorista-gps.png" alt="GPS ao Vivo" dark />
          </div>
        </div>
      </section>

      {/* Aluno */}
      <section className={styles.sectionGray}>
        <div className="section-wrapper">
          <div className="section-header">
            <span className="badge badge-green">Interface — Aluno</span>
            <h2>Visão do Aluno</h2>
            <p>Painel web para agendamento, rastreamento em tempo real da van e gestão de pagamentos.</p>
          </div>
          <div className={styles.adminLayout}>
            <Screen src="/screenshots/aluno-mapa.png" alt="Rastreamento ao Vivo" wide />
            <div className={styles.stackCol}>
              <Screen src="/screenshots/aluno-agendamento.png" alt="Agendamento de Viagem" dark />
              <Screen src="/screenshots/aluno-pagamentos.png" alt="Controle de Pagamentos" dark />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
