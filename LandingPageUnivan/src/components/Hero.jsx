import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.dotGrid} />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className="badge badge-blue">Trabalho de Projeto Aplicado</span>
          <h1>UniVan</h1>
          <p>
            Plataforma de gestão de transporte universitário que conecta
            Empresas, Motoristas e Passageiros em tempo real.
          </p>
          <div className={styles.ctas}>
            <a href="#como-funciona" className="btn btn-primary">Conhecer a Plataforma</a>
            <a href="#telas" className="btn btn-secondary">Ver Telas do Sistema</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.mockup}>
            <div className={styles.chrome}>
              <span /><span /><span />
              <div className={styles.urlBar}>Dashboard — Admin</div>
            </div>
            <div className={styles.mockupBody}>
              <img
                src="/screenshots/hero-dashboard.png"
                alt="Dashboard Admin — UniVan"
                className={styles.screenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
