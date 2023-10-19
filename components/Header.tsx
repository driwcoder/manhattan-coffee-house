import Image from 'next/image'
import Link from 'next/link'
import styles from '../app/page.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div >
        <Image src='/logo.png' width='75' height='60' alt='Logotipo da loja, um copo de café com decorações em amarelo e marrom' />
      </div>
      <nav className={styles.navigationBar}>
        <Link className={styles.links} href='#informacoes'>Informações</Link>
        <Link className={styles.links} href='#contatos'>Contatos</Link>
        <Link className={styles.links} href='#horarios'>Horários</Link>
      </nav>
    </header>
  )
}

export default Header