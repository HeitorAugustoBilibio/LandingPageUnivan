import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>U</div>
          <div>
            <span className={styles.name}>UniVan</span>
            <span className={styles.tagline}>Transporte universitário inteligente</span>
          </div>
        </div>

        <div className={styles.info}>
          {[
            ['Tipo', 'Trabalho de Projeto Aplicado'],
            ['Disciplina', 'Desenvolvimento de Software'],
            ['Plataforma', 'Web + Mobile'],
          ].map(([l, v]) => (
            <div key={l} className={styles.infoRow}>
              <span className={styles.infoLabel}>{l}:</span>
              <span className={styles.infoValue}>{v}</span>
            </div>
          ))}
        </div>

        <div className={styles.tags}>
          <span className={styles.madeWith}>Desenvolvido por</span>
          <span className={styles.authors}>Heitor Bilibio, Felipe Fontana e João Rodrigues</span>
          <div className={styles.pills}>
            {['C# / .NET', 'Angular 21', 'PostgreSQL'].map(t => (
              <span key={t} className={styles.pill}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        © 2025 UniVan — Projeto Aplicado. Todos os direitos reservados.
      </div>
    </footer>
  )
}
