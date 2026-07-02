import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.logo}>U</div>
        <span className={styles.name}>UniVan</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#projeto">O Projeto</a></li>
        <li><a href="#como-funciona">Perfis</a></li>
        <li><a href="#regras">Regras</a></li>
        <li><a href="#maps">Maps</a></li>
        <li><a href="#telas">Telas</a></li>
        <li><a href="#tecnologias">Stack</a></li>
      </ul>
      <a href="#telas" className="btn btn-primary btn-sm">Acessar Sistema</a>
    </nav>
  )
}
